const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
})

let proximoIdCarro = 1;
let carros = [];

let idAluguel = 1;

let alugueis = [];


function mostrarMenu() {
 console.log("\n=========================")
 console.log("CADASTRO DE CARROS NA LOJA")
 console.log("===========================")
 console.log("1-Cadastrar carro")
 console.log("2-listar carros")
 console.log("3- buscar carro por Id")
 console.log("4-atualizar carro")
 console.log("5- remover carro")
 console.log("\n=========================")
 console.log("CADASTRO DE CLIENTES")
 console.log("===========================")
 console.log("6-Cadastrar cliente")
 console.log("7-listar cliente")
 console.log("8- buscar cliente por Id")
 console.log("9-atualizar cliente")
 console.log("10- remover cliente")
 console.log("===========================")
 console.log("ALUGUEL")
 console.log("11- realizar aluguel")
 console.log("12- devolver carro")
 console.log("13- listar alugueis(todos)")
 console.log("14- listar alugueis ATIVOS")
 console.log("15- listar alugueis Finalizados")
 console.log("0 - sair")


 rl.question("ESCOLHA UMA OPÇÃO: ", (opcao) => {
 if (opcao === "1") {
 cadastrarCarro()
 } else if (opcao === "2") {
 listarCarros();
 } else if (opcao === "3") {
 buscarCarroPorId();
 } else if (opcao === "4") {
 atualizarCarro();
 } else if (opcao === "5") {
 removerCarro();
 } if (opcao === "6") {
 cadastrarCliente()
 } else if (opcao === "7") {
 listarClientes();
 } else if (opcao === "8") {
 buscarClientePorId();
 } else if (opcao === "9") {
 atualizarCliente();
 } else if (opcao === "10") {
 removerCliente();
 } else if (opcao === "11") {
 realizarUmAluguel()
 } else if (opcao === "12") {
 devolverCarro()
 } else if (opcao === "13") {
 listarAlugueisT()
 } else if (opcao === "14") {
 listarAlugueisA()
 } else if (opcao === "15") {
 listarAlugueisF()
 }
 })
}
function listarAlugueisF(){
 console.log ("Alugueis finalizados")

 if(alugueis.length === 0){
 console.log("Aluguel não encontrado")
 mostrarMenu();
 return;
 }

 for (i = 0; i < alugueis.length; i++){

 if (alugueis[i].status === "finalizado"){
 
 console.log("\nID aluguel: " + alugueis[i].ID)
 console.log("\nID carro: " + alugueis[i].carroId)
 console.log("\n ID cliente: " + alugueis[i].clienteId)
 console.log("\nDias: " + alugueis[i].dias)
 console.log("\nStatus: " + alugueis[i].status)

}
 }
 mostrarMenu()
 return
}
;




function listarAlugueisA(){
 console.log ("Alugueis ativos")

 if(alugueis.length === 0){
 console.log("Aluguel não encontrado")
 mostrarMenu();
 return;
 }

 for (i = 0; i < alugueis.length; i++){

 if (alugueis[i].status === "ativo"){
 
 console.log("\nID aluguel: " + alugueis[i].ID)
 console.log("\nID carro: " + alugueis[i].carroId + carros[i].modelo)
 console.log("\n ID cliente: " + alugueis[i].clienteId + clientes[i].nome)
 console.log("\nDias: " + alugueis[i].dias)
 console.log("\nStatus: " + alugueis[i].status)

}
 }
 mostrarMenu()
 return;
}


function listarAlugueisT(){

console.log("Todos os alugueis")
 
if(alugueis.length === 0){
 console.log("Aluguel não encontrado")
 mostrarMenu();
 return;
}



for( let i = 0; i < alugueis.length; i++ ){
 
 console.log("\nID aluguel: " + alugueis[i].ID)
 console.log("\nID carro: " + alugueis[i].carroId + carros[i].modelo)
 console.log("\n ID cliente: " + alugueis[i].clienteId + clientes[i].nome)
 console.log("\nDias: " + alugueis[i].dias)
 console.log("\nStatus: " + alugueis[i].status)


 
}

mostrarMenu();
return;
}

function devolverCarro() {
 console.log("devolver Carro");

 rl.question("Digite o ID do aluguel para devolver: ", (idAluguel) => {
 idAluguel = Number(idAluguel);

 let aluguel = encontrarAluguelPorId(idAluguel)
 let carro = encontrarCarroPorId(aluguel.carroId)

 if (aluguel === null) {
 console.log("aluguel não encontrado");
 mostrarMenu();
 return;
 }

 aluguel.status = "finalizado"
 rl.question("Digite o id do carro: ", (carroId) => {

 if (carroId === null) {
 console.log("carro não encontrado")
 }
 carro.status = "disponivel"
 
 console.log("Carro devolvido e liberado com sucesso!")

 mostrarMenu()
 return;
 })
 });
}


