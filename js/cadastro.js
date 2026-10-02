export function carregarCadastros() {
    const historico = document.querySelector("#historico-cadastros");

    if (!historico) {
        return;
    }

    const dadosSalvos = localStorage.getItem("cadastros");

    if (!dadosSalvos) {
        historico.innerHTML = "";
        return;
    }

    const cadastros = JSON.parse(dadosSalvos);

    historico.innerHTML = `
        <h2>Cadastros realizados</h2>
        ${cadastros.map(function(cadastro) {
            return `
                <div class="cadastro-salvo">
                    <p><strong>Nome:</strong> ${cadastro.nome}</p>
                    <p><strong>E-mail:</strong> ${cadastro.email}</p>
                    <p><strong>Tipo:</strong> ${cadastro.tipo}</p>
                </div>
            `;
        }).join("")}
    `;
}

export function configurarFormulario() {
    document.addEventListener("submit", function(event) {

        if (event.target.id !== "formulario") {
            return;
        }

        event.preventDefault();

        const formulario = event.target;
        const alerta = document.querySelector("#alerta");

        let formularioValido = true;

        const campos = formulario.querySelectorAll("input, select");

        campos.forEach(function(campo) {
            if (campo.value.trim() === "") {
                formularioValido = false;
                campo.classList.add("campo-erro");
            } else {
                campo.classList.remove("campo-erro");
            }
        });

        const email = document.querySelector("#email");

        if (email && !email.value.includes("@")) {
            formularioValido = false;
            email.classList.add("campo-erro");
        }

        if (!formularioValido) {
            alerta.textContent = "Verifique os campos preenchidos e corrija os dados.";
            alerta.hidden = false;
            alerta.classList.add("erro");
            return;
        }

        const novoCadastro = {
            nome: formulario.nome.value,
            email: formulario.email.value,
            cpf: formulario.cpf.value,
            telefone: formulario.telefone.value,
            cep: formulario.cep.value,
            tipo: formulario.tipo.value
        };

        const dadosSalvos = localStorage.getItem("cadastros");

        const cadastros = dadosSalvos
            ? JSON.parse(dadosSalvos)
            : [];

        cadastros.push(novoCadastro);

        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        alerta.textContent = "Cadastro realizado com sucesso!";
        alerta.hidden = false;
        alerta.classList.remove("erro");

        formulario.reset();

        carregarCadastros();
    });
}