function carregarClientes() {

    let areaLista = document.getElementById("areaLista");

    let listaClientes =
        JSON.parse(localStorage.getItem("clientes")) || [];

    if (listaClientes.length === 0) {
        areaLista.innerHTML =
            "<p>Nenhum cliente cadastrado</p>";
        return;
    }

    areaLista.innerHTML = "";

    for (let i = 0; i < listaClientes.length; i++) {

        areaLista.innerHTML +=
            `<div class="exibirDados">
       <strong>Nome:</strong>
       ${listaClientes[i].nome} <br>
       <strong>Telefone:</strong>
       ${listaClientes[i].telefone} <br>
       <strong>E-mail:</strong>
       ${listaClientes[i].email} <br>
       <strong>CPF:</strong>
       ${listaClientes[i].cpf} <br>
       <strong>Data de Nascimento:</strong>
       ${listaClientes[i].datanascimento} <br>
       <strong>Endereço:</strong>
       ${listaClientes[i].endereco} <br>
       <strong>Hora do Agendamento:</strong>
       ${listaClientes[i].horaagendamento} <br>
       <strong>Observações:</strong>
       ${listaClientes[i].observacoes} <br>
       <button class="botao" onclick="deletarCliente(${i})">Deletar</button>
       </div>`;

    }

}

function deletarCliente(index) {

    let listaClientes = JSON.parse(localStorage.getItem("clientes")) || [];

    let confirmar = confirm(`Deseja deletar o agendamento: ${listaClientes[index].nome}`);

    if (confirmar == true) {

        listaClientes.splice(index, 1);

        localStorage.setItem("clientes", JSON.stringify(listaClientes));

        carregarClientes();

    }

}