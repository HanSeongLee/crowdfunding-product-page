import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import IconBookmark from '/public/icons/icon-bookmark.svg';
import cn from 'classnames';

const BookmarkButton: React.FC = () => {
    const [bookmarked, setBookmarked] = useState(false);

    const toggleBookmark = useCallback(() => {
        setBookmarked(!bookmarked);
    }, [bookmarked]);

    return (
        <button className={cn(styles.bookmarkButton, {
            [styles.bookmarked]: bookmarked,
        })}
                type={'button'}
                aria-label={'bookmark'}
                onClick={toggleBookmark}
        >
            <IconBookmark className={styles.icon} />
        </button>
    );
};

export default BookmarkButton;
