
import ProductCard from '@/components/ProductCard';
import { getProducts } from './services/getProduct';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl mb-8 font-semibold">Products</h1>
      <article className="w-full">
        <section className="flex flex-col items-start content-start">
          <h2 className="font-bold mb-4">List of products</h2>
          <ul className="flex flex-wrap gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
