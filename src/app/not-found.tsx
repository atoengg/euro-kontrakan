import { notFound } from '@/image'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen flex-col bg-white">
                <Image src={notFound} alt='img-notFound' width={250}/>
                <h2 className='text-2xl my-2 text-secondary-950 font-bold'>Not Found</h2>
                <p className='text-sm my-2 text-secondary-950'>Maaf halaman yang anda cari tidak ada bro</p>
                <Link className='cursor-pointer italic text-blue-500' href="/">Return Home</Link>
            </div>
        </>
    )
}