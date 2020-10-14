# Estudos em Aurelia Framework para Concurso Público 013/2019 (UNICAMP)
Este projeto destina-se para estudos tecnico cientificos com finalidade de aprovacao em concurso publico em universidade publica no interior do estado de sao paulo.

## Objetivo
Desenvolver um cadastro de clientes por meio das tecnologias oferecidas na linguagem Javascript utilizando Aurelia framework. Nesse teste os avaliadores irao avaliar toda a capacidade de criação de arquitetura, qualidade do código, validações, elaboração de layout e usabilidade.

## Caminho dos elementos
- Componentes: 	project/src/
- Atributos:		project/src/resources/attributes/
- Binding Behaviors:	project/src/resources/binding-behaviors/
- Elements:		project/src/resources/elements/
- Value-converters:	project/src/resources/value-converters/
- Depedências:		project/node_modules/

## Extensoes de arquivos
- Extensão do model: 		.js
- Extensão do view: 		.html

## Instalando aurelia
- $ sudo npm install aurelia-cli -g

## Atualizando as dependências do projeto
- $ npm install

## Bash commands
- $ au new   <nome>					/* cria um novo projeto */
- $ au build  --env prod				/* gerará compilação na pasta dist */
- $ au generate component <nome>			/* gerará componente view-model */
- $ au generate element <nome>			/* gerará element em resources/elements */
- $ au generate value-converter <nome>	 	/* value-converter em resources/value-converters */
- $ au generate binding-behavior <nome> 	/* binding-behavior em resources/binding-behaviors*
- $ au generate attribute <nome>		 	/* value-converter em resources/attributes */
- $ au run   --env dev    --watch   --port 9090		   /* executa server sem compilar  */
- $ serve 	-s   <folder> 		/* executa server após compilado passando a pasta dist */
