import read = require("readline-sync");

import { colors } from './src/util/Colors';

import { Conta } from './src/model/Conta';

import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";


export function main() {

    //Instância/objeto da classe ContaController
    //herdou os métodos
    let contas: ContaController = new ContaController();

    //variáveis auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupança'];


    console.log(colors.fg.magentastrong,"\nCriar Contas\n") 

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "Jõao Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

    while (true) {
        console.log(colors.bg.black, colors.fg.magentastrong,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                      LUBANK                         ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = read.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.cyanstrong,
                "\nLuBank - L possibilidades!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.magentastrong,"\n\nCriar Conta\n\n", colors.reset);
                
                console.log("Digite o número da agência: ");
                agencia = read.questionInt("");

                console.log("Digite o nome do titular da conta: ");
                titular = read.question("");

                console.log("Digite o tipo da conta: ");
                tipo = read.keyInSelect(tiposContas,"", {cancel: false}) +1;

                console.log("Digite o saldo da conta (R$): ");
                saldo = read.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o limite da conta (R$): ");
                        limite = read.questionFloat("");
                        contas.cadastrar( // o atributo/propriedade número da conta será preenchido com o método auxiliar gerarNumero()
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                                        );
                        break;
                    case 2:
                        console.log("Digite o dia do aniversário da Conta Poupança: ");
                        aniversario = read.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                                        );
                        break;
                }

                keyPress()
                break;

            case 2:
                console.log(colors.fg.magentastrong,"\n\nListar todas as Contas", colors.reset);

                contas.listarTodas()

                keyPress()
                break;

            case 3:
                console.log(colors.fg.magentastrong,"\n\nConsultar dados da Conta - por número\n\n");

                console.log("Digite o número da conta: ");
                numero = read.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress()
                break;

            case 4:
                console.log(colors.fg.magentastrong,"\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o número da conta: ");
                numero = read.questionInt(""); //Não será modificado

                let conta = contas.buscarNoArray(numero);
                if (conta != null){

                    console.log("Digite o número da agência: ");
                    agencia = read.questionInt("");

                    console.log("Digite o nome do titular da conta: ");
                    titular = read.question("");

                    //nunca será modificado 
                    tipo = conta.tipo;

                    console.log("Digite o saldo da conta (R$): ");
                    saldo = read.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da conta (R$): ");
                            limite = read.questionFloat("");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
                            break;

                         case 2:
                            console.log("Digite o dia do aniversário da conta poupança: ");
                            aniversario = read.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
                            break;   
                    }
                } else {
                    console.log(colors.fg.redstrong, `\nA conta número: ${numero} não foi encontrada!`, colors.reset);
                    
                }
                keyPress()
                break;

            case 5:
                console.log(colors.fg.magentastrong,"\n\nApagar uma Conta\n\n");

                console.log("Digite o número da conta: ");
                numero = read.questionInt("");
                contas.deletar(numero)

                keyPress()
                break;

            case 6:
                console.log(colors.fg.magentastrong,"\n\nSaque\n\n");

                console.log("Digite o número da conta: ");
                numero = read.questionInt("");

                console.log("Digite o valor do saque (R$): ");
                valor = read.questionFloat("");

                contas.sacar(numero, valor);

                keyPress()
                break;

            case 7:
                console.log(colors.fg.magentastrong,"\n\nDepósito\n\n");

                console.log("Digite o número da conta: ");
                numero = read.questionInt("");

                console.log("Digite o valor do depósito (R$): ");
                valor = read.questionFloat("");

                contas.depositar(numero, valor);


                keyPress()
                break;

            case 8:
                console.log(colors.fg.magentastrong,"\n\nTransferência entre Contas\n\n");

                console.log("Digite o número da conta de origem: ");
                numero = read.questionInt("");

                console.log("Digite o número da conta destino: ");
                numeroDestino = read.questionInt("");

                console.log("Digite o valor do depósito (R$): ");
                valor = read.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            default:
                console.log(colors.fg.redstrong,"\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Luana Silva");
    console.log("luanaap2702@gmail.com");
    console.log("github.com/LuanaTechVet");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    read.prompt();
}


main();