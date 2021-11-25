//Objeto para setar uma chave padrão
const saldos = {
    _Saldo: 'Saldo',
    get Saldo() {return this._Saldo}
}

//Objeto com o saldo
const saldoBanco = {}

//função inicial para acrescentar um saldo inicial ATENÇÃO essa chamada de função é obrigatória!!!!!
function SaldoInicialDaConta (parametroSaldo) {
    if(!parametroSaldo) parametroSaldo = saldos.Saldo
    saldoBanco['Saldo'] = parametroSaldo
    return parametroSaldo
}

//função para dar entrada no saldo
function deposito(valor) {
    let resultado = saldoBanco.Saldo += valor
    resultado.toFixed(2)
    console.log(`Entrada de ${valor} realizada com sucesso`)
}

//função de saida de saldo
function saque(valor) {    
    let resultado = saldoBanco.Saldo -= valor
    if(resultado < 0) {
        return saldoBanco.Saldo = 0
    }else{
        return resultado
    }
}

//função de exibição de saldo
function extrato() {
    const saldoAtual = saldoBanco.Saldo.toFixed(2)
    if(saldoAtual <= 0) {
        console.log(`Seu saldo inválido`)
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
    console.log('---------Ativo deletado com sucesso---------')
    delete ativosFinanceiros[indice]
}    

//função para acrescentar um ativo, é necessario passar como parâmetro o nome do ativo, a quantidade disponivel em mercado, e o valor
function cadastrarAtivo (nome, quantidade, valor) {
    const novoAtivo = {Nome: nome, Quantidade: quantidade, Valor: valor}
    ativosFinanceiros.push(novoAtivo)
    console.log('---------Ativo acrescentado com sucesso---------')
}

//função para atualizar os dados do ativo, é necessario passar como parâmetro o indice do objeto dentro do vetor e os novos valores, nome, quantidade disponivel em mercado e o valor
function atualizarAtivo (indice, nome, quantidade, valor) {
    ativosFinanceiros[indice] = {Nome: nome, Quantidade: quantidade, Valor: valor}
    console.log('---------Ativo atualuzado com Sucesso---------')
}

//função para exibir os ativos
function exibirAtivo () {
    console.log('---------Todos os ativos---------')
    console.log(ativosFinanceiros)
} 

//função de compra de ativo
function comprarAtivo (indice, paramValor) {
    let quantidade = ativosFinanceiros[indice].Quantidade
    let valor = quantidade = paramValor
    let resultado = quantidade * ativosFinanceiros[indice].Valor
    console.log(`Você está comprando ${valor} ativos por R$ ${ativosFinanceiros[indice].Valor} reais a unidade, totalizando R$ ${resultado.toFixed(2)} reais`)
    const saldoConta = saldoBanco.Saldo -= resultado
    if(saldoConta <= 0) {
        console.log('Seu saldo é insuficiente para a aquisição')
    }else{
        console.log(`Seu saldo em conta é de ${saldoConta.toFixed(2)} reais`)
        }

//função de callback, criada para atualizar dinamicamente a quantidade atual dos ativos após a compra        
function exibirAtivoAtualCompra() {
ativosFinanceiros[indice] = {Nome: ativosFinanceiros[indice].Nome, Quantidade: ativosFinanceiros[indice].Quantidade -= paramValor, Valor: ativosFinanceiros[indice].Valor}
if(ativosFinanceiros[indice].Quantidade <= 0){
ativosFinanceiros[indice] = {Nome: ativosFinanceiros[indice].Nome, Quantidade: ativosFinanceiros[indice].Quantidade = 0, Valor: ativosFinanceiros[indice].Valor}
console.log('Não existem fundos suficientes, o valor foi ajustado para quantidade existente no banco')
}if (saldoBanco.Saldo < paramValor) {
ativosFinanceiros[indice] = {Nome: ativosFinanceiros[indice].Nome, Quantidade: ativosFinanceiros[indice].Quantidade, Valor: ativosFinanceiros[indice].Valor}
   }
}
exibirAtivoAtualCompra()
}

//função de venda dos ativos
function venderAtivo (indice, paramValor) {
    let quantidade = ativosFinanceiros[indice].Quantidade
    let valor = quantidade = paramValor
    let resultado = quantidade * ativosFinanceiros[indice].Valor
    console.log(`Você vendeu ${valor} ativos por R$ ${ativosFinanceiros[indice].Valor} reais a unidade, totalizando R$ ${resultado.toFixed(2)} reais`)
    const saldoConta = saldoBanco.Saldo += resultado
    console.log(`Seu saldo em conta é de ${saldoConta.toFixed(2)} reais`)

//função de callback, criada para atualizar dinamicamente a quantidade atual dos ativos após a venda    
function exibirAtivoAtualVenda() {
ativosFinanceiros[indice] = {Nome: ativosFinanceiros[indice].Nome, Quantidade: ativosFinanceiros[indice].Quantidade += paramValor, Valor: ativosFinanceiros[indice].Valor}
if(ativosFinanceiros[indice].Quantidade > 0){
ativosFinanceiros[indice] = {Nome: ativosFinanceiros[indice].Nome, Quantidade: ativosFinanceiros[indice].Quantidade += paramValor, Valor: ativosFinanceiros[indice].Valor}
    }
}
exibirAtivoAtualVenda()
}

SaldoInicialDaConta(500.00)
extrato()
exibirAtivo()
comprarAtivo(0, 1)
exibirAtivo()
extrato()
