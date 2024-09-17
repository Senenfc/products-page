import Image from "next/image";
import ZoomScanIcon from "./icons/ZoomScanIcon";
import Link from "next/link";
import { Product } from "@/types/product.type";

export default function ProductDetailImage({ product }: { product: Product }) {
    return (
        <section className="flex relative">
            <Image priority src={product.images[0]} alt={product.name} width={450} height={450} />
            <Link
                className="absolute bottom-1 right-1"
                href={`/images/${product.id}`}
            >
                <ZoomScanIcon />
            </Link>
        </section>
    )
}