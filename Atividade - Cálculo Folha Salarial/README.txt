Exerc�cio 11)

	C�lculo de Sal�rio

	Fa�a  umprograma que dever�  perguntar o  nome  do  funcion�rio,quantidade  de  horas trabalhadas, sal�rio da hora (valor da hora trabalhada)e n�mero 
	de dependentes. Ao final dos c�lculos o programa dever� mostrar uma mensagem ao usu�rio, mostrando todas  as  descri��es  de  sua  folha  salarial,  
	de  forma  pessoal,  conforme  o  exemplo abaixo:

	Folha salarial Fulano,

	Horas trabalhadas: 160
	Sal�rio Hora: R$ 5,00
	N� Dependentes: 1
	Adicional de dependentes: R$ 50,00	
	Sal�rio Bruto: R$ 850,00
	Desconto INSS: R$ 72,25
	Desconto IR: R$ 0,00
	Sal�rio L�quido: R$ 777,75

	Para isso, realize os devidos c�lculos considerando:
	
	Informa��o  
			

			C�lculoSal�rio Bruto	(Horas   trabalhadas   *   sal�rio   hora   +   (R$   50,00   *   n�   de dependentes))

			Desconto INSS	Sal�rio bruto <= R$ 1000,00 (INSS  = 8,5% do sal�rio bruto)
					Sal�rio bruto > R$ 1000,00 (INSS  = 9% do sal�rio bruto)

			Desconto  do  Imposto  de Renda (IR)
					Sal�rio bruto <= R$ 1000,00 (IR  = 0)(ISENTO)
					Sal�rio bruto >  R$ 1000,00 e <= R$ 1500,00 (IR  = 5% do sal�rio bruto)
					Sal�rio bruto >  R$ 1500,00 (IR  = 7% do sal�rio bruto)
					Sal�rio L�quidoSal�rio Bruto �INSS �IR