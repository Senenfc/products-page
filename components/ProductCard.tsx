import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({product}: { product: any}) {
    return (
        <li className='bg-white border border-gray-300 rounded p-1 hover:scale-[1.01]'>
            <Link href={`/product/${product.id}`}>
                <Image
                    priority
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                />
                <p className='py-1.5 text-center text-sm text-gray-600 font-medium'>{product.name}</p>
            </Link>
        </li>
    )
}