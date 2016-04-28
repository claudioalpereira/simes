
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
	
	
	$('.title').text(obj.title);
	$('.subtitle').text(obj.subtitle);
	$('#description').text(obj.description);

	$.each(obj.inputs, function(key, value){
		
		if(value.name == 'date'){							
			$('#header_card').append('<input type="date" id="date'+key+'" name="date" value="'+new Date().toDateInputValue()+'"/>'); }
		
		else if(value.options != undefined){
			var selectId = ''+value.name+key;
			
			$('#header_card').append('<select id="'+selectId+'"> ');
			
			var arr = value.options.split(',');
			
			$.each(arr, function(k,v){
				$('#'+selectId).append('<option value="'+v+'" >'+v+'</option>');
			});
		}
		else{
			
			$('#header_card').append('<input type="text" id="'+value.name+key+'" name="'+value.name+key+'" placeholder="'+value.text+'"/>');
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
			
			var subsection_idx = idx+'.'+subidx++;
			$('#questions_ul').append(
				' <li class="table-view-cell media">	<input type="button" onclick="toggle(this,\''+v.options+'\')"  value="'+v.options.split(',')[0]+'" class="my_btn btn btn-outlined">  <div class="media-body"><div style="float: left; margin: 10px; margin-top:0px;">'+subsection_idx+'</div><p>'+v.text+'</p>  </div>  </li>	');
		});

		// reset indexes
		idx++;
		subidx = 1;
		
	});
	
}


parseObj(cl);

$('.my_btn').each(function(idx, el){ setButtonColor(el); });


function setButtonColor(button){
	$(button).removeClass('btn-primary');
	$(button).removeClass('btn-positive btn-outlined');
	$(button).removeClass('btn-negative');
	
	if(button.value == 'OK'){ $(button).addClass('btn-positive btn-outlined'); }
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



