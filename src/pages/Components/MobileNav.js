import Image from "next/image";
import Link from "next/link";


const MobileNav = () => {
    return (
        <div className='block lg:hidden'>
            <div className='p-4 flex justify-between items-center'>
                <div className='pl-2 flex space-x-3 items-center font-bold'>
                    <li className='pr-3'>
                        <Link href='/'>
                            <Image className='' height="100" width="100" style={{maxWidth:'150px'}} src={"/Resources/Images/logo.png"} alt="Logo"/>
                        </Link>
                    </li>
                    
                </div>
                <div className=''>
                    <li><i className="bi bi-list text-4xl text-black"></i></li>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;
