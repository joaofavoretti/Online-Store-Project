const express = require('express');
const http = require('http');
var cors = require('cors');
const moongoose = require('./db/index');
const User = require('./db/user');
const Product = require('./db/product');

const app = express();

/* Config */

// Server configs
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extened: false }));
app.use(cors({origin: 'http://localhost:8080'}));

const port = process.env.PORT || 5000;
const server = http.createServer(app);

const router = express.Router();


// DB configs
var products = [
    { id: 1, quantity: 5, name: 'Produto 0', price: 1, description: 'Muito gostoso', youtubeEmbed: 'https://www.youtube.com/embed/wtlfcHmfKW0', src: 'https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
    { id: 2, quantity: 5, name: 'Produto 1', price: 1, src: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 3, quantity: 5, name: 'Produto 2', price: 1, src: 'https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80' },
    { id: 4, quantity: 5, name: 'Produto 3', price: 10, src: 'https://images.unsplash.com/photo-1556909172-89cf0b24ff02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' },
    { id: 5, quantity: 5, name: 'Produto 4', price: 10, src: 'https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { id: 6, quantity: 5, name: 'Produto 5', price: 10, src: 'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80' },
    { id: 7, quantity: 5, name: 'Product 0', price: 1, src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
    { id: 8, quantity: 5, name: 'Product 1', price: 1, src: '' },
    { id: 9, quantity: 5, name: 'Product 2', price: 1, src: '' },
    { id: 10, quantity: 5, name: 'Product 3', price: 10, src: '' },
    { id: 11, quantity: 5, name: 'Product 4', price: 10, src: '' },
    { id: 12, quantity: 5, name: 'Product 5', price: 10, src: '' },
    { id: 13, quantity: 5, name: 'Product 6', price: 100, src: '' },
    { id: 14, quantity: 5, name: 'Product 7', price: 100, src: '' },
    { id: 15, quantity: 5, name: 'Product 8', price: 10000, src: '' },
  ]

  var clients = [
    { id: 1, name: 'Cliente 1', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 2, name: 'Cliente 2', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 3, name: 'Cliente 3', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 4, name: 'Cliente 4', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 5, name: 'Cliente 5', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 6, name: 'Cliente 6', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 7, name: 'Cliente 7', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 8, name: 'Cliente 8', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 9, name: 'Cliente 9', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 10, name: 'Cliente 10', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 11, name: 'Cliente 11', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 12, name: 'Cliente 12', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 13, name: 'Cliente 13', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 14, name: 'Cliente 14', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
    { id: 15, name: 'Cliente 15', phone: '(DD) 99796-4097', email: 'teste@teste.com', address: 'av teste' },
  ]

/* Routes */

// Register
const registerRoute = router.post('/signup', async (req, res, next) => {
    const data = req.body;
    const email = data.email;

    const oldUser = await User.find({ "email": email });
    if (oldUser.length != 0) {
        res.status(200).send();    
    } else {
        const allUsers = await User.find({  });
        const total = allUsers.length+1;
        data["id"] = total;
        console.log(data);
        const user = await User.create(data);
        res.status(201).send();  
    }
    
});

// Login
const loginRoute = router.post('/login', async (req, res, next) => {
    const token = req.body.token
    const [email, password] = atob(token).split(":");
    
    const user = await User.find({ "email": email, "password": password });
    if (user.length != 0) {
        const data = user[0];
        delete data["id"];
        res.status(202).send(JSON.stringify(data));
    }
    res.status(200).send();            
});

// Create Sale (save user sale to the database)
const saleRoute = router.post('/sale', (req, res, next) => {
    console.log(req.body);

    res.status(200).send();            
});

// Get Products
const getProductsRoute = router.get('/products', async (req, res, next) => {
    //const products = await Product.find({},{_id: 0, __v: 0});

    res.status(200).send(products);            
});

// Save Product
const saveProductsRoute = router.post('/products', async (req, res, next) => {
    //const allProducts = await Product.find({});
    //var data = req.body;
    //data["id"] = allProducts.length+1;
    //const products = await Product.create(data);

    products.push(data);
    res.status(200).send();            
});

// Get Clients
const getClientsRoute = router.get('/clients', (req, res, next) => {
    res.status(200).send(clients);            
});

// Delete Client
const deleteClientRoute = router.post('/clients', (req, res, next) => {
    var id = req.body["id"];
    var idx=-1;
    for (let i=0; i<clients.length; i++) {
        if (clients[i].id == id) {
            idx = i;
        }
    }

    if (idx != -1) {
        clients.splice(idx,1);
        res.status(204).send();
    } else {
        res.status(200).send(); 
    }
});


app.use(loginRoute);
app.use(registerRoute);
app.use(saleRoute);
app.use(getProductsRoute);
app.use(saveProductsRoute);
app.use(getClientsRoute);
app.use(deleteClientRoute);

server.listen(port, () => console.log(`Running on port ${port}`) );