function encontrarAluguelPorId(id) {
 for (let i = 0; i < alugueis.length; i++) {
 if (alugueis[i].ID === id) {
 return alugueis[i];
 }
 }
 return null;

}


function realizarUmAluguel() {
 console.log("Realizar um aluguel");

 rl.question("Digite o id do cliente: ", (idcliente) => {
 rl.question("Digite o id do carro: ", (idcarro) => {
 rl.question("Digite os dias de aluguel: ", (dias) => {


 idcliente = Number(idcliente);
 idcarro = Number(idcarro);
 dias = Number(dias);




 console.log("Clientes:", clientes);
 console.log("ID digitado:", idcliente);
 

 let cliente = encontrarClientePorId(idcliente);
 let carro = encontrarCarroPorId(idcarro);
  let preco = carro.preco
 let total = preco * dias
 console.log("total: ", total)
 

 if (!cliente) {
 console.log(" Cliente não encontrado");
 mostrarMenu();
 return;
 }

 if (!carro) {
 console.log("Carro indisponível");
 mostrarMenu();
 return;
 }

 let aluguel = {
 ID: idAluguel,
 clienteId: idcliente,
 carroId: idcarro,
 dias: dias,
 status: "ativo"
 };



 alugueis.push(aluguel);
 idAluguel++;

 carro.disponivel = false;

 console.log("Aluguel realizado com sucesso!");
 mostrarMenu();
 });
 });
 });
}


function removerCarro() {
 console.log("Remover Carro");

 rl.question("Digite o ID do Carro para remover: ", (id) => {
 id = Number(id);

 for (let i = 0; i < carros.length; i++) {
 if (carros[i].ID === id) {
 carros.splice(i, 1);
 console.log("CADASTRO DO CARRO removido com sucesso");
 mostrarMenu();
 return;

 }

 }


 });
}

function atualizarCarro() {
 console.log("Atualizar Carro")
 rl.question("Digite o ID do carro: ", (id) => {
 id = Number(id);

 let carro = encontrarCarroPorId(id);

 if (carro === null) {
 console.log("carro não encontrado");
 mostrarMenu();
 return;
 }

 rl.question("Digite um novo modelo: ", (novoModelo) => {
 rl.question("Digite a nova placa: ", (novaPlaca) => {
 rl.question("Digite o ano: ", (novoAno) => {
 rl.question("Digite o novo preço: ", (novoPreco) => {

 novoAno = Number(novoAno);
 novoPreco = Number(novoPreco);
 if (novoModelo === "" || novaPlaca === "" || novoAno === "" || novoPreco === "") {
 console.log("Todos os dados precisam ser preenchidos");
 mostrarMenu();
 return;
 }

 if (novoPreco <= 0 || novoAno < 1886 || novoAno > 2028) {
 console.log("ERRO: preencha todos os dados ");
 mostrarMenu();
 return;
 }
 carro.modelo = novoModelo,
 carro.placa = novaPlaca,
 carro.ano = novoAno,
 carro.preco = novoPreco

 console.log("Atualizado com sucesso");
 mostrarMenu();

 });
 });
 });
 });

 });
}


function cadastrarCarro() {
 console.log("cadastrar Carro");

 rl.question("Digite o modelo do carro: ", (modelo) => {
 rl.question("Digite a placa do carro: ", (placa) => {
 rl.question("Digite o ano do carro: ", (ano) => {
 rl.question("Digite o preço por dia de aluguel: ", (preco) => {
 preco = Number(preco);

 if (modelo === "" || placa === "" || preco === "" || ano === "") {
 console.log("ERRO:Não preencheu todas as infos");
 mostrarMenu();
 return;
 }
 if (preco <= 0 || ano < 1886 || ano > 2028) {
 console.log("ERRO:Não preencheu todas as infos");
 mostrarMenu();
 return;
 }
 let carro = {
 ID: proximoIdCarro,
 modelo: modelo,
 placa: placa,
 ano: ano,
 preco: preco,
 disponivel: true
 }
 carros.push(carro)
 proximoIdCarro++


 console.log("Carro cadastrado com sucesso")
 mostrarMenu()

 })
 })
 })
 })
}

function listarCarros() {
 console.log("listar carros");

 if (carros.length === 0) {
 console.log("nenhum carro cadastrado");
 mostrarMenu();
 return;
 }

 for (i = 0; i < carros.length; i++) {
 console.log("\nID: " + carros[i].ID)
 console.log("\nmodelo: " + carros[i].modelo)
 console.log("\nplaca: " + carros[i].placa)
 console.log("\nano: " + carros[i].ano)
 console.log("\npreco: " + carros[i].preco)

 }
 mostrarMenu();

}
function encontrarCarroPorId(id) {
 for (let i = 0; i < carros.length; i++) {
 if (carros[i].ID === id) {
 return carros[i];
 }
 }
 return null;

}

