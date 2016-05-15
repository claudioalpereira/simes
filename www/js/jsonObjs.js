
// ------------------------------- JSON ---------------------------------

var cl = {
    type : 'checklist',
    title : 'Checklist A',
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


var simesA = {
 type : 'checklist',
 title : 'Simes A',
 subtitle : 'Práticas de Confeção',
 description : 'Esta checklist é usada nas inspeções às unidades, com o objectivo de verificar e classificar as práticas de confeção utilizadas.',
 inputs : [
  {options:'Interna,Externa', text:'Interna / Externa', name:'tipo'},
  {text:'Número', name:'num'},
  {text:'Data', name:'date'},
  {text:'Cód. Unidade', name:'codUn'},
  {text:'Unidade', name:'unidade'}
 ],
 checklist : [
  {
   section : 'Receção De Matérias Primas',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Verifica a adequação da viatura ao serviço' },
   { options:'OK,KO,N/A', value:1, text:'Confere a fatura com a encomenda' },
   { options:'OK,KO,N/A', value:1, text:'Verifica os rótulos dos produtos e os prazos de validade com o mapa de rastreabilidade' },
   { options:'OK,KO,N/A', value:1, text:'Verifica as características organoléticas e a integridade das embalagens' },
   { options:'OK,KO,N/A', value:1, text:'Efetua relatórios de não conformidade (reclamações a fornecedores), quando aplicável' },
   { options:'OK,KO,N/A', value:2, text:'Temperaturas de receção de MP controladas e registadas (T= -15ºC ou entre 0 e 5ºC)' },
   ]
  },
  {
   section : 'Armazenagem Na Despensa',
   questions : [
   { options:'OK,KO,N/A', value:2, text:'Produtos dentro dos prazos de validade, quando aplicável' },
   { options:'OK,KO,N/A', value:1, text:'Produtos sem alteração das caraterísticas organoléticas.' },
   { options:'OK,KO,N/A', value:2, text:'Existência de rotulagem  em todos os produtos' },
   { options:'OK,KO,N/A', value:2, text:'Produtos encetados devidamente identificados (lote e ou prazo de validade, quando aplicável) e em embalagens íntegras, convenientemente fechadas' },
   { options:'OK,KO,N/A', value:1, text:'Embalagens exteriores removidas antes do armazenamento' },
   { options:'OK,KO,N/A', value:1, text:'Produtos alimentares armazenados separadamente de produtos não alimentares' },
   { options:'OK,KO,N/A', value:1, text:'Ausência de produtos alimentares armazenados diretamente no chão' },
   { options:'OK,KO,N/A', value:1, text:'Produtos alimentares armazenados desencostados da parede' },
   { options:'OK,KO,N/A', value:1, text:'Produtos e MP corretamente ordenados e separados por famílias' },
   { options:'OK,KO,N/A', value:1, text:'Conservação dos rótulos dos produtos perecíveis durante 72 horas (3 dias úteis) após o consumo' },
   { options:'OK,KO,N/A', value:2, text:'Conservação dos mapas de rastreabilidade durante 6 meses' },
   { options:'OK,KO,N/A', value:1, text:'Identificação  e segregação de Produto Não Conforme' },
   ]
  },
  {
   section : 'Armazenagem No Frio ',
   questions : [
   { options:'OK,KO,N/A', value:2, text:'Produtos dentro dos prazos de validade' },
   { options:'OK,KO,N/A', value:1, text:'Produtos sem alteração das características organoléticas' },
   { options:'OK,KO,N/A', value:2, text:'Existência de rotulagem em todos os produtos' },
   { options:'OK,KO,N/A', value:2, text:'Produtos perecíveis encetados devidamente identificados (lote e ou prazo de validade e ou data de abertura) e em embalagens íntegras, convenientemente fechadas' },
   { options:'OK,KO,N/A', value:1, text:'Inexistência de latas, sacos pretos ou de supermercados, caixas de madeira e embalagens exteriores envolventes, no interior das câmaras' },
   { options:'OK,KO,N/A', value:2, text:'Ausência de alimentos confecionados de véspera' },
   { options:'OK,KO,N/A', value:2, text:'Ausência de alimentos congelados artesanalmente' },
   { options:'OK,KO,N/A', value:1, text:'Armazenagem de vegetais, carne e pescado com separação física entre si' },
   { options:'OK,KO,N/A', value:1, text:'Embalagens íntegras e sem gelo no interior' },
   { options:'OK,KO,N/A', value:1, text:'Frutas e vegetais mantidos a temperaturas inferiores a 10ºC' },
   { options:'OK,KO,N/A', value:1, text:'Alimentos refrigerados a temperaturas superiores a 0ºC e < 5ºC' },
   { options:'OK,KO,N/A', value:1, text:'Alimentos congelados e ultra congelados  mantidos a temperaturas =  a -18ºCAlimentos congelados e ultra congelados  mantidos a temperaturas =  a -18ºC' },
   { options:'OK,KO,N/A', value:1, text:'Correto cumprimento do procedimento interno em caso de avaria do equipamento de frio' },
   { options:'OK,KO,N/A', value:1, text:'Identificação  e segregação de produto não conforme' },
   { options:'OK,KO,N/A', value:2, text:'Temperaturas das câmaras de frio registadas e controladas' },
   ]
  },
  {
   section : 'Preparação E Descongelação ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Preparação separada dos alimentos (no espaço ou no tempo)' },
   { options:'OK,KO,N/A', value:1, text:'Utilização correta de facas e placas de corte' },
   { options:'OK,KO,N/A', value:2, text:'Lavagem e desinfeção de todos os vegetais a consumir em cru' },
   { options:'OK,KO,N/A', value:2, text:'Lavagem e desinfeção de todas as frutas a consumir em cru' },
   { options:'OK,KO,N/A', value:1, text:'Preparação efetuada sem interrupções' },
   { options:'OK,KO,N/A', value:1, text:'Ausência de contacto direto das mãos com alimentos prontos a consumir (ex.: sandes, saladas, picagem da carne, etc.)' },
   { options:'OK,KO,N/A', value:2, text:'Operação de descongelação correta  (no frio, com separação entre as matérias primas e os sucos de descongelação)' },
   { options:'OK,KO,N/A', value:2, text:'Temperaturas de  descongelação registadas e controladas' },
   ]
  },
  {
   section : 'Confeção',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Realização da prova de alimentos antes do serviço' },
   { options:'OK,KO,N/A', value:1, text:'Alimentos confecionados separados de alimentos crus' },
   { options:'OK,KO,N/A', value:2, text:'Ausência de sobras resultantes da confeção/distribuição' },
   { options:'OK,KO,N/A', value:2, text:'Utilização de ovos pasteurizados em confeções de risco' },
   { options:'OK,KO,N/A', value:2, text:'Ausência de alimentos de origem animal mal confecionados (crus, mal passados, em sangue)' },
   { options:'OK,KO,N/A', value:2, text:'Ausência de banhos de fritura deteriorados na unidade (com resíduos, espuma abundante, cor escura, fumos contínuos e cheiro desagradável)' },
   { options:'OK,KO,N/A', value:1, text:'Banhos de fritura de alimentos a temperaturas inferiores a 180º C' },
   { options:'OK,KO,N/A', value:2, text:'Registo de controlo de óleos de fritura' },
   { options:'OK,KO,N/A', value:2, text:'Registos  e controlo de temperaturas de arrefecimento' },
   ]
  },
  {
   section : 'Transporte E Distribuição',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Utilização de luvas e máscaras naso-bucais na realização de empratamento de risco' },
   { options:'OK,KO,N/A', value:2, text:'Temperaturas de transporte de alimentos registadas e controladas (> 65ºC ou entre 0 e 5ºC)' },
   { options:'OK,KO,N/A', value:1, text:'Alimentos protegidos de contaminação durante o transporte' },
   { options:'OK,KO,N/A', value:2, text:'Temperaturas de distribuição (espera a quente/frio) registadas e controladas (> 65ºC ou entre 0 e 5ºC)' },
   { options:'OK,KO,N/A', value:1, text:'Existência de embalagens invioláveis para o serviço de azeite no prato' },
   { options:'OK,KO,N/A', value:2, text:'Realização correta da recolha de amostras testemunho, identificação e conservação na congelação por 3 dias úteis' },
   ]
  },
  {
   section : 'Limpeza E Desinfeção',
   questions : [
   { options:'OK,KO,N/A', value:2, text:'Registos de higienização atualizados' },
   { options:'OK,KO,N/A', value:1, text:'Sanitários/vestiários higienizados diariamente' },
   { options:'OK,KO,N/A', value:1, text:'Zonas de preparação/confeção são higienizadas sempre após as preparações' },
   { options:'OK,KO,N/A', value:1, text:'Caixotes de lixo com sacos de plástico no interior e mantidos tapados entre tarefas e no final da produção' },
   { options:'OK,KO,N/A', value:1, text:'Evitam que os resíduos alimentares  se acumulem nas zonas de produção' },
   { options:'OK,KO,N/A', value:1, text:'Baldes de lixos higienizados diariamente' },
   { options:'OK,KO,N/A', value:1, text:'Ralos e grelhas de escoamento limpos' },
   { options:'OK,KO,N/A', value:1, text:'Aplicação dos produtos químicos efectuada corretamente' },
   { options:'OK,KO,N/A', value:2, text:'Instalações limpas (verificar pó por cima armários, interruptores, exaustores e filtros, etc)' },
   { options:'OK,KO,N/A', value:2, text:'Equipamentos limpos (verificar cumulação de pó e sujidade no motor dos equipamentos de frio)' },
   { options:'OK,KO,N/A', value:2, text:'Utensílios e palamenta limpos' },
   { options:'OK,KO,N/A', value:1, text:'Trem de cozinha encontra-se corretamente arrumado (voltado para baixo)' },
   { options:'OK,KO,N/A', value:1, text:'Materiais de limpeza guardados em local próprio' },
   { options:'OK,KO,N/A', value:1, text:'Detergentes em embalagem adequada, devidamente identificados' },
   { options:'OK,KO,N/A', value:1, text:'Não há vestígios de utilização de panos multi-usos, durante a produção de refeições' },
   { options:'OK,KO,N/A', value:1, text:'Panos e pegas estão higienizados' },
   { options:'OK,KO,N/A', value:1, text:'Máquinas e  peças  protegidas após a higienização' },
   { options:'OK,KO,N/A', value:1, text:'Ausência de  vestígios de palha-de-aço ou esfregão inox' },
   ]
  },
  {
   section : 'Controlo De Pragas',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Portas de acesso ao exterior fechadas' },
   { options:'OK,KO,N/A', value:1, text:'Janelas fechadas' },
   { options:'OK,KO,N/A', value:2, text:'Ausência de vestígios de pragas e infestantes' },
   ]
  },
  {
   section : 'Higiene Pessoal',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Sapatos, roupa e objectos pessoais guardados em local apropriado' },
   { options:'OK,KO,N/A', value:2, text:'Ausência de adornos (anéis, piercings, colares, etc.)' },
   { options:'OK,KO,N/A', value:1, text:'Kit de visitante (bata descartável e touca)' },
   { options:'OK,KO,N/A', value:1, text:'Máscaras naso-bucais no manipuladores doentes' },
   { options:'OK,KO,N/A', value:1, text:'Não fumar em todas as instalações' },
   { options:'OK,KO,N/A', value:1, text:'Não comer e ou beber na cozinha' },
   { options:'OK,KO,N/A', value:1, text:'Barba e bigode aparados' },
   { options:'OK,KO,N/A', value:1, text:'Unhas curtas, limpas e sem verniz' },
   { options:'OK,KO,N/A', value:1, text:'Ausência de feridas e cortes desprotegidos' },
   { options:'OK,KO,N/A', value:2, text:'Higienização correta das mãos' },
   { options:'OK,KO,N/A', value:1, text:'Higienização periódica das mãos e mudança de luvas descartáveis' },
   { options:'OK,KO,N/A', value:1, text:'Utilização correta da touca e de uma farda limpa' },
   ]
  },
  {
   section : 'Registos E Outros Documentos ',
   questions : [
   { options:'OK,KO,N/A', value:2, text:'Registo de equipa de HACCP atualizado' },
   { options:'OK,KO,N/A', value:2, text:'Registo de fluxograma de HACCP atualizado' },
   { options:'OK,KO,N/A', value:2, text:'Existência de planos de higienização adequados à unidade' },
   { options:'OK,KO,N/A', value:1, text:'Existência de fichas de dados de segurança de todos os produtos de limpeza, lubrificantes ou outros' },
   { options:'OK,KO,N/A', value:1, text:'Todo o pessoal tem formação adequada ao tipo de serviço que presta (nomeadamente HACCP e boas práticas de segurança alimentar)' },
   { options:'OK,KO,N/A', value:1, text:'Arquivo de análises microbiólogicas, quando aplicável' },
   { options:'OK,KO,N/A', value:1, text:'Arquivo de relatórios de inspeções' },
   { options:'OK,KO,N/A', value:1, text:'Arquivo de ementas com respetivas alterações' },
   { options:'OK,KO,N/A', value:2, text:'Informação de serviço (IDS) implementada com o cliente e enviada para o escritório' },
   { options:'OK,KO,N/A', value:1, text:'Controlo dos dispositivos de medição e monitorização (termómetros)' },
   { options:'OK,KO,N/A', value:2, text:'Sinalética atualizada e completa' },
   { options:'OK,KO,N/A', value:1, text:'Manuais e matrizes de registo existentes e atualizados (em papel ou em formato eletrónico)' },
   { options:'OK,KO,N/A', value:1, text:'Preenchimento correto e atualizado do Plano de Melhoria (PDM): ações corretivas, preventivas e de melhoria' },
   ]
  },
  {
   section : ' Práticas Ambientais',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Separação de resíduos verdes (vidro)' },
   { options:'OK,KO,N/A', value:1, text:'Separação de resíduos amarelos (embalagens, plástico e metal)' },
   { options:'OK,KO,N/A', value:1, text:'Separação de resíduos azul (papel e cartão)' },
   { options:'OK,KO,N/A', value:1, text:'Separação e reencaminhamento de resíduos orgânicos para valorização (compostagem, por exemplo)' },
   { options:'OK,KO,N/A', value:2, text:'Encaminhamento dos óleos alimentares usados (OAU) para operador licenciado' },
   { options:'OK,KO,N/A', value:1, text:'Certificado do encaminhamento do OAU pelo fornecedor válido' },
   { options:'OK,KO,N/A', value:1, text:'Guias de acompanhamento de resíduos (GAR), por exemplo dos OAU preenchidas no campo do produtor e transportador' },
   { options:'OK,KO,N/A', value:1, text:'Não há gasto supérfluo de energia (luzes acesas, abertura excessiva de câmaras, ar condicionado e computadores ligados ininterruptamente)' },
   { options:'OK,KO,N/A', value:1, text:'Não existe gasto supérfluo de água' },
   { options:'OK,KO,N/A', value:1, text:'Não há gasto supérfluo de consúmiveis (aproveitamento de papel, impressão em modo económico, impressões desnecessárias)' },
   { options:'OK,KO,N/A', value:1, text:'Os funcionários possuem formação/informação em boas práticas ambientais' },
   { options:'OK,KO,N/A', value:1, text:'Certificado Verdoreca válido, caso venda bebidas em embalagens não retornáveis' },
   ]
  },
  {
   section : 'Segurança No Trabalho',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Existe uma caixa de “primeiros socorros” completa e sinalizada' },
   { options:'OK,KO,N/A', value:1, text:'A avaliação de risco está atualizada' },
   { options:'OK,KO,N/A', value:1, text:'As funcionárias sabem como e quando utilizar o conteúdo da caixa de primeiros socorros' },
   { options:'OK,KO,N/A', value:1, text:'Existem e são utilizadas as luvas de malha de aço.' },
   { options:'OK,KO,N/A', value:1, text:'Existem e são utilizadas as luvas/pegas para objetos quentes' },
   { options:'OK,KO,N/A', value:1, text:'Os funcionários utilizam calçado fechado e antiderrapante' },
   { options:'OK,KO,N/A', value:1, text:'Existe e é utilizado o kit de proteção de produtos químicos (óculos, máscara e luvas com antebraços)' },
   { options:'OK,KO,N/A', value:1, text:'Os funcionários utilizam corretamente as máquinas, instrumentos, substâncias e outros meios postos à sua disposição' },
   { options:'OK,KO,N/A', value:1, text:'Os funcionários possuem formação/informação na área da segurança no trabalho (primeiros socorros, riscos profissionais, combate a incêndios e plano de emergência/evacuação)' },
   { options:'OK,KO,N/A', value:1, text:'Funcionários sabem onde é o corte geral de gás e/ou eletricidade' },
   { options:'OK,KO,N/A', value:1, text:'Os funcionários sabem como e quando utilizar os meios de combate a incêndio colocados à sua disposição' },
   ]
  },
]
};

