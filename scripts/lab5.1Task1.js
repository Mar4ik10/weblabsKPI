function createProduct(obj, callback) {
    const productId = generateProductId();
    const product = { ...obj, id: productId };
    callback(product);
  }
  
  function logProduct(product) {
    console.log("Product:", product);
  }
  
  function logTotalPrice(product) {
    const totalPrice = calculateTotalPrice(product);
    console.log("Total Price:", totalPrice);
  }
  
  function generateProductId() {
    return Math.random().toString(36).substring(2, 10); 
  }
  
  function calculateTotalPrice(product) {
    return product.price * product.quantity;
  }
  
  const productData = {
    name: "Товар 1",
    price: 10,
    quantity: 2
  };
  
  createProduct(productData, logProduct);
  
  createProduct(productData, logTotalPrice);
  