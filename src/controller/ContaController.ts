import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.visualizar();
        }else{
            console.log(colors.fg.redstrong, `\nA conta numero ${numero} não foi encontrada!`, colors.reset);
        }
 
    }

    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
       this.listaContas.push(conta);
       console.log(colors.fg.magentastrong, "\nA conta número: "+conta.numero+
        " foi criada com sucesso!", colors.reset);
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) { //indexOf(buscaConta), vamos procurar o índice (posição)
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.magentastrong, `\nA conta número: ${conta.numero} foi atualizada com sucesso!`, colors.reset)
        }else{
            console.log(colors.fg.redstrong, `\nA conta número: ${conta.numero} não foi encontrada!`, colors.reset);
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) { //splice(indice, numero de itens que serão excluídos a partir do índice)
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.magentastrong, `\nA conta número: ${numero} foi apagada com sucesso!`, colors.reset)
        }else{
            console.log(colors.fg.redstrong, `\nA conta número: ${numero} não foi encontrada!`, colors.reset);
        }
    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) { // Sacar está na class conta. É preciso verificar se saldo<valor=false
            if(conta.sacar(valor)==true)
            console.log(colors.fg.magentastrong, `\nO saque da conta número: ${numero} foi efetuado com sucesso!`, colors.reset)
        
        }else{
            console.log(colors.fg.redstrong, `\nA conta número: ${numero} não foi encontrada!`, colors.reset);
        }
    }

    depositar(numero: number, valor: number): void {
         let conta = this.buscarNoArray(numero);

        if (conta != null) { 
            conta.depositar(valor);
            console.log(colors.fg.magentastrong, `\nO depósito da conta número: ${numero} foi efetuado com sucesso!`, colors.reset)
        
        }else{
            console.log(colors.fg.redstrong, `\nA conta número: ${numero} não foi encontrada!`, colors.reset);
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) { 
           if(contaOrigem.sacar(valor)===true){//aqui o saque já é executado e avaliado
            contaDestino.depositar(valor);
            console.log(colors.fg.magentastrong, `\nA transferência da conta número: ${numeroOrigem} para a conta número: ${numeroDestino} foi efetuado com sucesso!`, colors.reset)
                    }

        }else{
            console.log(colors.fg.redstrong, `\nA conta número: ${numeroOrigem} e/ou a conta número: ${numeroDestino} não foram encontradas!`, colors.reset);
        }
    }

    //**Métodos auxiliares**

    //numero é uma propriedade do objeto arrayConta. 
    // Começou em 0 e a cada conta criada vai incrementar +1
    public gerarNumero(): number {
        return ++ this.numero;
    }

    // checa se a conta existe
    public buscarNoArray(numero: number): Conta | null{
        for (let conta of this.listaContas) {
            if(conta.numero === numero)
                return conta;
        }
        return null;
    }

}