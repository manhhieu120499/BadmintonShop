import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Tippy from '@tippyjs/react/headless';
import React from 'react';

const cx = classNames.bind(styles);

const menuData = {
	'TRA CỨU': ['Kiểm tra đơn hàng', 'Kiểm tra bảo hành'],
	'ĐĂNG NHẬP': ['Đăng nhập', 'Đăng ký'],
	'GIỎ HÀNG': ['Không có sản phẩm nào trong giỏ hàng của bạn'],
};

const renderSubMenu = (title) => {
	return (
		menuData[title].length > 0 &&
		menuData[title].map((item, index) => (
			<p className={cx('menu-item')}>{item}</p>
		))
	);
};

function Button({ title, Icon, onClick }) {
	return (
		<Tippy
			render={(attr) => (
				<div className={cx('menu')} tabIndex="-1" {...attr}>
					{renderSubMenu(title.toUpperCase())}
				</div>
			)}
			placement={title === 'GIỎ HÀNG' ? 'bottom' : 'bottom-end'}
			interactive={true}
			offset={[0, -15]}
		>
			<div className={cx('wrapper')} onClick={onClick}>
				<div className={cx('image-icon')}>
					<Icon />
				</div>
				<p className={cx('title')}>{title.toUpperCase()}</p>
			</div>
		</Tippy>
	);
}

export default Button;
