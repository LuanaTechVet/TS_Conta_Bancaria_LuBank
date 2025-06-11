# 🏦 LuBank - Simulador de Conta Bancária

Este é um sistema de **simulação bancária** desenvolvido em **TypeScript** com **Node.js**, com entrada de dados utilizando `readline-sync`. O projeto permite operações simples como criação de conta, depósito, saque e consulta de saldo, tudo via linha de comando.

## 📦 Funcionalidades

- ➕ Criar contas corrente ou poupança
- 📄 Consultar Contas cadastradas
- ❌ Encerrar conta
- ✏️ Atualizar dados da conta
- 💸 Sacar valores
- - 💰 Depositar valores
- 💱 Transferir valores entre as contas
- 🔁 Operações via terminal interativo

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [`readline-sync`](https://www.npmjs.com/package/readline-sync)

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado  
- npm  
- readline-sync  

### Passos para rodar:

1. Clone o repositório pelo Git:

```bash
git clone https://github.com/LuanaTechVet/TS_Conta_Bancaria_LuBank.git
cd TS_Conta_Bancaria_LuBank

````

2. Prepare o ambiente instalando TS, Node e npm no terminal da IDE:
```bash
npm init -y
npm install -g typescript
tsc -v
npm install -g ts-node
ts-node -v
tsc --init
```
3. Para entrada de dados com readline-sync instale a biblioteca pelo terminal:
```bash
npm install readline-sync @types/node @types/readline-sync
npm list
```
## 📌 Melhorias Futuras Desejadas
- Persistência de dados com um banco de dados
- Validações mais robustas
- Interface gráfica com frontend

## 📝 Licença
Este projeto é de uso educacional e não possui uma licença formal.

## 👩‍💻 Autoria
Desenvolvido por LuanaSilva como projeto de estudo prático através da tutoria da Generation Brasil.
