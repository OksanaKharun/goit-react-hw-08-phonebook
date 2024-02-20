import { useState, useEffect } from 'react';
import { getCont } from '../../redux/Selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, getContactsThunk } from '../../redux/ContactsThunk';
import css from './ContactForm.css';


const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContactsThunk({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(getCont);

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label >
        Name
        <input
          placeholder="Enter a name"
          
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.Form} >
        Number
        <input
          placeholder="Enter a number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <button className='contact-btn' type="submit">
          Add contact
        </button>
      </label>
    </form>
  );
};

export default ContactForm;