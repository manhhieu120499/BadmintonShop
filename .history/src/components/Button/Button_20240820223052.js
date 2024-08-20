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
	return (
		menuData[title].length > 0 &&
		menuData[title].map(({ name, icon: Icon }, index) => (
			<>
				{Icon && <Icon />}
				<p className={cx('menu-item')}>{name}</p>
			</>
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
