const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let proximoId = 1;
let alunos = [];

function mostrarMenu() {
    console.log("\n==========")
    console.log("SISTEMA ESCOLAR")
    console.log("================")
    console.log("1-Cadastrar aluno")
    console.log("2-listar aluno")
    console.log("3- buscar por Id")
    console.log("4-atualizar alunos")
    console.log("5- remover alunos")
    console.log("6-mostrar alunos reprovados")
    console.log("7-mostrr alunos reprovados")
    console.log("0-sair")
    console.log("==================")

    rl.question("escolha uma opção: ", (opcao) => {
        if (opcao === "1") {
            cadastrarAluno()
        } else if (opcao === "2") {
            listaAluno();
        } else if (opcao === "3") {
            buscarAlunoPorId();
        }
    })

}




function listaAluno() {
    console.log("listar alunos");

    if (alunos.length === 0) {
        console.log("nenhum aluno cadastrado");
        mostrarMenu();
        return;
    }

    for (i = 0; i < alunos.length; i++) {
        console.log("\nID: " + alunos[i].id)
        console.log("\nnome: " + alunos[i].nome)
        console.log("\nidade: " + alunos[i].idade)
        console.log("\nturma: " + alunos[i].turma)
        console.log("\nnota: " + alunos[i].nota)
    }
    mostrarMenu();

}


function cadastrarAluno() {
    console.log("cadastrar Aluno");
    rl.question("Digite o nome do aluno: ", (nome) => {
        rl.question("Digite a idade do aluno: ", (idade) => {
            rl.question("Digite a turma do aluno: ", (turma) => {
                rl.question("Digite a nota do aluno: ", (nota) => {
                    idade = Number(idade);
                    nota = Number(nota);

                    if (nome === "" || idade === "" || turma === "" || nota === "") {
                        console.log("ERRO:Não preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }
                    if (idade <= 0 || nota > 10 || nota < 0) {
                        console.log("ERRO:Não preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }
                    let aluno = {
                        id: proximoId,
                        nome: nome,
                        idade: idade,
                        turma: turma,
                        nota: nota
                    }
                    alunos.push(aluno)
                    proximoId++

                    console.log("Aluno cadastrado com sucesso")
                    mostrarMenu()

                })
            })
        })
    })
};

function buscarAlunoPorId() {
    console.log("buscar aluno por id")

    rl.question("digite o id do aluno: ", (id) => {
        id = Number(id);
        let aluno = encontrarAlunoPorId(id)

        if (aluno === null) {
            console.log("Aluno não encontrado");
            mostrarMenu();
            return;
        }
        console.log("\nAluno Encontrado")
        console.log("\nID: " + aluno.id)
        console.log("\nnome: " + aluno.nome)
        console.log("\nidade: " + aluno.idade)
        console.log("\nturma: " + aluno.turma)
        console.log("\nnota: " + aluno.nota)
        mostrarMenu();

    })
}
function encontrarAlunoPorId() {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].id === id) {
            return alunos[i];
        }
    }
    return null;

}




mostrarMenu();