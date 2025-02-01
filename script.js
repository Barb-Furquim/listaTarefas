function adicionarTarefa() {
    //Mensagem ao cliar no botão "adicionar Tarefa"
    let mensagem = "Tarefa adicionada com sucesso!"

    //Armazenar o input na variável 'inputTarefa'
    let inputTarefa = document.getElementById("inputTarefa")

    //Pegar o valor do input
    let tarefa = inputTarefa.value
    
    //Exibir o valor do input no console do navegador
    console.log(tarefa)

    //Verificar se o input está vazio, caso contrário, criar uma nova tarefa na lista
    if (tarefa == ""){
        document.getElementById("mensagem").textContent = "Por favor, digite uma tarefa"
    } else {
        document.getElementById("mensagem").textContent = mensagem

        //Armazenar a lista de tarefas na variável 'listaTarefas'
        let listaTarefas = document.getElementById("listaTarefas")

        //Criar um novo elemento li
        let novaTarefa = document.createElement("li")

        //Adiciona o texto digitado na nova tarefa
        novaTarefa.textContent = tarefa

        //Adiciona a tarefa na lista
        listaTarefas.appendChild(novaTarefa)


        inputTarefa.value = "" //limpar texto do input
    }
    
}