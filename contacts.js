const fs = require('fs');
const path = require('path');

const contactsPath = 'D:/GitHub/node/db/contacts.json'

function listContacts() {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
      const contacts = JSON.parse(data);
        console.table(contacts);
    });
  }

  function getContactById(contactId) {
    fs.readFile(contactsPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
        const contact = JSON.parse(data).find(contact => contact.id === contactId);
          console.table(contact);
      });
     }

    function removeContact(contactId) {
    fs.readFile(contactsPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
        const contactIndex = JSON.parse(data).filter(contact => contact.id !== contactId);
        console.table(contactIndex);
          fs.writeFile('D:/GitHub/node/db/contacts.json', JSON.stringify(contactIndex), 'utf8', (err) => {
            err ? console.error(err) : null;});
      });
      }
  
    function addContact(name, email, phone) {
    fs.readFile(contactsPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const contacts = JSON.parse(data);
      const newContact = { name, email, phone };
      contacts.push(newContact);
      fs.writeFile(contactsPath, JSON.stringify(contacts), 'utf8', (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.table(contacts);
      });
    });
  }
  
  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };  