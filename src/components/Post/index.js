import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCommentDots,
    faHeart,
    faMusic,
    faPause,
    faPlay,
    faShare,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from '../SuggestedAccount/AccountPreview';
import { Wrapper as PopperWrapper } from '../Popper';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Post() {
    const [isActive, setActive] = useState(true);
    const [playing, setPlaying] = useState(true);
    const vidRef = useRef(null);

    const handlePlayVideo = () => {
        playing ? vidRef.current.play() : vidRef.current.pause();
        setPlaying(!playing);
    };

    const toggleClass = () => {
        setActive(!isActive);
    };

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('wrapper-mother')}>
            <div className={cx('wrapper')}>
                <Tippy offset={[-20, 0]} interactive placement="bottom" delay={[800, 0]} render={renderPreview}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ff378af39120d4eb668eef664f92098a.jpeg?x-expires=1662620400&x-signature=b079%2BehF5wEkPNaLLR3sQczXXys%3D"
                        alt={'Lê Tuấn Khang'}
                    />
                </Tippy>
                <div className={cx('center-item')}>
                    <Tippy offset={[-20, 0]} interactive placement="bottom" delay={[800, 0]} render={renderPreview}>
                        <div className={cx('info')}>
                            <span className={cx('username')}>{'letuankhang2002'}</span>
                            <h4 className={cx('name')}>
                                <span>{'Lê Tuấn Khang'}</span>
                                {false && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                            </h4>
                        </div>
                    </Tippy>

                    <div className={cx('content')}>
                        <p className={cx('caption')}>Nói chung thì lỗi một phần cũng do con nha chú tám.</p>
                        <a className={cx('hashtag')}>#letuankhang</a>
                        <a className={cx('hashtag')}>#bmz</a>
                        <a href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1" className={cx('music')}>
                            <FontAwesomeIcon icon={faMusic} className={cx('music-icon')} />
                            <p className={cx('music-name')}>nhạc nền - Lê Tuấn Khang</p>
                        </a>
                    </div>
                    <div className={cx('main-item')}>
                        <div className={cx('video-div')}>
                            <FontAwesomeIcon className={cx('mute-icon')} icon={faVolumeXmark} />
                            {playing ? (
                                <FontAwesomeIcon
                                    className={cx('pauseplay-icon')}
                                    icon={faPlay}
                                    onClick={handlePlayVideo}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className={cx('pauseplay-icon')}
                                    icon={faPause}
                                    onClick={handlePlayVideo}
                                />
                            )}

                            <span className={cx('report')}>
                                <FontAwesomeIcon className={cx('report-icon')} icon={faFlag} />
                                Report
                            </span>

                            <video className={cx('video')} ref={vidRef}>
                                <source
                                    src="https://v16-webapp.tiktok.com/8c98928958b80d3fc1da0ea1af05c69b/631ee77a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/8f62b0d5bd76419396cc27d301b50d4a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3646&bt=1823&cs=0&ds=3&ft=eXd.6Hk_Myq8ZWKVrhe2NXUQml7Gb&mime_type=video_mp4&qs=0&rc=ODQ4Mzo6ZWRkaWhkNWg8Z0BpajZsOTQ6Znd3ZjMzZjgzM0BeXzI2Y14vXjExYS0wYGNiYSNuamBncjQwbGJgLS1kL2Nzcw%3D%3D&l=20220912020155010245242107026E9C7B&btag=80000"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className={cx('interact')}>
                            <div className={isActive ? cx('interact-item') : cx('active')} onClick={toggleClass}>
                                <div className={cx('box')}>
                                    <FontAwesomeIcon icon={faHeart} className={cx('interact-icon')} />
                                </div>
                                <strong className={cx('interact-quantity')}>227.3K</strong>
                            </div>
                            <div className={cx('interact-item')}>
                                <div className={cx('box')}>
                                    <FontAwesomeIcon icon={faCommentDots} className={cx('interact-icon')} />
                                </div>
                                <strong className={cx('interact-quantity')}>3327</strong>
                            </div>
                            <div className={cx('interact-item')}>
                                <div className={cx('box')}>
                                    <FontAwesomeIcon icon={faShare} className={cx('interact-icon')} />
                                </div>
                                <strong className={cx('interact-quantity')}>1229</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <Button outline small className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default Post;
