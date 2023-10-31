// components/Breadcrumb.js

import { useRouter } from 'next/router';
import Link from 'next/link';
import '@styles/globals.css'

const Breadcrumb = () => {
    const router = useRouter();
    const { pathname, query } = router;
    const pathParts = pathname.split('/').filter((part) => part !== ''); // Remove empty parts



    return (
        <nav>
            <ul className='breadcrumb text-red'>
                <li className='breadcrumb-item '>
                    <Link href="/">Home</Link>
                </li>
                {pathParts.map((part, index) => (
                    <li className='breadcrumb-item' key={index}>
                        <Link href={`/${pathParts.slice(0, index + 1).join('/')}`}>
                            {part}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
