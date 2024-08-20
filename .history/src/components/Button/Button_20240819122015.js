import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Tippy from '@tippyjs/react/headless';
import React from 'react';

const cx = classNames.bind(styles);

function Button({ title, Icon, onClick }) {
	return (
		<Tippy
			render={(attr) => (
				<div className={cx('menu')} tabIndex="-1" {...attr}>
					<p className={cx('menu-item')}>Kiểm tra đơn hàng</p>
				</div>
			)}
			placement="bottom"
			interactive={true}
			offset={[20, 0]}
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
