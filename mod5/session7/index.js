const express = require("express")
const app = express()
app.arguments(express.json())

function logger(req, res, next) {
   console.log(`${req.method} ${req.url}`);
   next(); // continue to the route handler
 }
 
 app.use(logger);

const products = [
    {
        id: 1,
        name: "Product 1"
    },
    {
        id: 2,
        name: "Product 2"
    },
    {
        id: 3,
        name: "Product 3"
    }
]

//request | respons
app.get("/", (req, res) => {
    res.send("API OK SERVER NODEMON")
})

app.get("/test", (req, res) => {
    res.send("Test route ok!")
})

// app.get("/products", (req, res) => {
//     res.json(products)
// })

app.get("/products", (req, res) => {
    const lastProduct = products[products.length - 1];
    const lastId = lastId + 1
    const pid = req.body.pid
    const pname = req.body.pname
    const products = {
        id: pid,
        name: pname,
    }
    products.push(newProduct)
    res.json(products)
})

app.put("/products/:pid", (req, res) => {
    const pid = req.params.pid
    const newProductName = req.body.name
    const indexOfProduct = products.findIndex(product => product.id == pid)
    products[indexOfProduct].name = newProductName
    res.json(products[indexOfProduct])
})

app.delete("/products/:pid", (req, res) => {
    const pid = req.params.pid
    const indexOfProduct = products.findIndex(product => product.id == pid)
    products.splice(indexOfProduct)
    res.json(products)
})

app.post("/message", (req, res) => {
   const message = req.body.text;
   res.send(`You said: ${message}`);
 });

app.listen(3000, () => console.log("server is running on http://localhost:3000"))
