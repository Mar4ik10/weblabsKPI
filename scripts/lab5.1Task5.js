const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];
  
  function applyDiscountAndAddId(products) {
    const generateId = () => Math.random().toString(36).substring(2, 10);
  
    const discountedProducts = products.map((product, index) => ({
      ...product,
      id: generateId(),
      price: product.price * 0.8,
    }));
  
    return discountedProducts;
  }
  
  const discountedFruits = applyDiscountAndAddId(fruits);
  console.log(discountedFruits);
  