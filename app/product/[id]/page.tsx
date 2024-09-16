import mockProducts from '@/mockData/mockProducts.json';

export async function getStaticPaths() {
  const paths = mockProducts.map((product: any) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: true };
}

export default function ProductPage({ params }: any) {
  const { id } = params;
  return <div>Product {id}</div>;
}
