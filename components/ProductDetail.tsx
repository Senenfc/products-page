import { Product } from "@/types/product.type";

export default function ProductDetail({ product }: { product: Product }) {
    return (
        <section className="flex flex-col bg-white p-4 gap-4 text-sm w-72">
            <h1 className="text-2xl font-medium">{product.name}</h1>
            <p className="text-gray-700">{product.description}</p>
            <p className="flex flex-grow items-end text-xs text-gray-400">CodeId: XXX{product.id}</p>
        </section>
    )
}