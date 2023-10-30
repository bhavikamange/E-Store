
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require('../products.json');

const app = express();

const port = process.env.PORT || 5001;
app.use(bodyParser.json());
app.use(cors());


function getProductById(productId) {
  // Find the product with the matching ID
  const product = products.data.find((p) => p.id === parseInt(productId, 10));

  return product;
}

app.get('/', (req, res) => {
  res.json({"message": "Hello from your Node.js server!"});
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

// In your server.ts
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = getProductById(productId);
  console.log("product: ", product)
  if(product){
    res.json(product)}
  else{
    res.status(404).json({message: "product not found"});
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});