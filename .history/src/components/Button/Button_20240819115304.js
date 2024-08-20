import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Button({ title, Icon, onClick }) {
	return (
		<Tippy
			render={(attr) => {
				<div className={cx('menu')} {...attr}>
					<h1>Hello</h1>
				</div>;
			}}
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
