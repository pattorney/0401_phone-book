import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div className="contact-list">
      <SearchBox className="search-box"/>
      {contactList.map((item, index) => (
      <ContactItem item={item} key={index} className="contact-item"/>
      ))}      
    </div>
  );
}

export default ContactList;