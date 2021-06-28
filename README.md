# Online-Store-Project

Trabalho da disciplina Introdução ao Desenvolvimento Web - SCC0219

### Grupo 6 - Integrantes:

- Joao Pedro Favoretti (Nusp: 11316055)
- Lucas Pilla Pimentel (Nusp: 10633328)
- Luiz Fernando Santos (Nusp: 10892680)

<br>

### Requerimentos

- O sistema deve ter dois tipos de usuário:
    - Administradores: São responsáveis por gerenciar administradores, clientes e podutos.
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
- Funcionalidade **específica**: Ao acessar um ingrediente, o cliente pode selecionar uma receita e adicionar os ingredientes necessários para ela diretamente ao carrinho. Além disso, ao abrir os detalhes de um ingrediente, as receitas são listadas a baixo e um video no Youtube sobre a receita também é direcionado.
- O sistema deve atender os requisitos de acessibilidade e prover boa usabilidade. Além disso o sistema deve ser responsivo.

<br>

### Descricão do projeto

Esse projeto consiste no desenvolvimento de uma aplicação online para uma loja de ingredientes, a qual terá algumas funcionalidades:

- Login e cadastro
- Cliente pode dicionar ou remover produtos do carrinho
- Processo de checkout
- Opções para gerenciamento de clientes e produtos exclusivas para administradores.
- Funcionaliadde específica dessa aplicação: Ao clicar para visualizar um ingrediente do site, o cliente poderá ver sugestões de possíveis receitas para fazer com o ingrediente e adicionar receita completa ao carrinho de uma vez. Além de ser direcionado à um video no Youtube sobre a receita caso exista.

A fim de atender essas funcionalidades será necessário guardar informações referente a(o):
- admin: id, nome, telefone e email;
- cliente: id, nome, endereço, telefone e email;
- produto: id, nome, foto, descrição, preço, quantidade em estoque e quantidade vendida;
- receita: id, nome, foto, ingredientes e descrição;


Até o momento, foram desenvolvidas algumas das interfaces da loja utilizando a ferrementa Figma e HTML5/CSS3. O diagrama de navegação da aplicação com as páginas desenvolvidas pode ser visto na seguinte imagem:


<img src="https://docs.google.com/drawings/d/e/2PACX-1vQwnxKMqVyg2b3LG4fyccQgSx_RdGMqBWtCVipjJF4xozRtMyHfKtNJks_RUJ9YgIAi7qbzlN-ZyiPr/pub?w=1829&amp;h=940">


Para visualizar as páginas estáticas implementadas, é possível utilizar os seguintes links:
- [Página principal](https://joaofavoretti.github.io/Online-Store-Project/Mockup/pagina-principal.html)
- [Carrinho](https://joaofavoretti.github.io/Online-Store-Project/Mockup/cart.html)
- [Página do administrador](https://joaofavoretti.github.io/Online-Store-Project/Mockup/admin-page.html)





<br>

### Comentários sobre o código
Primeiramente, o nosso frontend esta dentro da pasta [frontend](https://github.com/joaofavoretti/Online-Store-Project/tree/main/frontend).

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

Com o site sem integração com o backend, nenhuma das funcionalidades ainda funcionam de fato. É possível ver todas as telas feitas no mockup, mas ao clicar em "Logar", "Comprar", "Atualizar", nada é feito por baixo dos panos, as dialogs com os botões somente fecham por enquanto. Porém, é possível "Logar" de forma simples no site. Ao clicar em "Não logado", a caixa de login abre e é possível entrar com qualquer informações para e-mail e senha que atendam os validadores de campos. Como por exemplo:

![image](https://user-images.githubusercontent.com/31491328/123686625-5ddc2f00-d826-11eb-97ad-669e281bd08e.png)

Após clicar em "Entrar", um nome mockado ("Conta teste") e o e-mail digitado aparecerão no Navigation Drawer à esquerda: 

![image](https://user-images.githubusercontent.com/31491328/123686848-9ed44380-d826-11eb-8ec1-8b92ea7172dd.png)


<br>

### Plano de teste
No plano de testes utilizado não foi utilizado nenhuma biblioteca de testes unitários. Os testes foram realizados na mão nos campos de entrada.
Para sanar todos os casos possíveis nos campos de input, usamos a biblioteca "yup" para validar as entradas onBlur e mascaras para não permitir que o campo seja preenchido da forma indevida.

Um exemplo de validação é o formulario de login do site. No campo de e-mail, é exigido que o formato do e-mail seja valido, caso o contrário o botão de "Entrar" não é habilitado. Do mesmo modo o campo de senha espera uma senha de 6 digitos sem caracteres alfabeticos (Usamos uma máscara no campo para não permitir que caracteres alfabeticos sejam utilizados).

Os demais campos pelo site tem suas devidas validações e mascaras quando necessário.


<br>

### Build Procedures
#### Node
Para rodar o site na sua máquina, você deve ter o Node e o gerenciador de pacotes npm instalado na sua máquina.
Caso você não tenha, faça o [download pelo site oficial](https://nodejs.org/pt-br/download/package-manager/), de acordo com o seu sistema operacional. 

#### Setup
Após ter o npm instalado, utilize o seguinte comando para instalar todas as dependencias do projeto:
```
npm install
```

#### Compile
Após instalar as dependencias do projeto, para rodar a apliação utilize o comando:
```
npm run serve
```

Assim, depois que o processo terminar, utilize seu navegador para acessar o endereço [localhost:8080](http://localhost:8080) e acessar o site.

<br>

### Problemas


<br>

### Comentários

Os códigos para as páginas estáticas implementadas:
- [Página principal](Mockup/pagina-principal.html)
- [Carrinho](Mockup/cart.html)
- [Página do administrador](Mockup/admin-page.html)

Além disso, é possivel baixar o arquivo [Website-Prototype.fig](Website-Prototype.fig) e importar direto pelo software do Figma para ver o projeto pelo próprio aplicativo.

Imagens (.PNG) de todos os componentes desenvolvidos no Figma estão salvos na pasta [/Mockup/images-mockup](/Mockup/images-mockup) onde também podem ser visualizados.
