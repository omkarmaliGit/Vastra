import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    setBestProducts(
      products.filter((product) => (product.bestseller = true)).slice(0, 10)
    );
  }, [products]);

  return (
    <section>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"BEST"} text2={"SELLER"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Loved by Many, Worn by You. Shop Our Best-Selling Pieces That Define
            Style and Grace!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestProducts.map((bestProduct, index) => (
            <ProductItem
              key={index}
              id={bestProduct._id}
              image={bestProduct.image}
              name={bestProduct.name}
              price={bestProduct.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
