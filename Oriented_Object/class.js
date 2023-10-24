class Lancamento{
    constructor(nome = "Generic", value = 0){
        this.nome = nome //adds a new value to the created object from the attribute ( = nome)
        this.value = value
    }
}

class cicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){//concatena os elemento em um array
        lancamentos.forEach(l => this.lancamentos.push(l))
        //lancamentos.forEach percorre todos os elementos do array
        //l => this.lancamentos.push(l) faz o push dos elementos do array
    }

    summary(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
        
    }
}
const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const Contas = new cicloFinanceiro(6, 2018)
Contas.addLancamentos(salario,contaDeLuz)
console.log(Contas.summary())