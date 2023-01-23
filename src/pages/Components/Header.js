

import Link from 'next/link';
import Image from 'next/image';


const Header = () => {text
    return (
        <div className='hidden lg:block'>
            <div className='p-3 mainbackground flex text-white justify-between'>
                <div className='mainbackground flex text-white space-x-4 text-sm'>
                    <div className='space-x-4 flex'>
                        <Link href=''>Support</Link>
                        <Link href='/'>Blog</Link>
                    </div>
                    <p className='text-gray-500'>|</p>
                    <div className='space-x-4 flex'>
                        <Link href='/'>Instruct with EzLicence</Link>
                        <Link href='/'>Become an instructor</Link>
                    </div>
                </div>
                <div className='mainbackground flex text-white space-x-4 text-sm transition'>
                    <div className='space-x-4 flex uppercase'>
                        <Link href='/'>LEARNNER LOGIN</Link>
                        <p className='text-gray-500'>|</p>
                        <Link href='/'>Instructor Login</Link>
                    </div>
                    
                    
                </div>
            </div>
            <div className='p-4 flex justify-between items-center'>
                <div className='pl-2 flex space-x-3 items-center font-bold'>
                    <li className='pr-3'>
                        <Link href="/">
                            <Image className='' width="180" height="180" style={{maxWidth:'150px'}} src={"/Resources/Images/logo.png"} alt="Logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>Driving Lincence</Link>
                    </li>
                    <li>
                        <Link href='/'>Test Packages</Link>
                    </li>
                    <li>
                        <Link href='/'>Gift Vouchers</Link>
                    </li>
                    <li className='text-gray-500'>|</li>
                    <li>
                        <Link href='/'>Pricing</Link>
                    </li>
                </div>
                <div className=''>
                    <Link href="/pages/book_online" className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Book Online</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