function buscarCarroPorId() {
 console.log("buscar carro por id")

 rl.question("digite o id do carro: ", (id) => {
 id = Number(id);
 let carro = encontrarCarroPorId(id)


 if (carro === null) {
 console.log("Carro não encontrado");
 mostrarMenu();
 return;
 }
 console.log("\nCarro Encontrado")
 console.log("\nID: " + carro.ID)
 console.log("\nmodelo: " + carro.modelo)
 console.log("\nplaca: " + carro.placa)
 console.log("\nano: " + carro.ano)
 console.log("\npreco: " + carro.preco)

 mostrarMenu();

 })
}

function removerCliente() {
 console.log("Remover Cliente");

 rl.question("Digite o ID do Cliente para remover: ", (id) => {
 id = Number(id);

 for (let i = 0; i < clientes.length; i++) {
 if (clientes[i].ID === id) {
 clientes.splice(i, 1);
 console.log("cadastro do cliente removido com sucesso");
 mostrarMenu();
 return;

 }

 }


 });
}


function atualizarCliente() {
 console.log("Atualizar Cliente")
 rl.question("Digite o ID do cliente: ", (id) => {
 id = Number(id);

 let cliente = encontrarClientePorId(id);

 if (cliente === null) {
 console.log("cliente não encontrado");
 mostrarMenu();
 return;
 }

 rl.question("Digite um novo nome: ", (novoNome) => {
 rl.question("Digite o novo CPF: ", (novoCpf) => {
 rl.question("Digite o novo telefone: ", (novoTel) => {


 novoCpf = Number(novoCpf);
 novoTel = Number(novoTel);
 if (novoCpf === "" || novoNome === "" || novoTel === "") {
 console.log("Todos os dados precisam ser preenchidos");
 mostrarMenu();
 return;
 }

 if (typeof novoCpf === 'string' || typeof novoTel === 'string') {
 console.log("ERRO: preencha todos os dados ");
 mostrarMenu();
 return;
 }


 cliente.nome = novoNome,
 cliente.cpf = novoCpf,
 cliente.tel = novoTel

 console.log("Atualizado com sucesso");
 mostrarMenu();

 });

 });
 });

 });
}

let proximoIdCliente = 1;
let clientes = [];

function cadastrarCliente() {
 console.log("cadastrar Cliente");

 rl.question("Digite o nome : ", (nome) => {
 rl.question("Digite o CPF: ", (cpf) => {
 rl.question("Digite o telefone: ", (tel) => {
 if (nome === "" || cpf === "" || tel === "") {
 console.log("ERRO:Não preencheu todas as infos");
 mostrarMenu();
 return;
 }
 if (isNaN(cpf) || isNaN(tel)) {
 console.log("ERRO:Deve informar um número");
 mostrarMenu();
 return;
 }
 let cliente = {
 ID: proximoIdCliente,
 nome: nome,
 cpf: cpf,
 tel: tel,


 }
 clientes.push(cliente)
 proximoIdCliente++

 console.log("Cliente cadastrado com sucesso")
 mostrarMenu()


 })
 })
 })
}

function listarClientes() {
 console.log("listar clientes");

 if (clientes.length === 0) {
 console.log("nenhum cliente cadastrado");
 mostrarMenu();
 return;
 }

 for (i = 0; i < clientes.length; i++) {
 console.log("\nID: " + clientes[i].ID)
 console.log("\nnome: " + clientes[i].nome)
 console.log("\ncpf: " + clientes[i].cpf)
 console.log("\ntel: " + clientes[i].tel)

 }
 mostrarMenu();

}
function encontrarClientePorId(id) {
 for (let i = 0; i < clientes.length; i++) {
 if (clientes[i].ID === id) {
 return clientes[i];
 }
 }
 return null;

}

function buscarClientePorId() {
 console.log("buscar cliente por id")

 rl.question("digite o id do cliente: ", (id) => {
 id = Number(id);
 let cliente = encontrarClientePorId(id)

 if (cliente === null) {
 console.log("Carro não encontrado");
 mostrarMenu();
 return;
 }
 console.log("\nCliente Encontrado")
 console.log("\nID: " + cliente.id)
 console.log("\nmodelo: " + cliente.nome)
 console.log("\nplaca: " + cliente.cpf)
 console.log("\nano: " + cliente.tel)

 mostrarMenu();

 })
}


mostrarMenu(); 