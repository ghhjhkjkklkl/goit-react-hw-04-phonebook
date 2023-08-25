import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInputName = e => {
    setName(e.target.value);
  };

  const onChangeInputNumber = e => {
    setNumber(e.target.value);
  };

  const onFormBtnClick = e => {
    e.preventDefault();
    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onFormBtnClick} className={css.form}>
      <label className={css.form_label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          onChange={onChangeInputName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.form_label}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          onChange={onChangeInputNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
