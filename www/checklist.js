
// ------------------------------- JSON ---------------------------------
var cl = {
	type : 'checklist',
	title : 'Simes A',
	subtitle : 'Práticas de Confeção',
	description : 'Esta checklist é usada nas inspeções às unidades, com o objectivo de verificar e classificar as práticas de confeção utilizadas. Com base nesta checklist é, posteriormente, elaborado um relatório trimestral que serve de suporte à avaliação global de cada unidade.',

	inputs : [
		{options:'Interna,Externa', text:'Interna / Externa', name:'tipo'},
		{text:'Número', name:'num'},
		{text:'Data', name:'date'},
		{text:'Cód. Unidade', name:'codUn'},
		{text:'Unidade', name:'unidade'}
	],




	checklist : [
		{
			section : 'Cozinha',
			questions : [
			{options:'OK,KO,N/A',value:1,text:'O pessoal lava as mãos.'},
			{options:'OK,KO,N/A',value:1,text:'O pessoal limpa os pés antes de entrar na cozinha.'},
			{options:'OK,KO,N/A',value:1,text:'O pessoal puxa o autoclismo quando mija'}
			]
		},	
		{
			section : 'Comida',
			questions : [
				{options:'OK,KO,N/A',value:1,text:'A comida é fixe.'},
				{options:'OK,KO,N/A',value:1,text:'A comida cheira bem.'},
				{options:'OK,KO,N/A',value:1,text:'A sopa está azeda'}
			]
		},	
		{
			section : 'Equipamentos',
			questions : [
			{
				text:'O fogão está limpinho.', 
				options:'OK,KO,N/A',
				value:1,
				answer_snippets:[
					'Fogão inexistente',
					'Fogão avariado',
					'Fogão existente, mas não é usado',
					'Fogão imundo',
					'Fogão foi limpo, mas os bicos não foram desengordurados',
					'Plano de limpeza foi cumprido, mas tem de ser alterado'
				]
			},
			{
				text:'louça fina', 
				options:'OK,KO,N/A',
				value:1,
				answer_snippets:[
					'Não se usa loiça desta cá',
					'Usa-se desta louça, mas não se lava',
					'No dia em que foi feita  a auditoria, ainda não se tinha lavado loiça',
					'Toda cagada',
					'Mal lavada porque a máquina está avariada',
					'Mal lavada porque a empregada é perguiçosa'
					]
			}
			]
		},	
		{
			section : 'Comida',
			questions : [
				{options:'OK,KO,N/A',value:1,text:'A comida é fixe.'},
				{options:'OK,KO,N/A',value:1,text:'A comida cheira bem.'},
				{options:'OK,KO,N/A',value:1,text:'A sopa está azeda'}
			]
		},	
		{
			section : 'Cozinha',
			questions : [
			{options:'OK,KO,N/A',value:1,text:'O pessoal lava as mãos.'},
			{options:'OK,KO,N/A',value:1,text:'O pessoal limpa os pés antes de entrar na cozinha.'},
			{options:'OK,KO,N/A',value:1,text:'O pessoal puxa o autoclismo quando mija'}
			]
		},	
		{
			section : 'Comida',
			questions : [
				{options:'OK,KO,N/A',value:1,text:'A comida é fixe.'},
				{options:'OK,KO,N/A',value:1,text:'A comida cheira bem.'},
				{options:'OK,KO,N/A',value:1,text:'A sopa está azeda'}
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
			<h1 class="title">Observações '+id.split('_').splice(1,99).join('.')+'</h1>\
		</header>\
		<div class="content">'+
		parseAnswerSnippetsIntoHtmlSelect(v)
		+'<textarea id="'+id+'" name="'+id+'" style="height:90%;" placeholder="Observações" ></textarea>\
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
// texto pré-definido para iserção nas textareas
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

