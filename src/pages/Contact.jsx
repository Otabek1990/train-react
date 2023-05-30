import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';

function Contact() {
  return (
    <div className="p-5">
      <h1>contact</h1>
      <div className="flex gap-5 items-center">
        <NavLink to={'faq'}>Faq</NavLink>
        <NavLink to={'help'}>Help</NavLink>
      </div>
      <hr />
      <Outlet/>
    </div>
  );
}

export default Contact;
