import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets/images';

const cx = classNames.bind(styles);
function Header() {
	return (
		<div className={cx('wrapper')}>
			<img src={images.logo} alt="logo_shop" />
		</div>
	);
}

export default Header;
