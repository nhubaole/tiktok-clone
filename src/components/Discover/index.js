import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import DiscoverItem from './DiscoverItem';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Discover</p>
            <div className={cx('items')}>
                <DiscoverItem icon="music" title="Ve nghe me ru Ve nghe me ru" />
                <DiscoverItem icon="hashtag" title="suthatla" />
                <DiscoverItem icon="hashtag" title="mackedoi" />
                <DiscoverItem icon="music" title="Ve nghe me ru" />
                <DiscoverItem icon="music" title="Ve nghe me ru" />
            </div>
        </div>
    );
}

export default Discover;
