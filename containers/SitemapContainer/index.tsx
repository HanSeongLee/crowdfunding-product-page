import React, {HTMLAttributes} from 'react';
import Link from 'next/link';

const sitemap = [
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Discover',
        href: '#discover',
    },
    {
        name: 'Get Started',
        href: '#get_started',
    },
];

const SitemapContainer: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {sitemap?.map(({name, href}, index) => (
                <li key={index}>
                    <Link href={href}>
                        <a>
                            {name}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SitemapContainer;
