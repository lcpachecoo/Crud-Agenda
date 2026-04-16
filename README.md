# CRUD - Agenda de Contatos 

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)

Um projeto simples, rápido e funcional de **CRUD de agenda de contatos**. Desenvolvido com Vanilla JavaScript, o sistema permite gerenciar contatos de forma intuitiva, salvando os dados diretamente no navegador do usuário.

## Funcionalidades

- **Cadastrar Contato:** Adicione novos contatos informando Nome e Telefone.
- **Listar Contatos:** Visualize todos os contatos salvos em uma tabela dinâmica.
- **Editar Contato:** Atualize as informações de um contato existente rapidamente.
- **Excluir Contato:** Remova contatos da sua agenda com confirmação de segurança.
- **Persistência de Dados:** Todos os dados são salvos no `localStorage` do navegador, ou seja, você não perde os dados ao atualizar a página!

## Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **Bootstrap 5:** Estilização responsiva e componentes de interface (Cards, Botões, Alertas).
- **JavaScript (ES Modules):** Lógica do CRUD, manipulação do DOM e uso do LocalStorage, arquitetado com separação de responsabilidades (Model, View, Controller, Service).

## Como executar o projeto

Como o projeto utiliza a arquitetura de **ES Modules** do JavaScript (`type="module"`), você precisará rodá-lo através de um servidor local para que o navegador carregue os arquivos corretamente (evitando erros de CORS).

### Opção 1: Usando o VS Code (Recomendado)
1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

### Opção 2: Usando o Node.js
Se você tiver o Node.js instalado, pode usar um servidor estático simples pelo terminal:
```bash
# Navegue até a pasta do projeto
cd sua-pasta-do-projeto

# Execute usando o npx
npx serve .