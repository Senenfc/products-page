'use client';

import { ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import LinkIcon from "./icons/LinkIcon";
import CloseIcon from "./icons/CloseIcon";

export default function BaseModal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<"dialog">>(null);

    // this effect open the modal when call component
    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    const onClose = () => {
        router.back();
    }

    return (
        <section>
            <dialog
                ref={dialogRef}
                onClose={onClose}
                className="flex flex-col relative h-auto w-full max-w-[400px] sm:max-w-[600px] p-6 pt-8 rounded"
            >
                <div className="flex absolute space-between right-2.5 top-2.5">
                    <button
                        className="mr-2"
                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                    >
                        <LinkIcon />
                    </button>
                    <button className="text-sm" onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <div>{children}</div>
            </dialog>
        </section>
    )
}