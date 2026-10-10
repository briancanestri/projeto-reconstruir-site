# Projeto Reconstruir

Projeto desenvolvido para a disciplina de Front-end/Web Development.

## Sobre o projeto

O Projeto Reconstruir é uma aplicação web de uma ONG fictícia voltada ao apoio de pessoas e famílias afetadas por desastres naturais e situações de emergência.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git e GitHub

## Funcionalidades

- Navegação em formato SPA
- Geração dinâmica dos projetos
- Validação de formulário
- Armazenamento de cadastros com localStorage
- Interface responsiva
- Recursos básicos de acessibilidade

## Estrutura

- `html/` — páginas HTML
- `css/` — estilos
- `js/` — funcionalidades JavaScript
- `imagens/` — imagens do projeto

## Execução local

1. Clone o repositório do GitHub.
2. Acesse a pasta do projeto.
3. Abra o projeto utilizando um servidor local, como o Live Server do Visual Studio Code.
4. Acesse a aplicação pelo endereço fornecido pelo servidor local.

## Versionamento

O projeto utiliza Git para controle de versão e GitHub para hospedagem do repositório.

A organização das branches segue uma estrutura baseada no GitFlow:
- `master` — versão estável do projeto.
- `develop` — desenvolvimento contínuo.
- `feature/acessibilidade` — desenvolvimento da funcionalidade de acessibilidade.

Os commits seguem uma convenção semântica, utilizando tipos como `chore`, `feat` e `docs`.

Também foi criada a tag `v1.0.0` para identificar a primeira release estável.

### Build de produção

O projeto utiliza o Vite para gerar a versão de produção do site. O comando `npm run build` gera os arquivos otimizados na pasta `dist`. Para conferir a versão gerada localmente, utiliza-se `npm run preview`.

A validação foi realizada no navegador, verificando a abertura da página inicial e a navegação entre as páginas Início, Projetos e Cadastro.