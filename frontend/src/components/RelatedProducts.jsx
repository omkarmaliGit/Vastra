import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory, productId }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (product) => category === product.category
      );
      productsCopy = productsCopy.filter(
        (product) => subCategory === product.subCategory
      );
      productsCopy = productsCopy.filter(
        (product) => productId !== product._id
      );

      const shuffled = [...productsCopy].sort(() => 0.5 - Math.random());

      setRelated(shuffled.slice(0, 5));
    }
  }, [products, productId]);

  return (
    <div className="my-20">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
