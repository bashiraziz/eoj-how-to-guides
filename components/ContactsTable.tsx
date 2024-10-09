// components/ContactsTable.tsx
import React from 'react';

interface Contact {
  name: string;
  email: string;
  phone: string;
  contactType: string;
  messageType: string;
}

const contacts: Contact[] = [
  {
    name: "Hira Khan Irfan",
    email: "taecrew@taecrewstreams.com",
    phone: "+843466478848",
    contactType: "Fahad",
    messageType: "Ms. Jean"
  }
  // Add more contacts as needed
];

const ContactsTable = () => {
  return (
    <div style={styles.tableWrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Contact Type</th>
            <th>Message Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.contactType}</td>
              <td>{contact.messageType}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  tableWrapper: {
    marginLeft: '270px',
    padding: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    border: '1px solid #ccc',
  },
  th: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    border: '1px solid #ccc',
  },
};

export default ContactsTable;
