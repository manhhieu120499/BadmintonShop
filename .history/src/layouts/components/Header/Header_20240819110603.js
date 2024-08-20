import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import Search from '../Search';
import { LookupIcon, ShoppingCart, UserIcon } from '../../../components/Icons';
import Button from '../../../components/Button';
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
					<img
						src={images.phone_call}
						alt="telesale"
						className={cx('image-telesale')}
					/>
					<div className={cx('contact')}>
						<p className={cx('contact_title')}>HOTLINE:</p>
						<p className={cx('contact_number')}>
							<span>0977637656</span>
							<span> | </span>
							<span>0977637656</span>
						</p>
					</div>
				</div>
				<div className={cx('other-company')}>
					{/** icon */}
					<img
						src={images.map}
						alt="map"
						className={cx('image-map')}
					/>
					<p>HỆ THỐNG CỬA HÀNG</p>
				</div>
				<Search />
			</div>
			<div className={cx('other')}>
				<Button title={'Tra cứu'} Icon={LookupIcon} />
				<Button title={'Đăng nhập'} Icon={UserIcon} />
				<Button title={'Giỏ hàng'} Icon={ShoppingCart} />
			</div>
		</div>
	);
}

export default Header;
