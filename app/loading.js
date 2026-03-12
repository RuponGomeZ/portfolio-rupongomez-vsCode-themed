import Image from 'next/image'

export default function loading() {
    return (
        <div className=" min-h-screen backdrop-blur-sm flex items-center justify-center z-50">
            <Image
                src="/loading.svg"
                alt="Loading..."
                width={100}
                height={100}
                priority
                className=" text-primary drop-shadow-lg"
            />
        </div>
    )
}
