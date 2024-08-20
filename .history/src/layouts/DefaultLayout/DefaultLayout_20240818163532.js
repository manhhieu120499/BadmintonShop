import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	return <div className={cx('container')}>{children}</div>;
}

export default DefaultLayout;
