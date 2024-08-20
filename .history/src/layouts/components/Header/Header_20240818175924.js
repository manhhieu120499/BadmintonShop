import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import Search from '../Search';
import { LookupIcon } from '../../../components/Icons';
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
					<p>
						HOTLINE:
						<span>0977637656</span>
						<span>|</span>
						<span>0977637656</span>
					</p>
				</div>
				<div className={cx('other-company')}>
					{/** icon */}
					<p>HỆ THỐNG CỬA HÀNG</p>
				</div>
				<Search />
			</div>
			<div className={cx('other')}>
				<Button title={'Tra cứu'} Icon={LookupIcon} />
			</div>
		</div>
	);
}

export default Header;