var simesB = {
    type : 'checklist',
    title : 'Simes B',
    subtitle : 'Práticas de Confeção',
    description : '.',
    inputs : [
        {options:'Interna,Externa', text:'Interna / Externa', name:'tipo'},
        {text:'Número', name:'num'},
        {text:'Data', name:'date'},
        {text:'Cód. Unidade', name:'codUn'},
        {text:'Unidade', name:'unidade'}
    ],
    checklist : [
        {
   section : 'Zona De Receção E Armazenagem',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Balança em inox e sem ferrugem' },
   { options:'OK,KO,N/A', value:1, text:'Prateleiras em material lavável e imputrescível (ex.: inox)' },
   { options:'OK,KO,N/A', value:1, text:'Prateleiras instaladas de forma a permitir a limpeza adequada da área circundante' },
   { options:'OK,KO,N/A', value:1, text:'Armários frigoríficos adequados e suficientes para a diferenciação dos alimentos' },
   { options:'OK,KO,N/A', value:1, text:'Armários frigoríficos adequados e  suficientes para a descongelação dos alimentos' },
   { options:'OK,KO,N/A', value:1, text:'Câmaras de conservação de congelados adequadas e suficientes para a diferenciação dos alimentos (carne, peixe, vegetais,...)' },
   { options:'OK,KO,N/A', value:1, text:'Portas, borrachas, ventilação,  prateleiras e  dobradiças adequadas no interior das câmaras e armários frigoríficos' },
   { options:'OK,KO,N/A', value:1, text:'Equipamento de frio rapidamente reparado sempre que se verifica uma falha no seu funcionamento' },
   { options:'OK,KO,N/A', value:1, text:'Estrados em material adequado para a colocação de produtos alimentares' },
   { options:'OK,KO,N/A', value:1, text:'Tabuleiros ou caixas plásticas adequadas à descongelação (com rede que permita uma separação do produto e do seu exsudado), em número suficiente' },
   ]
  },
  {
   section : ' Preparação De Matérias Primas ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Descascadora de batata e legumes' },
   { options:'OK,KO,N/A', value:1, text:'Cortadora de legumes' },
   { options:'OK,KO,N/A', value:1, text:'Serra elétrica' },
   { options:'OK,KO,N/A', value:1, text:'Abre latas' },
   { options:'OK,KO,N/A', value:1, text:'Bancadas suficientes, em material resistente, impermeável e de fácil limpeza' },
   { options:'OK,KO,N/A', value:1, text:'Facas e utensílios em material imputrescível,  diferenciadas e em número suficiente' },
   { options:'OK,KO,N/A', value:1, text:'Placas de corte em material adequado, diferenciadas e em número suficiente' },
   ]
  },
  {
   section : ' Confeção',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Fogão' },
   { options:'OK,KO,N/A', value:1, text:'Forno' },
   { options:'OK,KO,N/A', value:1, text:'Forno convetor' },
   { options:'OK,KO,N/A', value:1, text:'Fritadeira basculante' },
   { options:'OK,KO,N/A', value:1, text:'Fritadeira' },
   { options:'OK,KO,N/A', value:1, text:'Marmita' },
   { options:'OK,KO,N/A', value:1, text:'Grelhador (pedra lávica, chapa lisa, chapa canelada)' },
   { options:'OK,KO,N/A', value:1, text:'Varinha mágica' },
   { options:'OK,KO,N/A', value:1, text:'Picadora de carnes' },
   { options:'OK,KO,N/A', value:1, text:'Fiambreira' },
   { options:'OK,KO,N/A', value:1, text:'Batedeira' },
   { options:'OK,KO,N/A', value:1, text:'Exaustores' },
   { options:'OK,KO,N/A', value:1, text:'Trem de cozinha suficiente' },
   { options:'OK,KO,N/A', value:1, text:'Bancadas suficientes, em material resistente, impermeável e de fácil limpeza' },
   ]
  },
  {
   section : 'Distribuição (Transporte)',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Veículos/contentores de fácil limpeza/desinfeção' },
   { options:'OK,KO,N/A', value:1, text:'Veículos/contentores evitam contaminação dos alimentos' },
   { options:'OK,KO,N/A', value:1, text:'Veículos/contentores capazes de manter os alimentos a temperaturas adequadas e de permitir o controlo das mesmas' },
   ]
  },
  {
   section : 'Distribuição (Linha De Self)',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Porta pão, tabuleiros e talheres (únicos ou diferenciados)' },
   { options:'OK,KO,N/A', value:1, text:'Elemento de frio de apoio à linha de self (bancada refrigerada)' },
   { options:'OK,KO,N/A', value:1, text:'Banhos maria' },
   { options:'OK,KO,N/A', value:1, text:'Vitrine refrigerada' },
   { options:'OK,KO,N/A', value:1, text:'Estufas' },
   { options:'OK,KO,N/A', value:1, text:'Carros de distribuição' },
   { options:'OK,KO,N/A', value:1, text:'Linha de self com protecção na zona de alimentos' },
   { options:'OK,KO,N/A', value:1, text:'Carros porta tabuleiros em quantidade suficiente' },
   { options:'OK,KO,N/A', value:1, text:'Mesa de saladas e molhos refrigerada' },
   ]
  },
  {
   section : 'Bar',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Vitrine refrigerada (temperatura >0ºC e < 5ºC)' },
   { options:'OK,KO,N/A', value:1, text:'Armário de bebidas exclusivo' },
   { options:'OK,KO,N/A', value:1, text:'Cuba suficiente para lavagem de louça com água fria e quente' },
   { options:'OK,KO,N/A', value:1, text:'Máquina de lavar louça fina' },
   { options:'OK,KO,N/A', value:1, text:'Lavatório exclusivo para lavagem mãos com comando de abertura não manual' },
   { options:'OK,KO,N/A', value:1, text:'Saboneteira com sabão e desinfetante' },
   { options:'OK,KO,N/A', value:1, text:'Papeleira com papel' },
   { options:'OK,KO,N/A', value:1, text:'Iluminação suficiente' },
   { options:'OK,KO,N/A', value:1, text:'Ventilação adequada e suficiente' },
   { options:'OK,KO,N/A', value:1, text:'Paredes lisas e laváveis' },
   { options:'OK,KO,N/A', value:1, text:'Tetos lisos e laváveis' },
   { options:'OK,KO,N/A', value:1, text:'Pavimento antiderrapante, lavável, impermeável e não tóxico' },
   { options:'OK,KO,N/A', value:1, text:'Rede de esgotos eficaz, com ralos e grelhas' },
   { options:'OK,KO,N/A', value:1, text:'Janelas equipadas com redes de proteção' },
   { options:'OK,KO,N/A', value:1, text:'Balde de lixo com tampa e acionado por pedal' },
   ]
  },
  {
   section : 'Lavagem De Louça',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Banca lava trem' },
   { options:'OK,KO,N/A', value:1, text:'Paredes protegidas nas zonas de maior desgaste' },
   { options:'OK,KO,N/A', value:1, text:'Armário de louça grossa fechado e em material adequado' },
   { options:'OK,KO,N/A', value:1, text:'Chuveiro de enxaguamento' },
   { options:'OK,KO,N/A', value:1, text:'Cestos de lavagem de louça em material adequado' },
   { options:'OK,KO,N/A', value:1, text:'Máquina de lavar' },
   { options:'OK,KO,N/A', value:1, text:'Armário de louça fina fechado em material adequado' },
   { options:'OK,KO,N/A', value:1, text:'Balde do lixo  com tampa e acionado por pedal' },
   { options:'OK,KO,N/A', value:1, text:'Temperaturas de secagem de louça fina superior a 80ºC' },
   ]
  },
  {
   section : 'Áreas De Serviço E Produção',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'O lay-out permite cumprir a marcha em frente' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada para as atividades administrativas (escritórios ou gabinete para responsável)' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada de receção de matérias primas' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada para armazenagem de produtos alimentares' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada para armazenagem de produtos não alimentares' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada para armazenagem de produtos químicos' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada para armazenagem de equipamentos e dispositivos para limpeza e desinfeção' },
   { options:'OK,KO,N/A', value:1, text:'Zonas de preparação diferenciada  para carnes' },
   { options:'OK,KO,N/A', value:1, text:'Zonas de preparação diferenciada para pescado' },
   { options:'OK,KO,N/A', value:1, text:'Zonas de preparação diferenciada  para vegetais' },
   { options:'OK,KO,N/A', value:1, text:'Zonas de preparação diferenciada  para sobremesas' },
   { options:'OK,KO,N/A', value:1, text:'Zonas de preparação diferenciada  para alimentos confecionados' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada para lavagem de louça fina' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada para lavagem de louça grossa e contígua à cozinha' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada para o empratamento das refeições (self-service, bar ou empratamento)' },
   ]
  },
  {
   section : 'Água  ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Fornecimento pela rede pública' },
   { options:'OK,KO,N/A', value:1, text:'Água quente e fria em quantidade suficiente' },
   { options:'OK,KO,N/A', value:1, text:'Caso a água não seja oriunda da rede pública executa análises microbiológicas regularmente ou periodicamente' },
   { options:'OK,KO,N/A', value:1, text:'Máquinas de venda automática (café/bebedouros) com água potável' },
   { options:'OK,KO,N/A', value:1, text:'Gelo alimentar (que contata com os alimentos) fabricado com água potável' },
   ]
  },
  {
   section : 'Instalações  Sanitárias E Vestiários Dos Manipuladores',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Iluminação e ventilação adequadas' },
   { options:'OK,KO,N/A', value:1, text:'Não comunicam diretamente com os locais onde se manipulam alimentos' },
   { options:'OK,KO,N/A', value:1, text:'Separados por sexos' },
   { options:'OK,KO,N/A', value:1, text:'Com condições adequadas para o número de funcionários ' },
   { options:'OK,KO,N/A', value:1, text:'Vestiários com chuveiro' },
   { options:'OK,KO,N/A', value:1, text:'Cacifos individuais por cada trabalhador' },
   { options:'OK,KO,N/A', value:1, text:'Lavatórios com água quente e fria ou pré misturada' },
   { options:'OK,KO,N/A', value:1, text:'Meios de secagem higiénicos (papel descartável, rolo, ar quente)' },
   { options:'OK,KO,N/A', value:1, text:'Lâmpadas protegidas' },
   { options:'OK,KO,N/A', value:1, text:'Pavimentos revestidos de material resistente, liso e impermeável, inclinados para os ralos de escoamento' },
   { options:'OK,KO,N/A', value:1, text:'Existência de caixotes do lixo com tampa, revestidos de saco de plástico' },
   { options:'OK,KO,N/A', value:1, text:'Paredes de cor clara e revestidos a material impermeável até, pelo menos, 1,5m de altura' },
   { options:'OK,KO,N/A', value:1, text:'Bom estado de conservação' },
   ]
  },
  {
   section : 'Tetos Ou Superfície Interna Do Telhado',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Construídos de forma a evitar a acumulação de sujidade e reduzir a condensação e o desenvolvimento de bolores indesejáveis e o desprendimento de partículas' },
   { options:'OK,KO,N/A', value:1, text:'Iluminação natural ou artificial adequada' },
   { options:'OK,KO,N/A', value:1, text:'Lâmpadas com armaduras estanques ' },
   { options:'OK,KO,N/A', value:1, text:'Bom estado de conservação' },
   ]
  },
  {
   section : 'Paredes  E Janelas',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Material de fácil limpeza/desinfeção' },
   { options:'OK,KO,N/A', value:1, text:'Material impermeável, não absorvente, lavável e não tóxico' },
   { options:'OK,KO,N/A', value:1, text:'Existência de superfície lisa até uma altura adequada às operações' },
   { options:'OK,KO,N/A', value:1, text:'Esquinas protegidas e arredondadas' },
   { options:'OK,KO,N/A', value:1, text:'Paredes em bom estado de conservação' },
   { options:'OK,KO,N/A', value:1, text:'Janelas em bom estado de conservação' },
   ]
  },
  {
   section : 'Pavimento',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Material de fácil limpeza/desinfeção' },
   { options:'OK,KO,N/A', value:1, text:'Material impermeável, não absorvente, lavável e não tóxico' },
   { options:'OK,KO,N/A', value:1, text:'Cantos e rodapés arredondados' },
   { options:'OK,KO,N/A', value:1, text:'Permitem o escoamento adequado de águas de lavagem e resíduos' },
   { options:'OK,KO,N/A', value:1, text:'Bom estado de conservação' },
   ]
  },
  {
   section : 'Ralos De Escoamento ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Em número suficiente' },
   { options:'OK,KO,N/A', value:1, text:'Colocados junto a zonas de acumulação de água' },
   { options:'OK,KO,N/A', value:1, text:'Protegidos por grelhas' },
   { options:'OK,KO,N/A', value:1, text:'Rede de esgotos eficaz e devidamente  protegida' },
   { options:'OK,KO,N/A', value:1, text:'Caixa de separação de gorduras/ fécula através de ligação ao coletor público ou sistema individual de tratamento' },
   { options:'OK,KO,N/A', value:1, text:'Bom estado de conservação' },
   ]
  },
  {
   section : 'Portas ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Material resistente, impermeável e de fácil limpeza/ desinfeção' },
   { options:'OK,KO,N/A', value:1, text:'Construidos em superficies lisas e não absorventes' },
   { options:'OK,KO,N/A', value:1, text:'Porta(s) de comunicação para o exterior com mola de retorno' },
   { options:'OK,KO,N/A', value:1, text:'Maçaneta tipo “muleta”' },
   { options:'OK,KO,N/A', value:1, text:'Bom estado de conservação' },
   ]
  },
  {
   section : 'Arejamento E Ventilação ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Ventilação natural ou mecânica adequada e suficiente' },
   { options:'OK,KO,N/A', value:1, text:'Evitam o fluxo de zonas contaminadas para zonas limpas' },
   { options:'OK,KO,N/A', value:1, text:'Sistema de ventilação permite acesso fácil aos filtros ou outras partes que necessitem de limpeza e/ou substituição' },
   { options:'OK,KO,N/A', value:1, text:'Extração de fumos e cheiros' },
   { options:'OK,KO,N/A', value:1, text:'Sistemas de ventilação em bom estado de conservação' },
   ]
  },
  {
   section : 'Controlo De Pragas ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Existência de mapa de iscos' },
   { options:'OK,KO,N/A', value:1, text:'Iscos bem localizados e identificados' },
   { options:'OK,KO,N/A', value:1, text:'Existe conhecimento do plano de desinfestação da unidade' },
   { options:'OK,KO,N/A', value:1, text:'Registos de intervenções técnicas actualizadas' },
   { options:'OK,KO,N/A', value:1, text:'Declarações de venda dos produtos, fichas e dados de segurança.' },
   { options:'OK,KO,N/A', value:1, text:'Portas protegidas' },
   { options:'OK,KO,N/A', value:1, text:'Janelas com redes de proteção contra insetos facilmente removíveis para limpeza' },
   { options:'OK,KO,N/A', value:1, text:'Insetocaptores bem localizados e com lâmpadas a funcionar' },
   { options:'OK,KO,N/A', value:1, text:'Inexistência de vestígios de pragas e infestantes' },
   ]
  },
  {
   section : 'Segurança No Trabalho ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Extintores em quantidade suficiente  e adequados para fogos ABC, por exemplo: CO2' },
   { options:'OK,KO,N/A', value:1, text:'Mantas corta-fogo para extinção de fogos por abafamento' },
   { options:'OK,KO,N/A', value:1, text:'Carretel ou boca de incêndio autónoma do sistema abastecimento de água potável' },
   { options:'OK,KO,N/A', value:1, text:'Sistema de deteção automática de incêndios/fugas de gás' },
   { options:'OK,KO,N/A', value:1, text:'Acesso ao corte de gás e corte do quadro elétrico' },
   { options:'OK,KO,N/A', value:1, text:'Saídas de emergência com abertura no sentido exterior, barra anti-pânico e desbloqueadas' },
   { options:'OK,KO,N/A', value:1, text:'Existe manutenção preventiva periódica dos equipamentos' },
   { options:'OK,KO,N/A', value:1, text:'Pavimentos anti derrapantes' },
   { options:'OK,KO,N/A', value:1, text:'Existência de licenciamento de gás' },
   { options:'OK,KO,N/A', value:1, text:'Instalações elétricas em bom estado de conservação e manutenção' },
   { options:'OK,KO,N/A', value:1, text:'Tomadas elétricas protegidas' },
   { options:'OK,KO,N/A', value:1, text:'Existência de sinalética de segurança de emergência e evacuação' },
   { options:'OK,KO,N/A', value:1, text:'Os equipamentos possuem comandos adequados e em bom estado de funcionamento (botão de emergência, arranque, paragem, etc.)' },
   ]
  },
  {
   section : 'Gestão De Resíduos  (Ambiente) ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Equipamentos suficientes adequados à separação de resíduos sólidos' },
   { options:'OK,KO,N/A', value:1, text:'Zona diferenciada para a armazenagem de resíduos alimentares, localizada fora das áreas de produção' },
   { options:'OK,KO,N/A', value:1, text:'Local para armazenagem de bidões dos óleos fora da zona confeção' },
   { options:'OK,KO,N/A', value:1, text:'Existência de caixas de separação de gorduras' },
   { options:'OK,KO,N/A', value:1, text:'Recipientes com tampa acionada por pedal' },
   { options:'OK,KO,N/A', value:1, text:'Existência de um ecoponto funcionável e/ou correto encaminhamento de resíduos sólidos' },
   ]
  },
  {
   section : 'Lavatórios Das Mãos ',
   questions : [
   { options:'OK,KO,N/A', value:1, text:'Em número adequado e devidamente localizados (nos sanitários e no interior da cozinha)' },
   { options:'OK,KO,N/A', value:1, text:'Indicados para  a lavagem das mãos (torneira de accionamento não manual)' },
   { options:'OK,KO,N/A', value:1, text:'Equipados com água quente e fria' },
   { options:'OK,KO,N/A', value:1, text:'Equipados com materiais de limpeza das mãos' },
   { options:'OK,KO,N/A', value:1, text:'Equipados com dispositivos de secagem higiénica (ar quente ou toalhetes individuais)' },
   { options:'OK,KO,N/A', value:1, text:'Sempre que necessário, separados das instalações de lavagem de alimentos' },
   { options:'OK,KO,N/A', value:1, text:'Bom estado de conservação' },
           ]
        },
    ]
};

