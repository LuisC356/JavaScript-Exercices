Exercício 11)

	Cálculo de Salário

	Faça  umprograma que deverá  perguntar o  nome  do  funcionário,quantidade  de  horas trabalhadas, salário da hora (valor da hora trabalhada)e número 
	de dependentes. Ao final dos cálculos o programa deverá mostrar uma mensagem ao usuário, mostrando todas  as  descrições  de  sua  folha  salarial,  
	de  forma  pessoal,  conforme  o  exemplo abaixo:

	Folha salarial Fulano,

	Horas trabalhadas: 160
	Salário Hora: R$ 5,00
	Nº Dependentes: 1
	Adicional de dependentes: R$ 50,00	
	Salário Bruto: R$ 850,00
	Desconto INSS: R$ 72,25
	Desconto IR: R$ 0,00
	Salário Líquido: R$ 777,75

	Para isso, realize os devidos cálculos considerando:
	
	Informação  
			

			CálculoSalário Bruto	(Horas   trabalhadas   *   salário   hora   +   (R$   50,00   *   nº   de dependentes))

			Desconto INSS	Salário bruto <= R$ 1000,00 (INSS  = 8,5% do salário bruto)
					Salário bruto > R$ 1000,00 (INSS  = 9% do salário bruto)

			Desconto  do  Imposto  de Renda (IR)
					Salário bruto <= R$ 1000,00 (IR  = 0)(ISENTO)
					Salário bruto >  R$ 1000,00 e <= R$ 1500,00 (IR  = 5% do salário bruto)
					Salário bruto >  R$ 1500,00 (IR  = 7% do salário bruto)
					Salário LíquidoSalário Bruto –INSS –IR