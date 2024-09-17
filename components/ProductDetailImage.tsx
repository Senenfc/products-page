import Image from "next/image";

export default function ProductDetailImage({ imageSrc, alt }: { imageSrc: string, alt: string }) {
    return (
        <section>
            <Image priority src={imageSrc} alt={alt} width={450} height={450} />
        </section>
    )
}