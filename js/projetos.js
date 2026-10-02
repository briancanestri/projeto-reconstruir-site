const projetos = [
    {
        titulo: "Arrecadação de Alimentos e Água",
        status: "Em andamento",
        descricao: "Realizamos campanhas para arrecadar alimentos e água potável e destiná-los a famílias afetadas por desastres naturais."
    },
    {
        titulo: "Doações Financeiras",
        status: "",
        descricao: "As doações financeiras ajudam o Projeto Reconstruir a atender necessidades urgentes das comunidades afetadas."
    },
    {
        titulo: "Doação de Roupas e Outros Itens",
        status: "",
        descricao: "Recebemos roupas, calçados, cobertores, produtos de higiene, materiais de limpeza e quaisquer outros itens que possam ser úteis às famílias."
    },
    {
        titulo: "Materiais para Reconstrução",
        status: "",
        descricao: "Arrecadamos ferramentas e materiais que possam contribuir para a recuperação de moradias e espaços afetados."
    },
    {
        titulo: "Ações com Voluntários",
        status: "",
        descricao: "Organizamos ações voluntárias para distribuir doações, apoiar comunidades afetadas e colaborar com as famílias."
    }
];

export function gerarProjetos() {
    const lista = document.querySelector("#lista-projetos");

    if (!lista) {
        return;
    }

    lista.innerHTML = projetos.map(function(projeto) {
        return `
            <section>
                <h2>${projeto.titulo}</h2>
                ${projeto.status ? `<span class="badge">${projeto.status}</span>` : ""}
                <p>${projeto.descricao}</p>
            </section>
        `;
    }).join("");
}