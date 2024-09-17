import Link from 'next/link';

export default function Header() {
    return (
        <header className='h-20 border-b-2 border-gray-300'>
            <div className='flex h-full items-center ml-12' >
                <Link href={"/"}>
                    <h1 className='text-2xl font-bold'>iCatalog</h1>
                </Link>
            </div>
        </header>
    )
}