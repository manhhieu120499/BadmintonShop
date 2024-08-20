import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Tippy from '@tippyjs/react/headless';
import React from 'react';

const cx = classNames.bind(styles);

function Button({ title, Icon, onClick }) {
	return (
		<div>
			<Tippy
				render={(attr) => {
					<div className={cx('menu')} tabIndex="-1" {...attr}>
						<h1>Hello</h1>
					</div>;
				}}
				placement="bottom"
				interactive={true}
			>
				<div className={cx('wrapper')} onClick={onClick}>
					<div className={cx('image-icon')}>
						<Icon />
					</div>
					<p className={cx('title')}>{title.toUpperCase()}</p>
				</div>
			</Tippy>
		</div>
	);
}

export default Button;
