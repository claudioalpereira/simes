
// ------------------------------- Aux ---------------------------------
	// populates date field with current date
	Date.prototype.toDateInputValue = (function() {
		var local = new Date(this);
		local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
		return local.toJSON().slice(0,10);
	});




// ------------------------------- JS ---------------------------------
function parseObj(obj){
	parseObjHeader(obj);
	parseObjChecklist(obj);
}


function parseObjHeader(obj){
	
	
	$('#main-title').text(obj.title);
	$('.subtitle').text(obj.subtitle);
	$('#description').text(obj.description);

	$.each(obj.inputs, function(key, value){
		
		var id = ''+value.name;
		
		// checks if there is any value stored on sessionStorage, if not, falls back to the first value defined
		var val = window.sessionStorage && window.sessionStorage.getItem(id) || '';
	
		// date field
		if(value.name == 'date'){							
			var val = window.sessionStorage && window.sessionStorage.getItem(id) || new Date().toDateInputValue();
			$('#header_card').append('<input type="date" id="'+id+'" name="'+value.name+'" value="'+val+'"/>'); 
		}
		// options field
		else if(value.options != undefined){
			
			$('#header_card').append('<select id="'+id+'" name="'+id+'"> ');
			var arr = value.options.split(',');
			var val = window.sessionStorage && window.sessionStorage.getItem(id) || '';

			$.each(arr, function(k,v){
				var sel = val==v?'selected':'';
				$('#'+id).append('<option value="'+v+'" '+sel+'">'+v+'</option>');
			});
		}
		
		// every other field is considered text
		else{
			var val = window.sessionStorage && window.sessionStorage.getItem(id) || '';
			$('#header_card').append('<input type="text" id="'+id+'" name="'+id+'" placeholder="'+value.text+'" value="'+val+'"/>');
		}
	});
}

function parseObjChecklist(obj){
	
	var idx = subidx = 1;
	
	$.each(obj.checklist, function(key, value){
		
		// section title
		$('#questions_ul').append('<li class="table-view-divider">'+idx+' - '+value.section+'</li>');

		// questions
		$.each(value.questions, function(k,v){
			
			var subsection_id = idx+'_'+subidx++;
			var button_id = 'btn_'+subsection_id;
			var modal_id = 'modal_'+subsection_id;
			
			// checks if there is any value stored on sessionStorage, if not, falls back to the first value defined
			var button_v = window.sessionStorage && window.sessionStorage.getItem(button_id) || v.options.split(',')[0];
			
			$('#questions_ul').append(
				'<li class="table-view-cell media">	\
					<input type="button" id="'+button_id+'" name="'+button_id+'" onclick="toggle(this,\''+v.options+'\')"  value="'+button_v+'" class="my_btn btn "/>'+
					
						'<div class="media-body">\
							<div style="float: left; margin: 10px; margin-top:0px;">'+subsection_id.replace('_','.')+'</div>\
							<p>'+v.text+'</p>  \
						</div>  \
				</li>	');
			$('#checklist_form').append(createModal(modal_id, v));
		});

		// reset indexes
		idx++;
		subidx = 1;
		
	});
	
}

function createModal(id, v){
	
	var select = parseAnswerSnippetsIntoHtmlSelect(v);

	// checks if there is any value stored on sessionStorage
	var value = window.sessionStorage && window.sessionStorage.getItem(id) || '';
	
	var ret =
	 '<div id="'+id+'" class="modal">\
		<header class="bar bar-nav">\
			<a class="icon icon-close pull-right" href="#'+id+'"></a>\
			<h1 class="title">Observações '+id.split('_').splice(1,99).join('.')+'</h1>\
		</header>\
		<div class="content">'+
		select
		+'<textarea id="'+id+'" name="'+id+'" style="height:90%;" placeholder="Observações" >'+value+'</textarea>\
		</div>\
	</div>';
	
	return ret;
}

function parseAnswerSnippetsIntoHtmlSelect(obj){

	if(obj.answer_snippets == undefined || obj.answer_snippets.length==0) return '';
	
	var ret = '<select class="predefined-text-for-textarea">';

	$.each(obj.answer_snippets, function(idx, value){
		ret += '<option>'+value+'<option>';
	});
	ret += '</select>';
	return ret;
}





//
// Init
//
///////////////////////////////////////////////////////////////////////////////////////////////////////

