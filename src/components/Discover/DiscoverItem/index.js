import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import styles from '../Discover.module.scss';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DiscoverItem({ icon, title }) {
    return (
        <a href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1" className={cx('item')}>
            {icon === 'music' && <FontAwesomeIcon icon={faMusic} className={cx('icon')} />}
            {icon === 'hashtag' && <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />}
            <p className={cx('title')}>{title}</p>
        </a>
    );
}

export default DiscoverItem;
