import React  from 'react';
import './App.css';
//import Item from './Components/Item';
import Shop from './Components/Shop';
import  {Item} from './Item.js'
import Header from './Components/Header';

 
var ItemInCart=[];
const pants = new Item(1, "pants", 47, "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/kjkdoc0jnkutkwrkcj7f/dri-fit-mens-training-pants-7l3Wqy.jpg");
const hat = new Item(2, "hat", 26, "https://cdn.shopify.com/s/files/1/2693/5196/products/math_reg_720x.png?v=1569599319");
const shirt = new Item(3, "shirt", 30, "https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/02_41444300020.jpg");
const shoes = new Item(4, "shoes", 60, "https://i1.adis.ws/i/jpl/jd_019119_a?qlt=80");
const Itemslst = [pants, hat, shirt, shoes];

function App () {
  

  return (
    <div className="App">
      <Header/>
        <Shop  Itemslst={Itemslst} ItemsInCartlist={ItemInCart}/>
        
    </div>
  );
}

export default App;
