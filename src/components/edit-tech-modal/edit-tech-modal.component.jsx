import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditTechModal = () => {
    
    // Add our state for hooks
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please your first and last name' });
        } else {
            console.log(firstName, lastName);

            // Clear fields
            setFirstName('');
            setLastName('');
        }
    };
    
    return (
        <div id="edit-tech-modal" className="modal">
            <div className="modal-content">
                <h4>Edit Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="firstName" 
                            value={firstName} 
                            onChange={e => setFirstName(e.target.value)} 
                        />
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="lastName" 
                            value={lastName} 
                            onChange={e => setLastName(e.target.value)} 
                        />
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a 
                    href="#!" 
                    className="modal-close waves-effect waves-light blue btn"
                    onClick={onSubmit}
                >
                        Enter
                </a>
            </div>
        </div>
    )
}


export default EditTechModal;
