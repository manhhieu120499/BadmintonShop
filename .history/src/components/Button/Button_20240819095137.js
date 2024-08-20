import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ title, Icon, onClick }) {
	return (
		<div className={cx('wrapper')} onClick={onClick}>
			<div className={cx('image-icon')}>
				<Icon />
			</div>
			<p className={cx('title')}>{title.toUpperCase()}</p>
		</div>
	);
}

export default Button;
