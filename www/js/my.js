

//=============================================================================== 
//
//	Dropbox
//
//=============================================================================== 

var DROPBOX_API_TOKEN = 'gXbZxKDMLG8AAAAAAAAsennEIAnMTl4JN7EcXAoW6c-7o2e3yVSCcwK5hJ_nazZw';

function saveToDropBox(filename, content, append){
	
	var allOK = true;
	var client;
	
	if( client = 'undefined' ) { client = new Dropbox.Client({ token: DROPBOX_API_TOKEN }); }
	if( !client.isAuthenticated() ) { client.authenticate(); }
	
	if(append){
		try{
			client.readFile(filename , {binary:true}, function(error, data){ 
				client._writeFileUsingPut(filename, data+content, function (error) {console.log(error);});
			});
		} catch (err) {
			client._writeFileUsingPut(filename, content, function (error) {console.log(error);});
		}
	}
	
	client._writeFileUsingPut(filename, content, function (error) {console.log(error); if(error){allOK = false;}});
	
	return allOK;
}

function readFromDropBox(filename){

	var client, content;
	
	if( client = 'undefined' ) { client = new Dropbox.Client({ token: DROPBOX_API_TOKEN }); }
	if( !client.isAuthenticated() ) { client.authenticate(); }
	
	client.readFile(filename , function(error, data){ 
		content = data;
	});
	
	return content;
}


//=============================================================================== 
//
//	JSON 2 CSV
//
//=============================================================================== 

