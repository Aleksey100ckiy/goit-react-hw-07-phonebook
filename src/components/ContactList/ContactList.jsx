import React from "react";

const ContactList = ({ contactsList, onDelete }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>{contactsList.map(cont => (<li key={cont.id}>{cont.name} : {cont.phone } <button onClick={() => onDelete(cont.id)} type="button">Delete</button></li>)
                )}
            </ul>
        </div>
        
        
    )
};

export default ContactList;
