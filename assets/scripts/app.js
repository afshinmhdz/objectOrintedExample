class Product {
  // title = "DEFAULT"; //in the constructor we assign field and not good duplicated
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}
class ShoppingCart{
  item=[];
  render(){
    const cartEl=document.createElement('section');
    cartEl.innerHTML=`
    <h2>Total:\$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className='cart';
    return cartEl;
  }
}
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart(){
    console.log('your select some product');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
            <div>
              <img src='${this.product.imageUrl}' alt='${this.product.description}'>
              <div>
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <button>Add to card</button>
              </div>
            </div>
          `;
          const addCartButton=prodEl.querySelector('button');
          addCartButton.addEventListener('click',this.addToCart.bind(this));
          return prodEl;
        }
}

class ProductList {
  products = [
    new Product("A Pillow", "./assets/pillow.jpg", "A soft pillow", 19.99),
    new Product(
      "A Carpt",
      "./assets/carpet.jpg",
      "A carpet which you might like or not",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (let prod of this.products) {
      const productItem=new ProductItem(prod);
      const prodEl=productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
   // renderHook.append(prodList);
  }
}
const productList = new ProductList();
productList.render();

class Shop{
  render(){
    const renderHook = document.getElementById("app");
    const cart=new ShoppingCart();
    const cartEl=cart.render();
    const productList=new ProductList();
    const prodListEl=productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}
const shop=new Shop();
shop.render();

// const productsList = {
//   products: [],
//   render() {
//     const renderHook = document.getElementById("app");
//     const prodList = document.createElement("ul");
//     prodList.className = "product-list";
//     for (let prod of this.products) {
//       let prodEl = document.createElement("li");
//       prodEl.className = "product-item";
//       prodEl.innerHTML = `
//         <div>
//           <img src='${prod.imageUrl}' alt='${prod.description}'>
//           <div>
//             <h2>${prod.title}</h2>
//             <h3>\$${prod.price}</h3>
//             <button>Add to card</button>
//           </div>
//         </div>
//       `;
//       prodList.append(prodEl);
//     }
//     renderHook.append(prodList);
//   },
// };
// productsList.render();
