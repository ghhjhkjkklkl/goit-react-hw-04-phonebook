import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ inputValue, onChange }) {
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className={css.filter__input}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
