import { gerarProjetos } from "./projetos.js";
import { carregarCadastros, configurarFormulario } from "./cadastro.js";

const conteudo = document.querySelector("#conteudo");
const links = document.querySelectorAll("nav a");

links.forEach(function (link) {
    link.addEventListener("click", async function (event) {
        const pagina = link.getAttribute("href");

        if (pagina === "index.html") {
            event.preventDefault();

            window.location.href = "/html/index.html";
            return;
        }

        if (pagina === "projetos.html") {
            event.preventDefault();

            try {
                const resposta = await fetch("/html/projetos.html");

                if (!resposta.ok) {
                    throw new Error("Não foi possível carregar os projetos.");
                }

                const texto = await resposta.text();
                const documento = new DOMParser().parseFromString(texto, "text/html");
                const novoConteudo = documento.querySelector("main");

                if (!novoConteudo || !conteudo) {
                    throw new Error("Conteúdo dos projetos não encontrado.");
                }

                conteudo.innerHTML = novoConteudo.innerHTML;
                gerarProjetos();
            } catch (erro) {
                console.error("Erro ao carregar projetos:", erro);
            }
        }

        if (pagina === "cadastro.html") {
            event.preventDefault();

            try {
                const resposta = await fetch("/html/cadastro.html");

                if (!resposta.ok) {
                    throw new Error("Não foi possível carregar o cadastro.");
                }

                const texto = await resposta.text();
                const documento = new DOMParser().parseFromString(texto, "text/html");
                const novoConteudo = documento.querySelector("main");

                if (!novoConteudo || !conteudo) {
                    throw new Error("Conteúdo do cadastro não encontrado.");
                }

                conteudo.innerHTML = novoConteudo.innerHTML;
                carregarCadastros();

                if (typeof configurarFormulario === "function") {
                    configurarFormulario();
                }
            } catch (erro) {
                console.error("Erro ao carregar cadastro:", erro);
            }
        }

        if (pagina === "projetos.html#ajudar") {
            event.preventDefault();

            try {
                const resposta = await fetch("/html/projetos.html");

                if (!resposta.ok) {
                    throw new Error("Não foi possível carregar os projetos.");
                }

                const texto = await resposta.text();
                const documento = new DOMParser().parseFromString(texto, "text/html");
                const novoConteudo = documento.querySelector("main");

                if (!novoConteudo || !conteudo) {
                    throw new Error("Conteúdo dos projetos não encontrado.");
                }

                conteudo.innerHTML = novoConteudo.innerHTML;
                gerarProjetos();

                const secaoAjuda = document.querySelector("#ajudar");

                if (secaoAjuda) {
                    secaoAjuda.scrollIntoView({ behavior: "smooth" });
                }
            } catch (erro) {
                console.error("Erro ao carregar a seção de ajuda:", erro);
            }
        }
    });
});

const botaoModoEscuro = document.getElementById("modo-escuro");

if (botaoModoEscuro) {
    botaoModoEscuro.addEventListener("click", () => {
        document.body.classList.toggle("modo-escuro");

        const ativo = document.body.classList.contains("modo-escuro");

        botaoModoEscuro.textContent = ativo ? "Modo claro" : "Modo escuro";
        botaoModoEscuro.setAttribute("aria-pressed", String(ativo));
    });
}