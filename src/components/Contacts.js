

import React from 'react';
import { ContactsData } from './ContactsData';

const Contacts = ({onselectContact}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-md ">
      {ContactsData.map(contact => (
        <div onClick={()=>{onselectContact(contact)}} key={contact.id} className="flex items-center mb-4 bg-white p-3 rounded-lg shadow-sm">
          <img 
            className="w-12 h-12 rounded-full mr-4 object-cover" 
            src={contact.img} 
            alt={contact.name} 
          />
          <div className="flex-grow cursor-pointer">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-gray-800">{contact.name}</h3>
              <span className="text-xs text-gray-500">{contact.time}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{contact.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;



