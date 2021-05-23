# Online-Store-Project

Trabalho da disciplina Introdução ao Desenvolvimento Web - SCC0219

### Grupo 6 - Integrantes:

- Joao Pedro Favoretti (Nusp: XXXXXXXX)
- Lucas Pilla Pimentel (Nusp: XXXXXXXX)
- Nao sei o nome (Nusp: XXXXXXXX)

<br>

### Requerimentos

- O sistema deve ter dois tipos de usuário:
    - Administradores: são responsáveis por gerenciar administradores, clientes e podutos.
    - Clientes: são usuários que acessam o sistema para comprar produtos.
- Para armazenar os dados é preciso ter os seguintes registros:
    - admin: id, nome, telefone e email;
    - cliente: id, nome, endereço, telefone e email;
    - produto: id, nome, foto, descrição, preço, quantidade em estoque e quantidade vendida;
    - **Específico** - receita: id, nome, foto, ingredientes e descricao;
- Carrinho: "estrutura" onde os usuários devem adicionar os produtos que desejam comprar, e então prosseguir para o checkout.
-  Checkout: o sistema deve solicitar pelo cartão de crédito e senha do cliente. Conclui-se a compra e esvazia o carrinho.
- O carrinho pode ser esvaziado apenas após o pagamento ou pelo cliente.
- Gerenciamento dos produtos: administradores podem criar/atualizar/ler/deletar algum produto. Por exemplo, mudar a quantidade em estoque.
- Funcionalidade **específica**: para construir sua lista de ingredientes, o cliente pode selecionar uma receita e, automaticamente, os ingredientes necessários são adicionados ao carrinho. 
- O sistema deve atender os requisitos de acessibilidade e prover boa usabilidade. Além disso o sistema deve ser responsivo.

<br>

### Descricão do projeto

Esse projeto consiste no desenvolvimento de uma aplicação online para uma loja de ingredientes, a qual terá algumas funcionalidades:

- Login e cadastro
- Cliente pode dicionar ou remover produtos do carrinho
- Processo de checkout
- Opções para gerenciamento de clientes e produtos exclusivas para administradores.
- Funcionaliadde específica dessa aplicação: o cliente pode montar seu carrinho a partir de receitas, para isso o usuário poderá pesquisar por receitas e seleciona-las. Os ingredientes atrelados a essa receita são adicionados no carrinho.

A fim de atender essas funcionalidades será necessário guardar informações referente a(o):
- admin: id, nome, telefone e email;
- cliente: id, nome, endereço, telefone e email;
- produto: id, nome, foto, descrição, preço, quantidade em estoque e quantidade vendida;
- receita: id, nome, foto, ingredientes e descrição;


Para isso, até o momento, foram desenvolvidas algumas das interfaces da loja utilizando a ferrementa Figma e HTML5/CSS3. O diagrama de navegação da aplicação com as páginas desenvolvidas pode ser visto na seguinte imagem:


<img src="https://docs.google.com/drawings/d/e/2PACX-1vQwnxKMqVyg2b3LG4fyccQgSx_RdGMqBWtCVipjJF4xozRtMyHfKtNJks_RUJ9YgIAi7qbzlN-ZyiPr/pub?w=1829&amp;h=940">


Link para as páginas estáticas implementadas:
- [Pagina principal](Mockup/index.html)
- [Carrinho](Mockup/cart.html)
- [Pagina do administrador](Mockup/admin-page.html)




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