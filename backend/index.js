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
    const [email, password] = Buffer.from(token, 'base64').toString('ascii').split(":");
    
    const user = await User.find({ "email": email, "password": password });
    if (user.length != 0) {
        const data = user[0];
        delete data["id"];
        res.status(202).send(JSON.stringify(data));
    }
    res.status(200).send();            
});

// Create Sale (save user sale to the database and decrease product)
const saleRoute = router.post('/sale', async (req, res, next) => {
    const products = req.body.products;
    for(let i=0; i<products.length; i++) {
        var product = products[i];
        try{
            var productOld = await Product.findById(product._id);
            var quantity = productOld.quantity;
            Product.findByIdAndUpdate(product._id,
                {$set: {
                    quantity: quantity - product.quantity,
                }}).then(x=>{
                    console.log("Compra realizada");
                }).catch(e=>{
                    console.log("Falha na compra");
                });  
        }
        catch{
            res.status(405).send();  
        }        
    }
    res.status(200).send();            
});

// Get Products
const getProductsRoute = router.get('/products', async (req, res, next) => {
    Product.find({}).then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(e=>{
        res.status(200).send([]);
    })
            
});

// Save Product
const saveProductsRoute = router.post('/products', async (req, res, next) => {
    const products = await Product.create(req.body);
    res.status(201).send();            
});


// Update Product
const updateProductsRoute = router.put('/products', (req, res, next) => {
    const id = req.body._id;
    Product.findByIdAndUpdate(id,
        {$set: {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            description: req.body.description,
            youtubeEmbed: req.body.youtubeEmbed,
            src: req.body.src,
            dateCreated: req.body.dateCreated
        }}).then(x=>{
            res.status(200).send();  
        }).catch(e=>{
            res.status(200).send();  
        });          
});

// Get Clients
const getClientsRoute = router.get('/clients', (req, res, next) => {
    User.find({}).then(data=> {
      data.id = data._id;
        res.status(200).send(data);  
    }).catch(e=>{
        res.status(200).send();
    })          
});

// Delete Client
const deleteClientRoute = router.post('/clients', (req, res, next) => {
    User.findOneAndRemove(req.body.id).then(x=>{
        res.status(204).send();
    }).catch(e=>{
        res.status(200).send();
    })
});


app.use(loginRoute);
app.use(registerRoute);
app.use(saleRoute);
app.use(getProductsRoute);
app.use(saveProductsRoute);
app.use(updateProductsRoute);
app.use(getClientsRoute);
app.use(deleteClientRoute);

server.listen(port, () => console.log(`Running on port ${port}`) );