import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets/images';

const cx = classNames.bind(styles);
function Header() {
	return (
		<div className={cx('wrapper')}>
			<img
				className={cx('logo-brand')}
				src={images.logo}
				alt="logo_shop"
			/>
			<div className={cx('header-content')}>
				<div className={cx('info-contact')}>
					{/** icon */}
					<p>
						HOTLINE:
						<span>0977637656</span>
						<span>|</span>
						<span>0977637656</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
