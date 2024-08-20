import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ title, Icon, onClick }) {
	return (
		<div className={cx('wrapper')} onClick={onClick}>
			<Icon />
			<p>{title}</p>
		</div>
	);
}

export default Button;
