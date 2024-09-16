import Link from 'next/link';
import mockProducts from '@/mockData/mockProducts.json';

export default function ProductsPage() {
  const products = mockProducts;

  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-2xl mb-8">Products</h1>
      <article className="w-full">
        <section className="flex flex-col items-start content-start">
          <h2 className="font-bold mb-4">List of products</h2>
          <ul className="flex gap-4">
            {products.map((product) => (
              <li key={product.id}>
                <Link href={`/product/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
