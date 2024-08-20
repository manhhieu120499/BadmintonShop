import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '../../../components/Icons/Icon';
const cx = classNames.bind(styles);

function Search() {
	return (
		<div className={cx('wrapper')}>
			<input placeholder="Tìm kiếm sản phẩm..." />
			<SearchIcon />
		</div>
	);
}

export default Search;
