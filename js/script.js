import { gerarProjetos } from "./projetos.js";
import { carregarCadastros, configurarFormulario } from "./cadastro.js";

const conteudo = document.querySelector("#conteudo");
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", async function(event) {

        const pagina = link.getAttribute("href");

        if (pagina === "projetos.html") {
            event.preventDefault();

            const resposta = await fetch(pagina);
            const texto = await resposta.text();

            const documento = new DOMParser().parseFromString(texto, "text/html");
            const novoConteudo = documento.querySelector("main");

            conteudo.innerHTML = novoConteudo.innerHTML;

            gerarProjetos();
        }

        if (pagina === "cadastro.html") {
            event.preventDefault();

            const resposta = await fetch(pagina);
            const texto = await resposta.text();

            const documento = new DOMParser().parseFromString(texto, "text/html");
            const novoConteudo = documento.querySelector("main");

            conteudo.innerHTML = novoConteudo.innerHTML;

            carregarCadastros();
        }

        if (pagina === "projetos.html#ajudar") {
            event.preventDefault();

            const resposta = await fetch("projetos.html");
            const texto = await resposta.text();

            const documento = new DOMParser().parseFromString(texto, "text/html");
            const novoConteudo = documento.querySelector("main");

            conteudo.innerHTML = novoConteudo.innerHTML;

            gerarProjetos();

            document.querySelector("#ajudar").scrollIntoView();
        }
    });
});

const botaoModoEscuro = document.getElementById("modo-escuro");

if (botaoModoEscuro) {
    botaoModoEscuro.addEventListener("click", () => {
        document.body.classList.toggle("modo-escuro");

        const ativo = document.body.classList.contains("modo-escuro");

        botaoModoEscuro.textContent = ativo ? "Modo claro" : "Modo escuro";
        botaoModoEscuro.setAttribute("aria-pressed", ativo);
    });
}