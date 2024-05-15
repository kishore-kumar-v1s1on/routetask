import { useEffect, useState } from "react";
import './Styles.css'
import ProductCard from "../components/ProductCard/ProductCard";

export default function Blockchain() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://github.com/kishore-kumar-v1s1on/routetask/blob/master/public/blockchain.json")
      .then((response) => response.json())
      .then((result) => setProducts(result.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <section>
        <div className='course-display-list'>
          {products.map((data, index) => (
            <ProductCard key={`${data.name}-${index}`} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
}
