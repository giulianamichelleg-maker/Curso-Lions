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
    console.log("6-mostrar alunos aprovados")
    console.log("7-mostrar alunos reprovados")
    console.log("0-sair")
    console.log("==================")

    rl.question("escolha uma opção: ", (opcao) => {
        if (opcao === "1") {
            cadastrarAluno()
        } else if (opcao === "2") {
            listaAluno();
        } else if (opcao === "3") {
            buscarAlunoPorId();
        } else if (opcao === "4") {
            atualizarAluno();
        } else if (opcao === "5") {
            removerAluno();
        } else if (opcao === "6") {
            AlunosAprovados();
        } else if (opcao === "7") {
            alunosReprovados();
        }
    })

}

function alunosReprovados() {
    console.log("\nAlunos Reprovados")
    console.log("\n===================")

    let encontrou = false;

    for (i = 0; i < alunos.length; i++) {
        if (alunos[i].nota < 6) {

            console.log("\nID: " + alunos[i].id);
            console.log("\nNome: " + alunos[i].nome);
            console.log("\nNota: " + alunos[i].nota);

            encontrou = true
        }

    }

    if (!encontrou) {
        console.log("Nenhum aluno Reprovado")
    }

    mostrarMenu();

}


function AlunosAprovados() {
    console.log("\nAlunos aprovados")
    console.log("\n==================")

    let encontrou = false;
    for (i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= 6) {

            console.log("\nID: " + alunos[i].id);
            console.log("\nNome: " + alunos[i].nome);
            console.log("\nNota: " + alunos[i].nota);

            encontrou = true
        }

    }

    if (!encontrou) {
        console.log("Nenhum aluno aprovado")
    }


    mostrarMenu();

}


function removerAluno() {
    console.log("Remover aluno");

    rl.question("Digite o ID do aluno para remover: ", (id) => {
        id = Number(id);

        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].id === id) {
                alunos.splice(i, 1);
                console.log("Aluno removido com sucesso");
                mostrarMenu();
                return;
            }

        }
        console.log("Aluno não encontrado");
        mostrarMenu();




    })
}


function atualizarAluno() {
    console.log("Atualizar aluno")
    rl.question("Digite o ID do aluno: ", (id) => {
        id = Number(id);

        let aluno = encontrarAlunoPorId(id);

        if (aluno === null) {
            console.log("Aluno não encontrado");
            mostrarMenu();
            return;
        }

        rl.question("Digite um novo nome: ", (novoNome) => {
            rl.question("Digite a nova idade: ", (novaIdade) => {
                rl.question("Digite a nova turma: ", (novaTurma) => {
                    rl.question("Digite a nova nota: ", (novaNota) => {

                        novaIdade = Number(novaIdade);
                        novaNota = Number(novaNota);
                        if (novoNome === "" || novaIdade === "" || novaTurma === "" || novaNota === "") {
                            console.log("Todos os dados precisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }

                        if (novaIdade < 0 || novaNota < 0 || novaNota > 10 || novaIdade > 100) {
                            console.log("Idade ou nota inválida ");
                            mostrarMenu();
                            return;
                        }
                        aluno.nome = novoNome;
                        aluno.idade = novaIdade;
                        aluno.nota = novaNota;
                        aluno.turma = novaTurma;

                        console.log("Atualizado com sucesso");
                        mostrarMenu();

                    });
                });
            });
        });

    });


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
function encontrarAlunoPorId(id) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].id === id) {
            return alunos[i];
        }
    }
    return null;

}




mostrarMenu();