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



<br>

### Plano de teste



<br>

### Resultados do teste



<br>

### Build Procedures



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
