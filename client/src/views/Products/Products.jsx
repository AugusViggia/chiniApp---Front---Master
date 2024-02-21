import Product from "../../components/Product/Product";
import { useGetProductsQuery } from "../../firebase/services/firebaseApi";
import style from "./Products.module.css";

function Products({ showAddToCartButton }) {
  const { data } = useGetProductsQuery();
  const products = data || [];

  return (
    <div className={style.mainContainer}>
      <h1>Nuestros Productos</h1>
      <div className={style.productList}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            showAddToCartButton={showAddToCartButton}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
