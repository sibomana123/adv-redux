import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS=[{
  id:'p1',
  price:2000,
  title:'Iphone 14pro',
  description:'New Version of apple products'
},
{
  id:'p2',
  price:1400,
  title:'Sumsung glx s25',
  description:'New Version of sumsung products'
}]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
            <ProductItem
            key={product.id} 
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
        />))}

      </ul>
    </section>
  );
};

export default Products;
