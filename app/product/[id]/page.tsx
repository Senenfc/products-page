import mockProducts from '@/mockData/mockProducts.json';

export async function generateStaticParams() {
  const paths = mockProducts.map((product: any) => (
    { id: product.id.toString() }
  ));

  return paths;
}

export default function ProductPage({ params }: any) {
  const { id } = params;
  const product = mockProducts.find(product => product.id === Number(id))

  if (!product) return <div>Loading...</div>

  return <div>
    <h1>Product {product.id}</h1>
    <p>Name: {product.name}</p>
    <p>Description: {product.description}</p>
  </div>;
}
