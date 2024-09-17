import { Product } from '@/types/product.type';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(process.env.ORIGIN_URL + '/api/products/');
  return await response.json();
}