function JSON2CSV(objArray, delimiter, includeHeaders, useQuotedString) {
	var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

	var str = '';
	var line = '';

	if (includeHeaders) {
		var head = array[0];
		if (useQuotedString) {
			for (var index in array[0]) {
				var value = index + "";
				line += '"' + value.replace(/"/g, '""') + '"'+delimiter;
			}
		} else {
			for (var index in array[0]) {
				line += index + delimiter;
			}
		}

		line = line.slice(0, -1);
		str += line + '\r\n';
	}

	for (var i = 0; i < array.length; i++) {
		var line = '';

		if (useQuotedString) {
			for (var index in array[i]) {
				var value = array[i][index] + "";
				line = line.replace('\r\n','\n');
				line += '"' + value.replace(/"/g, '""') + '"'+delimiter;
			}
		} else {
			for (var index in array[i]) {
				line += array[i][index] + delimiter;
			}
		}

		line = line.slice(0, -1);
		str += line + '\r\n';
	}
	return str;
	
}
		
$("#convert").click(function() {
	var json = $.parseJSON($("#json").val());
	var csv = JSON2CSV(json);
	$("#csv").val(csv);
});
	
$("#download").click(function() {
	var json = $.parseJSON($("#json").val());
	var csv = JSON2CSV(json);
	window.open("data:text/csv;charset=utf-8," + escape(csv))
});



//=============================================================================== 
//
//	JSON 2 HTML Table
//
//=============================================================================== 

 function myJSON2HTML(json) {
	var json = typeof json != 'object' ? JSON.parse(json) : json;

	var tbl = '<table><tr>';
	
	for (var k in json) {
		if(!json.hasOwnProperty(k)) continue;	
		tbl += '<th style="color:white; background-color:black;">'+k+'</th>';
	}
	tbl += '</tr>';
	
	for (var k in json) {
		if(!json.hasOwnProperty(k)) continue;
		
		// In order to cope with line feeds inside the same cell, we use the excel-specific br style 
		// ...and a very clever replaceAll taken from https://gist.github.com/CrowderSoup/9095873 :)
		var data = json[k].split('\r\n').join('<br style="mso-data-placement:same-cell;" />');
		
		tbl += '<td>'+data+'</td>';
	}
	tbl += '</tr></table>';
	
	return tbl;
}
		


//=============================================================================== 
//
//	Geolocation
//
//=============================================================================== 

function getLocation(callback) {
    
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(callback);
    }
}

function to_url(position, type){
	
	if(type == 'google_maps'){
		//google maps url format: https://www.google.pt/maps/@39.1233287,-9.3179406,12z?hl=en
		return 'https://www.google.pt/maps/@'+ position.coords.latitude +','+position.coords.longitude+',15z?hl=en';
	}
	
}

function showPosition(position) {
	$('#location').val("Latitude:" + position.coords.latitude + " Longitude:" + position.coords.longitude);	
	$('#googlemapslink').prop('href',to_url(position,'google_maps'));
	$('#googlemaps').show(1000);
}


//=============================================================================== 
//
//	Download
//
//=============================================================================== 

function isInternetExplorer() {
   var ua = window.navigator.userAgent;
   var msie = ua.indexOf("MSIE ");
   
   return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
}

function download2(fileName, data, type) {
	
	var content_type;
	
	// .csv and .xls are the only options
	if(type == 'csv') content_type = 'data:application/csv;charset=utf-8,';
	else if(type == 'xls') content_type = 'data:application/vnd.ms-excel,';
	else return;
     
     if(isInternetExplorer()){
         var IEwindow = window.open('about:blank');
         IEwindow.document.write('sep=,\r\n' + data);
         IEwindow.document.close();
         IEwindow.document.execCommand('SaveAs', true, fileName + "."+type);
         IEwindow.close();
     } else {
         var uri = content_type + escape(data);
         var link = document.createElement("a");
         link.href = uri;
         link.style = "visibility:hidden";
         link.download = fileName + "." + type;
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
     }
}	





//=============================================================================== 
//
//	Submit
//
//=============================================================================== 

// Por default, as checkboxes not checked nao sao serializadas. 
// Esta funcao faz com que sejam todas serializadas, independentemente do estado	
$.fn.serializeObject = function()
{
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
		
	// botao submit serializa todos os inputs para JSON e guarda-os na localStorage e dropbox, se disponivel 
$(function() {
    $('form').submit(function() {
		
	try{

		// by default, unchecked inputs aren't serialized, this line assures they are
		$('form').find(':checkbox:not(:checked)').attr('value', 'off').prop('checked', true);
		
		var json = JSON.stringify($('form').serializeObject());
		var xls = myJSON2HTML(json);
		
		// computes name
		var name = pagename+"_"+$('#date').val()+"_"+$('#unidade').val();
		
		// CURRENTY NOT USED: tries to find the regional list separator to create the correct csv
		// only gets the browser separator, if it is different from the OS separator doesn't work
/*		var list = ["a", "b"];
		var listSeparator = list.toLocaleString().substring(1, 2);
		
		// UGLY & SLOW: creates all 4 combinations of csv files 
		var csvWithHeaders_comma = JSON2CSV("["+json+"]", ',', true, true);
		var csvNoHeaders_comma = JSON2CSV("["+json+"]", ',', false, true);
		var csvWithHeaders_colon = JSON2CSV("["+json+"]", ';', true, true);
		var csvNoHeaders_colon = JSON2CSV("["+json+"]", ';', false, true);
*/		
		// local storage
		if(window.localStorage){
			localStorage.setItem(name, json);
			$("#logdiv").append("<p>Saved to localStorage</p>");
		} else {
			$("#logdiv").append("<p>localStorage not available</p>");
		}
		
		download2(name, xls, 'xls');
		//window.open('data:application/vnd.ms-excel,' + xls);
		
		// zip
/*		var zip = new JSZip();
		zip.file(name+'.csv', csvWithHeaders_comma);
		
		var promise = null;
		if (JSZip.support.uint8array) {
		  promise = zip.generateAsync({type : "uint8array"});
		} else {
		  promise = zip.generateAsync({type : "string"});
		}
		promise.then(function(result) {
			saveToDropBox(name, result, append=false);
		}, function(err) {
			console.log('Error zipping file'); 
		});
*/		
		// dropbox
		if(saveToDropBox(name+'.xls', xls)){
			$("#logdiv").append("<p>Saved to the cloud</p>");
		} else {
			$("#logdiv").append("<p>cloud not available</p>");
		}
		
		// download
/*		var csv2 = 
					'\r\n\r\nValores separados por virgulas\r\n\r\n' +
					csvWithHeaders_comma +
					'valores separados por ponto e virgula\r\n\r\n' +
					csvWithHeaders_colon;
		download2(name, csvWithHeaders_comma);

		// reset
		//$("html, body").animate({ scrollTop: 0 }, 1000);
		$(".switch").fadeTo("slow",1);
		$(".myObs").hide(2000);
		$('.switch input[type="checkbox"]').prop('disabled', false);
		$('.switch input[type="checkbox"]').prop('checked', false);
		$('input[type="text"]').val('');
		$('input[type="hidden"]').val('');
		$('textarea').val('');
*/		$('input').prop('disabled', true);
/*		
		$("html, body").scrollTop(0);
		if(confirm('Registo gravado.')){
			window.location.reload();
		}
		
*/	
		}catch(err){
			$("#logdiv").append(err.message);
			alert(err.message);
		}
		return false;
    });
});


//=============================================================================== 
//
//	Simes Init
//
//=============================================================================== 


function SimesInit(){
	
	// cliking on the Obs balloon, hides/unhides the Obs textarea
	$(".obs-balloon").click(function(){
		
		$(this).next(".myObs").toggle(1000);
    });

	
//	$(".slideThree input[type=checkbox]:checked").click(function(){
//	    $(this).next(".switch").fadeTo("slow",0.4);
//	});
	
	$(".slideThree input").change(function(){
	    //console.log($(this).parent().next(".switch").children('input[type="checkbox"]:first')	);
		if($(this).is(':checked')){
			$(this).parent().next(".switch").fadeTo("slow",1);
			$(this).parent().next(".switch").children('input[type="checkbox"]:first').prop('disabled', false);
		}else{
			$(this).parent().next(".switch").fadeTo("slow",0.3);
			$(this).parent().next(".switch").children('input[type="checkbox"]:first').prop('checked', false);
			$(this).parent().next(".switch").children('input[type="checkbox"]:first').prop('disabled', true);
		}
	});

	// NOT WORKING - obs icon changes when Obs is not empty
	$(".myObs").focusout(function(){
		if(!$(this).val()){
			$(this).prev(".obs-balloon").addClass("fa-comments-o");
			$(this).prev(".obs-balloon").removeClass("fa-comments");
		}else{
			$(this).prev(".obs-balloon").addClass("fa-comments");
			$(this).prev(".obs-balloon").removeClass("fa-comments-0");		
		}
	});
		
	// populates date field with current date
	Date.prototype.toDateInputValue = (function() {
		var local = new Date(this);
		local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
		return local.toJSON().slice(0,10);
	});
	$('#date').val(new Date().toDateInputValue());
}




		
		
		
		
		
		
		
		