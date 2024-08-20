import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { LookupIcon } from '../Icons';

const cx = classNames.bind(styles);

function Button(props) {
	return (
		<div className={cx('wrapper')} onClick={props.onPress}>
			<LookupIcon />
			<p>{props.title}</p>
		</div>
	);
}

export default Button;
