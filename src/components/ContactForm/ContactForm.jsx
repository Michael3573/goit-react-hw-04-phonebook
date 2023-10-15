import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.form}
        type="text"
        name="name"
        placeholder="   Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className={styles.form}
        type="tel"
        name="number"
        placeholder="   Phone Number"
        value={number}
        onChange={handleNumberChange}
      />
      <button className={styles['add-btn']} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
