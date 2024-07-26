import React from 'react';

const EmailInput = ({ value, onChange }) => (
    <div className="form-field">
        <label htmlFor="email" className="input-label">Email Address</label>
        <input type="text" id="email" value={value} onChange={onChange} />
    </div>
);

export default EmailInput;
