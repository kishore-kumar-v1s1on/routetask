import { useEffect, useState } from "react";
import './Styles.css'
import ProductCard from "../components/ProductCard/ProductCard";

export default function Blockchain() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://6644d1124021401d276ce071--transcendent-capybara-5580d6.netlify.app/blockchain.json")
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
