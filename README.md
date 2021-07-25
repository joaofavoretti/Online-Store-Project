# Online-Store-Project

Trabalho da disciplina Introdução ao Desenvolvimento Web - SCC0219

---

### Grupo 6 - Integrantes:

- Joao Pedro Favoretti (Nusp: 11316055)
- Lucas Pilla Pimentel (Nusp: 10633328)
- Luiz Fernando Santos (Nusp: 10892680)

---

### Requerimentos

- O sistema deve ter dois tipos de usuário:
    - Administradores: São responsáveis por gerenciar administradores, clientes e podutos. Para utilizar a conta de administrador, utilize as credenciais ```admin@admin.com:admin``` no formato (```email:senha```)
    - Clientes: São usuários que acessam o sistema para comprar produtos.
- Para armazenar os dados é preciso ter os seguintes registros:
    - admin: id, nome, telefone e email;
    - cliente: id, nome, endereço, telefone e email;
    - produto: id, nome, foto, descrição, preço, quantidade em estoque e quantidade vendida;
    - **Específico** - receita: id, nome, foto, ingredientes e descricao;
- Carrinho: "estrutura" onde os usuários devem adicionar os produtos que desejam comprar, e então prosseguir para o checkout.
-  Checkout: O sistema deve solicitar pelo cartão de crédito e senha do cliente. Conclui-se a compra e esvazia o carrinho.
- O carrinho pode ser esvaziado apenas após o pagamento ou pelo cliente.
- Gerenciamento dos produtos: administradores podem criar/atualizar/ler/deletar algum produto. Por exemplo, mudar a quantidade em estoque.
- Funcionalidade **específica**: Ao acessar os detalhes do produto, o cliente pode ver uma descricao com nomes de possíveis receitas para se fazer com aquele ingrediente, assim como um video no Youtube de uma receita sendo feita.
- O sistema deve atender os requisitos de acessibilidade e prover boa usabilidade. Além disso o sistema deve ser responsivo.

---

### Descricão do projeto

Esse projeto consiste no desenvolvimento de uma aplicação online para uma loja de ingredientes, a qual terá algumas funcionalidades:

- Login e cadastro
- Cliente pode dicionar ou remover produtos do carrinho
- Processo de checkout
- Opções para gerenciamento de clientes e produtos exclusivas para administradores.
- Funcionaliade específica dessa aplicação: Ao clicar para visualizar um ingrediente do site, o cliente poderá ver sugestões de possíveis receitas para fazer com o ingrediente. Além de ser direcionado à um video no Youtube sobre a receita caso exista.

A fim de atender essas funcionalidades será necessário guardar informações referente a(o):
- admin: id, nome, telefone e email;
- cliente: id, nome, endereço, telefone e email;
- produto: id, nome, foto, descrição, preço, quantidade em estoque e quantidade vendida;
- receita: id, nome, foto, ingredientes e descrição;


O diagrama de navegação da aplicação com as páginas desenvolvidas pode ser visto na seguinte imagem:


<img src="https://docs.google.com/drawings/d/e/2PACX-1vQwnxKMqVyg2b3LG4fyccQgSx_RdGMqBWtCVipjJF4xozRtMyHfKtNJks_RUJ9YgIAi7qbzlN-ZyiPr/pub?w=1829&amp;h=940">


