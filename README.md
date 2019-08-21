# UserManager-React_NodeJS
## Modulos utilizados
  - express
  - mongoose
  - cors
  - nodemon
  - dotenv
  - axios
  - react-router-dom
  - bootstrap
  - FontAwesomeIcon

## Dados da Implementação

### Visão Ampla
O sistema programado em **React.js** e **Node.js**, utiliza um cluster **MongoDB Atlas**, configurado inicialmente para rodar no **localhost**, porta **5000**. Ele é dividido em 2 pastas principais, sendo elas **/src**, na qual é mantida a estrutura do front-end em React(components e arquivo de geração do App), e **/backend**, onde, como o descrito pelo próprio nome, armazena os models, routes, e outros arquivos de acesso ao servidor e banco de dados, por meio de Node.js.

### React.js
A aplicação consiste em 4 paginas:
  - Home contendo uma listagem com todos usuários armazenados no sistema, possuindo também função de exclução de usuários;
  - Cadastro de novos usuários;
  - Edição de dados de usuário;
  - Visualização dos dados de um usuário específico;
  
 ### Node.js
 O gerenciador conta com um modelo principal (User), no qual foi atribuído os metodos:
  - **GET /user :** Atribuído a listagem;
  - **GET /user/:id :** Atribuído a visualização específica e edição (mostrar dados antigos);
  - **POST /user :** Atribuído ao cadastro de usuário;
  - **PUT /user/:id :** Atribuído a edição (armazenamento no BD);
  - **DELETE /user/:id :** Atribuído a exclusão do usuário;
  
 O cadastro de um usuário consiste no armazenamento do seu **nome**, **email**, **telefone** e **endereço**, sendo os dados verificados ao envio do formulário e, caso o número de caracteres for muito curto, o algum dado for duplicado de tabelas antigas ou algum outro erro, uma excessão será ativada e gerará um log, além de nao armazenar o dado enviado.
