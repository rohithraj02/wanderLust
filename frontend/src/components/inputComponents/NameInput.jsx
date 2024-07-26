import React from 'react';

const NameInput = ({ value, onChange }) => (
    <div className="form-field">
        <label htmlFor="name" className="input-label">Name</label>
        <input type="text" id="name" value={value} onChange={onChange} />
    </div>
);

export default NameInput;