Para visualizar as páginas estáticas implementadas para prototipação, é possível utilizar os seguintes links:
- [Página principal](https://joaofavoretti.github.io/Online-Store-Project/Mockup/pagina-principal.html)
- [Carrinho](https://joaofavoretti.github.io/Online-Store-Project/Mockup/cart.html)
- [Página do administrador](https://joaofavoretti.github.io/Online-Store-Project/Mockup/admin-page.html)

---

### Comentários sobre o código
Código relacionado ao frontend está dentro da pasta [frontend](https://github.com/joaofavoretti/Online-Store-Project/tree/main/frontend).<br>
Código relacionado ao backend está dentro da pasta [backend](https://github.com/joaofavoretti/Online-Store-Project/tree/main/backend).<br>
Código relacionado ao banco de dados esta dentro da pasta [mongo](https://github.com/joaofavoretti/Online-Store-Project/tree/main/mongo).<br>

#### Frontend
A estrutura de pastas do projeto:
![image](https://user-images.githubusercontent.com/31491328/123684391-c5dd4600-d823-11eb-9535-3e76c6ccf167.png)

Para deixar o código padronizado, usamos a seguinte estrutura de pastas no projeto:
- public: Arquivos para configurar a aplicação em Vue (index.html e favicon.ico)
- src: Arquivos usados para criar o conteudo do site
    - assets: Contem arquivos estaticos do projeto (No nosso caso só possui a imagem que usamos para nossa loja)
    - components: Componentes principais que usamos pelo projeto todo.
    - plugins: Arquivos de configurações de plugins
    - router: Possui arquivo para configuração de rotas
    - services: Pasta que futuramente ficará as URIs de serviços que faremos usando o backend
    - shared: Arquivos compartilhados pelo código, como filtros, styles, validations, etc..
    - store: Onde ficaram os módulos que usamos nas telas.
    - views: Arquivos considerados telas principais do site, tal como Inicio, Carrinho e Painel do Administrador.

Além disso, vale comentar que por baixo das telas da pasta views, criamos um arquivo chamado [DashboardLayout.vue](https://github.com/joaofavoretti/Online-Store-Project/blob/main/frontend/src/components/layout/DashboardLayout.vue) para servir como root("/") do nosso objeto de [rotas](https://github.com/joaofavoretti/Online-Store-Project/blob/main/frontend/src/router/index.ts). E foi assim que fizemos as transições por meio do Navigation Drawer da tela.

#### Backend
A estrutura de pastas do projeto:
![image](https://user-images.githubusercontent.com/31491328/126907265-c862eb96-1e2b-4e5d-a7b3-ddfaab345d73.png)

- db: Dentro da pasta db, temos os arquivos usados como Schema para usar o banco de dados
    -  index.js: Arquivo de configuração do banco de dados
    -  product.js: Arquivo para configuração dos produtos do site
    -  user.js: Arquivo para configurar os schemas dos usuarios cadastrados no site
- index.js: Arquivo com as rotas utilizadas no backend

#### Banco de dados
Como para utilizar o banco, é necessário que se efetue uma serie de comandos, utilizamos a ferramenta do docker para facilitar o processo.<br>
Dentro da pasta ```/mongo/``` temos o arquivo [docker-compose.yaml](https://github.com/joaofavoretti/Online-Store-Project/blob/main/mongo/docker-compose.yaml) utilizado para rodar o banco de dados.<br>

---

### Plano de teste
No plano de testes utilizado não foi utilizado nenhuma biblioteca de testes unitários. Os testes foram realizados na mão nos campos de entrada.
Para sanar todos os casos possíveis nos campos de input, usamos a biblioteca "yup" para validar as entradas "on blur" e mascaras para não permitir que o campo seja preenchido da forma indevida.

Um exemplo de validação é o formulario de login do site. No campo de e-mail, é exigido que o formato do e-mail seja valido, caso o contrário o botão de "Entrar" não é habilitado. Do mesmo modo o campo de senha espera uma senha de 6 digitos sem caracteres alfabeticos (Usamos uma máscara no campo para não permitir que caracteres alfabeticos sejam utilizados).

Os demais campos pelo site tem suas devidas validações e mascaras quando necessário.

---

### Build Procedures
#### • Node
Para rodar o site na sua máquina, você deve ter o Node e o gerenciador de pacotes npm instalado na sua máquina.
Caso você não tenha, faça o [download pelo site oficial](https://nodejs.org/pt-br/download/package-manager/), de acordo com o seu sistema operacional. 

#### • Docker
Para rodar o banco de dados, achamos que ficou muito mais facil utilizar o docker-compose.
Para isso, é necessário que, para rodar o projeto, tenha o docker-compose instalado na máquina. Utilizando [esse link](https://docs.docker.com/compose/install/), e seguindo os passos do site, é bem trivial realizar a instalação. 
Para qualquer dúvida durante a instalação, os membros do grupo estão disponíveis para ajudar por e-mail ou Telegram.


#### • MongoDB
\* **É essencial rodar o banco de dados antes de rodar o projeto do frontend e do backend**
##### Run
Com o Docker-compose instalado, entre no diretório ```/mongo/```. Para rodar o banco de dados utilize o comando:
```
docker-compose up
```

#### • Frontend
##### Setup
Após ter o npm instalado, entre no diretório ```/frontend/``` e utilize o seguinte comando para instalar todas as dependencias do frontend:
```
npm install
```

##### Run
Após instalar as dependencias do projeto, para rodar a aplicação utilize o comando:
```
npm run serve
```

#### • Backend
##### Setup
Também com o npm instalado, entre no diretório ```/backend/``` e utilize o seguinte comando para instalar todas as dependencias do backend:
```
npm install
```
##### Run
Após instalar as dependencias do projeto, para rodar a apliação utilize o comando:
```
npm run dev
```


Assim, depois que o processo terminar, utilize seu navegador para acessar o endereço [localhost:8080](http://localhost:8080) e acessar o site.

---

### Problemas
Por conta de problemas de tempo, não conseguimos fazer todas as features que planejamos para o projeto.

---

### Comentários

#### Mockup
Os códigos para as páginas estáticas implementadas:
- [Página principal](Mockup/pagina-principal.html)
- [Carrinho](Mockup/cart.html)
- [Página do administrador](Mockup/admin-page.html)

Além disso, é possivel baixar o arquivo [Website-Prototype.fig](Website-Prototype.fig) e importar direto pelo software do Figma para ver o projeto pelo próprio aplicativo.

Imagens (.PNG) de todos os componentes desenvolvidos no Figma estão salvos na pasta [/Mockup/images-mockup](/Mockup/images-mockup) onde também podem ser visualizados.

#### Aplicação
Ao rodar primeiramente o projeto, o banco de dados estará vazio. Somente será possível logar com as credenciais de administrador ```(admin@admin.com:admin)```.

Para criar novos usuários, basta criar uma nova conta pelo site. Do mesmo modo para adicionar novos produtos, basta adicionar-los utilizando o Painel Adiministrador no usuario admin.
