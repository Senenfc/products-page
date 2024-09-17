import { getProducts } from '@/app/services/getProduct';
import ProductDetail from '@/components/ProductDetail';
import ProductDetailImage from '@/components/ProductDetailImage';
import mockProducts from '@/mockData/mockProducts.json';
import { Product } from '@/types/product.type';

export async function generateStaticParams() {
  const products = await getProducts();

  const paths = products.map((product: Product) => (
    { id: product.id.toString() }
  ));

  return paths;
}

export default async function ProductPage({ params }: any) {
  const { id } = params;
  const products = await getProducts();
  const product = products.find(product => product.id === Number(id))

  if (!product) return <div>Product not found!</div>

  return (
    <article className='flex justify-center'>
      <ProductDetailImage imageSrc={product.images[0]} alt={product.name} />
      <ProductDetail product={product} />
    </article>
  )
}
