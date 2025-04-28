import { useSelector, useDispatch } from 'react-redux';
import { setSearchFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const textFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilter = event => dispatch(setSearchFilter(event.target.value));

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={textFilter}
        onChange={handleFilter}
      />
    </div>
  );
}
