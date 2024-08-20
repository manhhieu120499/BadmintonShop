import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '../../../components/Icons/Icon';
const cx = classNames.bind(styles);

function Search() {
	return (
		<div className={cx('wrapper')}>
			<input
				placeholder="Tìm sản phẩm..."
				className={cx('search-input')}
			/>
			<SearchIcon />
		</div>
	);
}

export default Search;
