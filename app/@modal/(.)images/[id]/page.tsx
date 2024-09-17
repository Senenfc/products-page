import BaseModal from "@/components/BaseModal";
import { Suspense } from "react";

export default function CarouselImagesModal({params}: {params: {id: string}}) {
    return (
        <Suspense fallback={<>Loading...</>}>
            <BaseModal>
                My modal {params.id}
            </BaseModal>
        </Suspense>
    )
}