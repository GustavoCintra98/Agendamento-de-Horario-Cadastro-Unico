function salvarCliente(){

    let nome = document.getElementById("nomeCliente").value;

    let cpf = document.getElementById("cpfCliente").value;

    let telefone = document.getElementById("telefoneCliente").value;

    let email = document.getElementById("emailCliente").value;

    let datanascimento = document.getElementById("dataNascimentoCliente").value;

    let endereco = document.getElementById("enderecoCliente").value;

    let horaagendamento = document.getElementById("horaAgendamento").value;

    let observacoes = document.getElementById("observacoesCliente").value;

    if (nome == "" || telefone == "" || email == "" || datanascimento == "" || endereco == "" || horaagendamento == "" || observacoes == "") {

        alert("Preencha todos os campos!");
        return;

    }

    //Salvar Dados:

    //JSON - {chave:valor}

    let novoCliente = {
        nome:nome,
        cpf:cpf,
        telefone:telefone,
        email:email,
        datanascimento:datanascimento,
        endereco:endereco,
        horaagendamento:horaagendamento,
        observacoes:observacoes
    }

    let listaClientes = 
    JSON.parse(localStorage.getItem("clientes")) || [];

    listaClientes.push(novoCliente);

    localStorage.setItem("clientes",
        JSON.stringify(listaClientes));

    alert("Cliente salvo com sucesso!✅");

    window.location.href = "listar.html";
}


function configurarDataAgendamento() {

    const campoData = document.getElementById("horaAgendamento");

    const agora = new Date();

    // Amanhã
    const amanha = new Date(agora);
    amanha.setDate(amanha.getDate() + 1);

    // Formata a data para YYYY-MM-DD
    const ano = amanha.getFullYear();
    const mes = String(amanha.getMonth() + 1).padStart(2, "0");
    const dia = String(amanha.getDate()).padStart(2, "0");

    const dataAmanha = `${ano}-${mes}-${dia}`;

    // Define o intervalo permitido
    campoData.min = `${dataAmanha}T08:00`;
    campoData.max = `${dataAmanha}T22:00`;
}

function validarTempo() {
    const campoData = document.getElementById("horaAgendamento");

    campoData.addEventListener("change", function () {

        const dataSelecionada = new Date(this.value);
        const agora = new Date();

        // Cria a data de amanhã
        const amanha = new Date(agora);
        amanha.setDate(amanha.getDate() + 1);

        // Remove o horário para comparar somente a data
        amanha.setHours(0, 0, 0, 0);

        const dataEscolhida = new Date(dataSelecionada);
        dataEscolhida.setHours(0, 0, 0, 0);

        // Limites de horário para amanhã
        const minimo = new Date(amanha);
        minimo.setHours(8, 0, 0, 0);

        const maximo = new Date(amanha);
        maximo.setHours(22, 0, 0, 0);

        if (
            dataEscolhida.getTime() !== amanha.getTime() ||
            dataSelecionada < minimo ||
            dataSelecionada > maximo
        ) {
            alert(
                "O agendamento só pode ser realizado para amanhã, entre 08:00 e 22:00."
            );

            this.value = "";
        }
    });
}

validarTempo();