import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div className="contact-list">
      <SearchBox className="search-box"/>
      <div>
        num: {filteredList.length}
        {filteredList.map((item, index) => (
            <ContactItem item={item} key={index} className="contact-item"/>
        ))}
      </div>      
    </div>
  );
}

export default ContactList;
