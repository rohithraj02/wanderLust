import React from 'react';

const PasswordInput = ({ value, onChange }) => (
    <div className="form-field">
        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" id="password" value={value} onChange={onChange} />
    </div>
);

export default PasswordInput;
