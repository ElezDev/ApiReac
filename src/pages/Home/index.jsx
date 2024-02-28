import { useState, useEffect } from "react";
import Card from "../../components/Card";

import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {items?.map(item => (
        // eslint-disable-next-line react/jsx-key
        <Card key={item.id} data={item} />
        
      ))}
      </div>
      <ProductDetail></ProductDetail>
    </Layout>
  );
}

export default Home;