function init(obj){
	
	parseObj(obj);
	$('.my_btn').each(function(idx, el){ setButtonColor(el); });
	
	// disabled due to performance issues on mobile platforms
	// the head still shrinks, but with the ugliest method 
	//headShrinker();
	addModalListenerToButtons();
	addPredefinedTextToModals();
	
	// sets sessionStorage behaviour
	if(window.sessionStorage){

		$('input[type="button"]').click(function(ev){window.sessionStorage.setItem(ev.target.id,ev.target.value);});
		$('input[type="text"]').change(function(ev){window.sessionStorage.setItem(ev.target.id,ev.target.value);});
		$('input[type="date"]').change(function(ev){window.sessionStorage.setItem(ev.target.id,ev.target.value);});
		$('select').change(function(ev){window.sessionStorage.setItem(ev.target.id,ev.target.value);})
		$('textarea').on('input', function(ev){window.sessionStorage.setItem(ev.target.id,ev.target.value);})
	}
}

function reset(){
	
	snapper.close();
	if(window.sessionStorage) window.sessionStorage.clear();
	$('.modal').remove();
	$('#header_card').html('');
	$('#questions_ul').html('');
}


$(document).ready(function(){init(simesA);});



//
// long press
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////
function setButtonColor(button){
	$(button).removeClass('btn-primary');
	$(button).removeClass('btn-positive');
	$(button).removeClass('btn-negative');
	
	if(button.value == 'OK'){ $(button).addClass('btn-positive'); }
	if(button.value == 'KO'){ $(button).addClass('btn-negative'); }	
}

function toggle(t, arrayString){
	t.value = myToggle(t.value, arrayString); 
	setButtonColor(t);
}

function myToggle(curr, arrayString){
	
	var args = arrayString.split(',');
	var i = args.indexOf(curr);
	return args[++i%args.length];
}

//
// long press
// http://stackoverflow.com/questions/2625210/long-press-in-javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////

var pressTimer;

function addModalListenerToButtons(){
	$(".my_btn").mouseup(function(){
	  clearTimeout(pressTimer);
	  // Clear timeout
	  return false;
	}).mousedown(function(e){
	  // Set timeout
	  pressTimer = window.setTimeout(function() { $('#'+e.target.id.replace('btn_','modal_')).toggleClass('active'); },1000); 
	  
	  return false; 
	});
}

//
// texto pré-definido para iserção nas textareas
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
function addPredefinedTextToModals(){
	$('.predefined-text-for-textarea').on('change', function() {
		$(this).next('textarea').append(this.value+'\n');
	});
}



//
// shrinks the header when scrolls
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////
function headShrinker(){
	var minH=44, maxH=130, maxTop=$('#description-wrapper').css('margin').replace('px','');
	$('#content').scroll(function(){

		var st = $(this).scrollTop();
		
		$('#description-wrapper').height(Math.max(minH, maxH-st));
		//document.getElementById("#description-wrapper").style.backgroundPosition = "-200px -40px";
		$('questions_ul').css('margin-top',Math.max(minH, maxH-st));
		//$('#description-wrapper').css('margin',Math.max(0, maxTop-st));
	});
}




//=============================================================================== 
//
//	Other section, should be on different .js
//
//=============================================================================== 

//
//	Dropbox
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
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


//
//	JSON 2 HTML
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
 function myJSON2HTML(json) {
	var json = typeof json != 'object' ? JSON.parse(json) : json;

	var tbl = '<html><head><meta http-equiv=Content-Type content="text/html; charset=windows-1252"></head><body><table><tr>';
	
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
	tbl += '</tr></table></body></html>';
	
	return tbl;
}

//
//	Download
//
///////////////////////////////////////////////////////////////////////////////////////////////////////

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

//
// Event Listeners
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////
function loadSimesA(){
	reset();
	init(simesA);
}
function loadSimesB(){
	reset();
	init(simesB);
}

//
// submit button
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////
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

$(function() {
    $('form').submit(function() {
		
	try{
		
		var json = JSON.stringify($('form').serializeObject());
		var xls = myJSON2HTML(json);
		
		// computes name
		var name = document.title+"_"+$('#date').val()+"_"+$('#unidade').val();

		// 
		if(window.sessionStorage){
			window.sessionStorage.clear();
		}
		
		// local storage
		if(window.localStorage){
			localStorage.setItem(name, json);
			$("#logdiv").append("<p>Saved to localStorage</p>");
		} else {
			$("#logdiv").append("<p>localStorage not available</p>");
		}
		
		download2(name, xls, 'xls');

		// dropbox
		if(saveToDropBox(name+'.xls', xls)){
			$("#logdiv").append("<p>Saved to the cloud</p>");
		} else {
			$("#logdiv").append("<p>cloud not available</p>");
		}
		
		$('input').prop('disabled', true);
	
		}catch(err){
			$("#logdiv").append(err.message);
			alert(err.message);
		}
		return false;
    });
});