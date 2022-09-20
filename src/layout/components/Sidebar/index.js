import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import routes from '~/config/routes';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccount';
import Discover from '~/components/Discover';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccount label="Suggested accounts" />
            <SuggestedAccount label="Folowing accounts" />
            <Discover />
        </aside>
    );
}

export default Sidebar;
