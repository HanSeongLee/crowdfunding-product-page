import React, {AnchorHTMLAttributes} from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';

const Logo: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, ...props }) => {
    return (
        <Link href={'/'}>
            <a className={cn(styles.logo, className)}
               {...props}
            >
                <h1>
                    <img src={'/logo.svg'}
                         alt={'crowdfund'}
                    />
                </h1>
            </a>
        </Link>
    );
};

export default Logo;
