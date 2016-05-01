
// ------------------------------- JSON ---------------------------------
var cl = {
	type : 'checklist',
	title : 'Simes A',
	subtitle : 'Pr�ticas de Confe��o',
	description : 'Esta checklist � usada nas inspe��es �s unidades, com o objectivo de verificar e classificar as pr�ticas de confe��o utilizadas. Com base nesta checklist �, posteriormente, elaborado um relat�rio trimestral que serve de suporte � avalia��o global de cada unidade.',

	inputs : [
		{options:'Interna,Externa', text:'Interna / Externa', name:'tipo'},
		{text:'N�mero', name:'num'},
		{text:'Data', name:'date'},
		{text:'C�d. Unidade', name:'codUn'},
		{text:'Unidade', name:'unidade'}
	],




	checklist : [
		{
			section : 'Cozinha',
			questions : [
			{options:'OK,KO,N/A',value:1,text:'O pessoal lava as m�os.'},
			{options:'OK,KO,N/A',value:1,text:'O pessoal limpa os p�s antes de entrar na cozinha.'},
			{options:'OK,KO,N/A',value:1,text:'O pessoal puxa o autoclismo quando mija'}
			]
		},	
		{
			section : 'Comida',
			questions : [
				{options:'OK,KO,N/A',value:1,text:'A comida � fixe.'},
				{options:'OK,KO,N/A',value:1,text:'A comida cheira bem.'},
				{options:'OK,KO,N/A',value:1,text:'A sopa est� azeda'}
			]
		},	
		{
			section : 'Equipamentos',
			questions : [
			{
				text:'O fog�o est� limpinho.', 
				options:'OK,KO,N/A',
				value:1,
				answer_snippets:[
					'Fog�o inexistente',
					'Fog�o avariado',
					'Fog�o existente, mas n�o � usado',
					'Fog�o imundo',
					'Fog�o foi limpo, mas os bicos n�o foram desengordurados',
					'Plano de limpeza foi cumprido, mas tem de ser alterado'
				]
			},
			{
				text:'lou�a fina', 
				options:'OK,KO,N/A',
				value:1,
				answer_snippets:[
					'N�o se usa loi�a desta c�',
					'Usa-se desta lou�a, mas n�o se lava',
					'No dia em que foi feita  a auditoria, ainda n�o se tinha lavado loi�a',
					'Toda cagada',
					'Mal lavada porque a m�quina est� avariada',
					'Mal lavada porque a empregada � pergui�osa'
					]
			}
			]
		},	
		{
			section : 'Comida',
			questions : [
				{options:'OK,KO,N/A',value:1,text:'A comida � fixe.'},
				{options:'OK,KO,N/A',value:1,text:'A comida cheira bem.'},
				{options:'OK,KO,N/A',value:1,text:'A sopa est� azeda'}
			]
		},	
		{
			section : 'Cozinha',
			questions : [
			{options:'OK,KO,N/A',value:1,text:'O pessoal lava as m�os.'},
			{options:'OK,KO,N/A',value:1,text:'O pessoal limpa os p�s antes de entrar na cozinha.'},
			{options:'OK,KO,N/A',value:1,text:'O pessoal puxa o autoclismo quando mija'}
			]
		},	
		{
			section : 'Comida',
			questions : [
				{options:'OK,KO,N/A',value:1,text:'A comida � fixe.'},
				{options:'OK,KO,N/A',value:1,text:'A comida cheira bem.'},
				{options:'OK,KO,N/A',value:1,text:'A sopa est� azeda'}
			]
		},	
	]
};

					
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
		
		var id = ''+value.name+'_'+key;
		
		// date field
		if(value.name == 'date'){							
			$('#header_card').append('<input type="date" id="'+id+'" name="'+value.name+'" value="'+new Date().toDateInputValue()+'"/>'); }
		
		// options field
		else if(value.options != undefined){
			
			$('#header_card').append('<select id="'+id+'" name="'+id+'"> ');
			var arr = value.options.split(',');

			$.each(arr, function(k,v){
				$('#'+id).append('<option value="'+v+'" >'+v+'</option>');
			});
		}
		
		// every other field is considered text
		else{
			$('#header_card').append('<input type="text" id="'+id+'" name="'+id+'" placeholder="'+value.text+'"/>');
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
			
			$('#questions_ul').append(
				'<li class="table-view-cell media">	\
					<input type="button" id="btn_'+subsection_id+'" onclick="toggle(this,\''+v.options+'\')"  value="'+v.options.split(',')[0]+'" class="my_btn btn "/>'+
					
						'<div class="media-body">\
							<div style="float: left; margin: 10px; margin-top:0px;">'+subsection_id.replace('_','.')+'</div>\
							<p>'+v.text+'</p>  \
						</div>  \
				</li>	');
			$('body').append(createModal('modal_'+subsection_id, v));
		});

		// reset indexes
		idx++;
		subidx = 1;
		
	});
	
}

function createModal(id, v){
	
	var select = parseAnswerSnippetsIntoHtmlSelect(v);
	return 
	 '<div id="'+id+'" class="modal">\
		<header class="bar bar-nav">\
			<a class="icon icon-close pull-right" href="#'+id+'"></a>\
			<h1 class="title">Observa��es '+id.split('_').splice(1,99).join('.')+'</h1>\
		</header>\
		<div class="content">'+
		parseAnswerSnippetsIntoHtmlSelect(v)
		+'<textarea id="'+id+'" name="'+id+'" style="height:90%;" placeholder="Observa��es" ></textarea>\
		</div>\
	</div>';
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
parseObj(cl);
$('.my_btn').each(function(idx, el){ setButtonColor(el); });



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

var pressTimer

$(".my_btn").mouseup(function(){
  clearTimeout(pressTimer)
  // Clear timeout
  return false;
}).mousedown(function(e){
  // Set timeout
  pressTimer = window.setTimeout(function() { $('#'+e.target.id.replace('btn_','modal_')).toggleClass('active'); },1000); 
  
  return false; 
});


//
// texto pr�-definido para iser��o nas textareas
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
$('.predefined-text-for-textarea').on('change', function() {
	$(this).next('textarea').append(this.value+'\n');
});




//
// shrinks the heder when scroll
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////
var minH=44, maxH=130, maxTop=$('#description-wrapper').css('margin').replace('px','');
$('#content').scroll(function(){

	var st = $(this).scrollTop();
	
	$('#description-wrapper').height(Math.max(minH, maxH-st));
	$('questions_ul').css('margin-top',Math.max(minH, maxH-st));
	//$('#description-wrapper').css('margin',Math.max(0, maxTop-st));
});

