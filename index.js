//Objeto para setar uma chave padrão
const saldos = {
    _Saldo: 'Saldo',
    get Saldo() {return this._Saldo}
}

//Objeto com o saldo
const saldoBanco = {}

//função inicial para acrescentar um saldo inicial ATENÇÃO essa chamada de função é obrigatória!!!!!
function SaldoContaCorrente (parametroSaldo) {
    if(!parametroSaldo) parametroSaldo = saldos.Saldo
    saldoBanco['Saldo'] = parametroSaldo
    return parametroSaldo
}

//função para dar entrada no saldo
function EntradaDeSaldo(valor) {
    let resultado = saldoBanco.Saldo += valor
    resultado.toFixed(2)
    console.log(`Entrada de ${valor} realizada com sucesso`)
}

//função de saida de saldo
function SaidaDeSaldo(valor) {    
    let resultado = saldoBanco.Saldo -= valor
    if(resultado < 0) {
        return saldoBanco.Saldo = 0
    }else{
        return resultado
    }
}

//função de exibição de saldo
function mostrarSaldo() {
    const saldoAtual = saldoBanco.Saldo.toFixed(2)
    if(saldoAtual <= 0) {
        console.log(`Seu saldo não pode ficar com um valor negativo`)
    }else {
        console.log(`Seu saldo atual é de: R$ ${saldoAtual} reais`)
    }
}

//objeto com os ativos financeiros
const ativosFinanceiros = [
        {Nome: 'MagazineLuiza', Quantidade: 10000, Valor: 12.25},
        {Nome: 'Facebook', Quantidade: 20000, Valor: 156.54},
        {Nome: 'Posto Ipiranga', Quantidade: 5000, Valor: 11.67},
    ]

//função de deletar um ativo, é necessario passar como parâmetro o indice do objeto dentro do vetor para ele ser exluido    
function deletarAtivo (indice) {
    delete ativosFinanceiros[indice]
}    

//função para acrescentar um ativo, é necessario passar como parâmetro o nome do ativo, a quantidade disponivel em mercado, e o valor
function acrscentarAtivo (nome, quantidade, valor) {
    const novoAtivo = {Nome: nome, Quantidade: quantidade, Valor: valor}
    ativosFinanceiros.push(novoAtivo)

    this.mostrarAtivo = function () {
        console.log(ativosFinanceiros)
    } 
}

//função para atualizar os dados do ativo, é necessario passar como parâmetro o indice do objeto dentro do vetor e os novos valores, nome, quantidade disponivel em mercado e o valor
function atualizarValordoAtivo (indice, nome, quantidade, valor) {
    ativosFinanceiros[indice] = {Nome: nome, Quantidade: quantidade, Valor: valor}
    console.log(ativosFinanceiros)
}


//chamada das funções que utilizei como teste
atualizarValordoAtivo(0, 'Petrobras', 3000, 25.56)
acrscentarAtivo('Magazine Luiza', 2000, 12.21)
deletarAtivo(2)
mostrarAtivo()

SaldoContaCorrente(2000.00)
EntradaDeSaldo(233.32)
SaidaDeSaldo(2233.32)
mostrarSaldo()
