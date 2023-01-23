
import Link from 'next/link';
import Image from 'next/image';


const Package = () => {
    return (
        <div className='w-full sm:w-2/5 rounded-sm shadow-md lg:flex lg:m-2 mb-4 lg:mb-0' style={{border:'1px solid rgba(0,0,0,0.1)'}}>
            <div className='w-full lg:w-1/3 bg-blue-600 p-4'>
                <Image alt="image" className='rounded-full border-white border-2' height={100} width={100} src={"/Resources/Images/instrt1.webp"} />
                <Link href="/" className='underline itelic text-xs text-gray-200'>Check Availability </Link>
            </div>
            <div className='w-full lg:w-3/4 bg-green-50 p-4'>
                <p className='text-xs text-gray-600'>Instructor Name</p>
                <h1 className='text-black text-xl font-extrabold'>Ash</h1>
                <p className='text-gray-400 italic text-xs'>Ash speaks Bengali,English,Spanis,Hindi</p>
                <div className='mt-6 flex justify-between'>
                    <Link href="/pages/schedule" className='text-center p-2 bg-blue-400  text-white rounded-md uppercase font-bold text-xs'>
                        Book Him Now
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default Package;
