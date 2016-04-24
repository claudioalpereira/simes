 	$(document).ready(function() {
        if (typeof(localStorage) === 'undefined' ) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
					//load the items
            getItems(); 
        }
    });
	
	var objsA=[];
	var objsB=[];

var getItems = function() {
	
	var timeLog, logLength, i;				
    i = 0;
    logLength = localStorage.length-1; //how many items are in the database starting with zero
	timeLog = '';
	var itemKey, value, obj;
	
	$('.tableRow').remove();
	
	//now we are going to loop through each item in the database
	for (i = 0; i <= logLength; i++) {
			
		//lets setup some variables for the key and values
		itemKey = localStorage.key(i);

//		console.log('parsing '+itemKey);

		if(!itemKey.startsWith('simes')){
	//		console.log(itemKey+' skipped');
			continue;
		}
		value = localStorage.getItem(itemKey);
		obj = JSON.parse(value);

		if(itemKey.startsWith('simesA')){		
			objsA.push(obj);
		}
		if(itemKey.startsWith('simesB')){		
			objsB.push(obj);
		}
		
		//now that we have the item, lets add it to the table
		timeLog += '<tr id="'+itemKey+'" class="tableRow"><td>'+itemKey+'</td><td>'+obj.IntExt+'</td><td>'+obj.num+'</td><td>'+obj.data+'</td><td>'+obj.unidade+'</td><td><a title="download csv" class="downloadItem icon major fa-download" style="display:inline-block"> </a><a title="upload para dropbox" class="uploadItem icon major  fa-cloud-upload" style="display:inline-block"> </a><a title="apagar" class="deleteItem icon major fa-times" style="display:inline-block"> </a></td></tr>';
	}
			
	//var csv = JSON2CSV(objs, ',', true, true);
	//$("#logos").append(csv);
		
	$("#theLog").append(timeLog); //update the table with the list items
			
	$(".tableRow").mouseenter(function() {
		$(this).children().children(".delete").show();
	});
	$(".tableRow").mouseleave(function() {
		$(this).children().children(".delete").hide();
	});
	
	$("#downloadAll").click(function() {
		downloadAll();
	});
	
	$("#uploadAll").click(function() {
		uploadAll();
	});
	
	$("#deleteAll").click(function() {
		localStorage.clear();
		getItems(); 
	});
	
	$(".deleteItem").click(function() {
		var itemId = $(this).parent().parent().attr('id');								
		if(confirm("Apagar o item "+itemId+" da memória?")){
			localStorage.removeItem(itemId);
			getItems(); 
		}
	});
	
	$(".uploadItem").click(function() {
		var itemId = $(this).parent().parent().attr('id');								
		var json = localStorage.getItem(itemId);
		var csv = JSON2CSV("["+json+"]", ',', true, true);

		saveToDropBox(itemId.substring(0,6)+'.csv', csv, append=true);
	});

	$(".downloadItem").click(function() {
		var itemId = $(this).parent().parent().attr('id');								
		var json = localStorage.getItem(itemId);
		var csv = JSON2CSV("["+json+"]", ',', true, true);
		
		download2(itemId, csv);
	});

}

function uploadAll(){
	
	var csvA = JSON2CSV(objsA, ',', true, true);
	var csvB = JSON2CSV(objsB, ',', true, true);
		
	saveToDropBox('simesA.csv', csvA, append=true);
	saveToDropBox('simesB.csv', csvB, append=true);
}

function downloadAll(){
	
	
	var csv = JSON2CSV(objsA.concat(objsB), ',', true, true);
	download2('simes', csv);

}







