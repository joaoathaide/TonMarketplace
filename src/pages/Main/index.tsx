import React, { useState, useEffect, } from "react";

import api from '../../services/api';
import { useCart } from '../../hooks/cart';
import Product from "../../components/Product";

import { Container, Loading, ContainerList, List } from "./styles";

interface ProductRequest {
  id: string;
  title: string;
  image_url: string;
  singlePrice: number;
  quantity: number;
  productPrice: number;
  productShipping: string;
  addToCart(): void;
}

const Main: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<ProductRequest | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadProducts() {
      const response = await api.get<ProductRequest>('products');
      setProducts(response.data);
      setLoading(false);
    }

    loadProducts();
  }, []);

  function handleAddToCart(item: ProductRequest): void {
    addToCart(item);
  }

  return (
    <Container>
      { products && (
        <List
          data={products}
          keyExtractor={(item: ProductRequest) => String(item.id)}
          ListFooterComponent={loading && <Loading />}
          renderItem={({ item }: { item: ProductRequest}) => (
            <ContainerList>
              <Product
                title={item.title}
                image_url={item.image_url}
                singlePrice={item.singlePrice}
                quantity={item.quantity}
                productPrice={item.productPrice}
                productShipping={item.productShipping}
                addToCart={() => handleAddToCart(item)}
              />
            </ContainerList>
          )}
        />
      )}
    </Container>
  );
};

export default Main;
