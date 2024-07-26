// NavLink.js
import React from 'react';

const NavLink = ({ href, children }) => {
  return (
    <li><a href={href}>{children}</a></li>
  );
}

export default NavLink;
