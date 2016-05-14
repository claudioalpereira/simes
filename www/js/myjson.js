/*
 * Integration with http://www.myjson.com/
 *
 * Copyright 2016, Claudio Leal claudio_leal@hotmail.com
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  
 * Version: 0.1.1
 *
 **************************************************************
 *
 * USAGE:
 * 
 * mJ.bags
 * 	retrieves all current bags stored, with name, id
 * 
 * mJ.get('my bag name', function(obj){ myObj = obj}) 
 *		sets the var myObj with the object stored on bag 'my bag name'
 *
 * myObj.someProp = someValue
 *		changes the JSON object
 * 
 * mJ.save(myObj, 'my bag name', callback)
 * 	saves the changes made on the object 
 * 
 * mJ.save(myObj, 'some other bag', callback)
 * 	makes a copy of the original object in a new bag, keeping both versions 
 * 
 **************************************************************
 */
 
var mJ = {
		
	// there must be a JSON object stored at www.myjson.com/[INDEX_ID]
	INDEX_ID: '4k4m6',
	index: undefined,
	bags: undefined,
	
	get: function(name_id, callback){
		
		// checks
		if(!this.index || !this.bags){
			console.log('myjson - ERROR: Not initialized. Please run mJ.init()');
			return;
		}
		
		var bag = this.bags.find(function(b){return b.name==name_id || b.id==name_id;});
		if(bag == undefined){
			console.log("myjson - ERROR: No bag was found with the name or id '"+name_id+"' .");
			return;
		}
		var id = bag.id;
		
		// call
		console.log('myjson - GET https://api.myjson.com/bins/'+id+' ...');
		return $.get("https://api.myjson.com/bins/"+id, function(data, textStatus, jqXHR) {
			console.log('myjson - GET https://api.myjson.com/bins/'+id+' STATUS: '+textStatus+'.');
			if(callback){ callback(data); }
		});
	},
	

	save: function(obj, bag_name, callback){
		
		if(typeof(obj) != 'object'){
			console.log("myjson - ERROR: invalid object.");
			return false;						
		}

		if(typeof(bag_name) != 'string'){
			console.log("myjson - ERROR: invalid bag name.");
			return false;						
		}
		
		var bag = this.bags.find(function(b){return b.name==bag_name;});
			
		if(bag){
			return this.put(obj, bag.id, callback);
		}
		else{
			return this.post(obj, function(data, textStatus, jqXHR){
				
				self.index.bags.push({name:bag_name, id:jqXHR.responseJSON.uri.replace("https://api.myjson.com/bins/",'')}); //4rng6
				
				self.put(self.index, self.INDEX_ID, function(dat){
					self.index = dat;
					
					// client callback only runs after we've updated index and bags variables so they already see the updated values
				if(callback){ callback(data); }
				});
			});
		}
	},
	
	post: function(obj, callback){
		
		console.log("myjson - POST new object '"+obj.name+"'...");
			
		if(typeof(obj) != 'object'){
			console.log('myjson - ERROR: arg is not an object.');
			return false;
		}
		
		return $.ajax({
			url:"https://api.myjson.com/bins",
			type:"POST",
			data:JSON.stringify(obj),
			contentType:"application/json; charset=utf-8",
			dataType:"json",
			success: function(data, textStatus, jqXHR){
				if(callback){ callback(data, textStatus, jqXHR);}
			}
		});    
	},
	
	put: function(obj, id, callback){
		
		$.ajax({
			url:"https://api.myjson.com/bins/"+id,
			type:"PUT",
			data:JSON.stringify(obj),
			contentType:"application/json; charset=utf-8",
			dataType:"json",
			success: function(data, textStatus, jqXHR){
				if(callback){ callback(data, textStatus, jqXHR);}
			}
		});     
	},
	
	init: function(){
		$.get("https://api.myjson.com/bins/"+mJ.INDEX_ID, function(data, textStatus, jqXHR){
			data.bags = data.bags || []; 
			mJ.index = data; 
			mJ.bags = data.bags;
		});
	}
}

mJ.init();