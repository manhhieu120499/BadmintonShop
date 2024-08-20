import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Tippy from '@tippyjs/react/headless';
import React from 'react';
import { RegisterIcon, LoginIcon } from '../Icons/Icon';

const cx = classNames.bind(styles);

const menuData = {
	'TRA CỨU': [
		{ name: 'Kiểm tra đơn hàng', icon: null },
		{ name: 'Kiểm tra bảo hành', icon: null },
	],
	'ĐĂNG NHẬP': [
		{ name: 'Đăng nhập', icon: LoginIcon },
		{ name: 'Đăng ký', icon: RegisterIcon },
	],
	'GIỎ HÀNG': ['Không có sản phẩm nào trong giỏ hàng của bạn'],
};

const renderSubMenu = (title) => {
	return menuData[title].length > 0 && title !== 'GIỎ HÀNG' ? (
		menuData[title].map(({ name, icon: Icon }, index) => (
			<div className={cx('menu-item')} key={index}>
				{Icon && <Icon />}
				<p className={cx('menu-item-title')}>{name}</p>
			</div>
		))
	) : (
		<div
			className={cx('menu-item', {
				cart: true,
			})}
		>
			<p className={cx('menu-item-title')}>{menuData[title]}</p>
		</div>
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
			placement={title === 'GIỎ HÀNG' ? 'bottom-end' : 'bottom'}
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
