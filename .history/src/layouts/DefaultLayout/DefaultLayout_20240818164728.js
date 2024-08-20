import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	return (
		<div className={cx('container')}>
			<Header />
			{children}
		</div>
	);
}

export default DefaultLayout;
