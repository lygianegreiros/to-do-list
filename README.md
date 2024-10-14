
### README.md

```markdown
# To Do App - Gerenciamento de Tarefas

Este é um aplicativo simples de gerenciamento de tarefas (to do app) desenvolvido utilizando Node.js, Express, MongoDB, HTML, CSS e JavaScript. Ele permite que os usuários criem, leiam, atualizem e excluam tarefas (CRUD).

## Funcionalidades

- **Adicionar Tarefa**: Insira uma nova tarefa no sistema.
- **Listar Tarefas**: Visualize todas as tarefas cadastradas.
- **Marcar como Concluída/Incompleta**: Alterne o status de uma tarefa entre concluída e incompleta.
- **Excluir Tarefa**: Remova tarefas da lista.

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript 

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local) ou [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (nuvem)
- Um editor de código como o [VSCode](https://code.visualstudio.com/)

## Como Rodar o Projeto Localmente

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/todo-app.git
```

### 2. Backend

#### Passo 1: Navegue até o diretório do backend

```bash
cd todo-app/backend
```

#### Passo 2: Instale as dependências

```bash
npm install
```

#### Passo 3: Configure o MongoDB

- Se você estiver usando o MongoDB localmente, inicie o MongoDB com o comando:

  ```bash
  mongod
  ```

- Se estiver usando o MongoDB Atlas, configure a string de conexão no arquivo `server.js`.

#### Passo 4: Inicie o servidor backend

```bash
node server.js
```

O servidor backend estará disponível em `http://localhost:3000`.

### 3. Frontend

#### Passo 1: Navegue até o diretório do frontend

```bash
cd ../frontend
```

#### Passo 2: Abra o arquivo `index.html`

Abra o arquivo `index.html` diretamente no navegador ou use um servidor HTTP local (como o `http-server`).

Para abrir diretamente:

- No Windows:

  ```bash
  start index.html
  ```

- No macOS:

  ```bash
  open index.html
  ```

- No Linux:

  ```bash
  xdg-open index.html
  ```

Ou, para rodar com um servidor HTTP local, instale e rode o `http-server`:

```bash
npm install -g http-server
http-server
```

Acesse o frontend no navegador em `http://localhost:8080`.

## Estrutura do Projeto

```bash
.
├── backend
│   ├── models
│   │   └── Task.js         # Modelo de dados da tarefa com Mongoose
│   ├── routes
│   │   └── taskRoutes.js   # Definição das rotas CRUD para tarefas
│   └── server.js           # Configuração do servidor e conexão MongoDB
├── frontend
│   ├── index.html          # Interface de usuário
│   ├── style.css           # Estilos da página
│   └── app.js              # Lógica do frontend e requisições para a API
├── README.md               # Documentação do projeto
└── package.json            # Dependências do backend
```

## API Endpoints

As rotas da API do backend são:

- `GET /tasks`: Retorna todas as tarefas.
- `POST /tasks`: Cria uma nova tarefa.
- `PUT /tasks/:id`: Atualiza o status da tarefa (concluir/incompleta).
- `DELETE /tasks/:id`: Exclui uma tarefa.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções ou novas funcionalidades.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

```

### Como usar:
1. Substitua o link `https://github.com/seu-usuario/todo-app.git` pelo link do repositório no GitHub.
2. Adicione mais detalhes conforme a necessidade do seu projeto, como especificidades de dependências ou instruções adicionais para rodar o projeto.

Este `README.md` cobre as informações essenciais para que qualquer desenvolvedor possa entender, configurar e rodar seu projeto localmente.
