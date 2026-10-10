# Projeto Reconstruir

Projeto desenvolvido para a disciplina de Front-end/Web Development.

## Sobre o projeto

O Projeto Reconstruir é uma aplicação web de uma ONG fictícia voltada ao apoio de pessoas e famílias afetadas por desastres naturais e situações de emergência.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Vite
- Git e GitHub
- Netlify para publicação

## Funcionalidades

- Navegação entre as páginas Início, Projetos e Cadastro
- Geração dinâmica dos projetos
- Validação de formulário
- Armazenamento de cadastros com `localStorage`
- Interface responsiva
- Recursos básicos de acessibilidade
- Alternância entre modo claro e modo escuro

## Estrutura do projeto

- `html/` — páginas HTML
- `css/` — estilos da aplicação
- `js/` — funcionalidades JavaScript
- `imagens/` — imagens utilizadas no projeto
- `dist/` — arquivos gerados pelo build de produção

## Execução local

1. Clone o repositório do GitHub.
2. Acesse a pasta do projeto.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse no navegador o endereço informado pelo Vite no terminal.

## Build de produção

Para gerar os arquivos otimizados para publicação, execute:

```bash
npm run build
```

Os arquivos de produção são gerados na pasta `dist/`.

Para visualizar localmente a versão de produção, execute:

```bash
npm run preview
```

## Publicação

O site está publicado no Netlify:

https://projetoreconstruir-atividade.netlify.app

O código-fonte está hospedado no GitHub:

https://github.com/briancanestri/projeto-reconstruir-site

## Versionamento

O projeto utiliza Git para controle de versão e GitHub para hospedagem do repositório.

A organização das branches segue uma estrutura baseada no GitFlow:

- `master` — versão estável do projeto.
- `develop` — desenvolvimento contínuo.
- `feature/acessibilidade` — desenvolvimento da funcionalidade de acessibilidade.

Os commits seguem uma convenção semântica, utilizando tipos como `chore`, `feat`, `fix` e `docs`.

Também foi criada a tag `v1.0.0` para identificar a primeira release estável.

## Validação

A validação foi realizada no navegador, verificando a abertura da página inicial, a navegação entre as páginas Início, Projetos e Cadastro e os recursos implementados na aplicação.
