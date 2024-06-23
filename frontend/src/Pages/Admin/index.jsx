import React, { useState } from 'react';
import './admin.scss';
import ProductPanel from './components/ProductPanel';
import UserPanel from './components/UserPanel';
import VeterinarPanel from './components/VeterinarPanel';
import GroomerPanel from './components/GroomerPanel';
import GroomingPanel from './components/GroomingPanel';

const Admin = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);

  return (
    <section id='select'>
      <div className="container">
        <div className="title">
          <h3>Admin Panel</h3>
        </div>
        <div className="buttons">
          <button className='button' onClick={() => setSelectedPanel('products')}>Products</button>
          <button className='button' onClick={() => setSelectedPanel('users')}>Users</button>
          <button className='button' onClick={() => setSelectedPanel('veterinars')}>Veterinars</button>
          <button className='button' onClick={() => setSelectedPanel('groomers')}>Groomers</button>
          <button className='button' onClick={() => setSelectedPanel('grooming')}>Grooming Prices</button>
        </div>
        <div className="panel">
          {selectedPanel === 'products' && <ProductPanel />}
          {selectedPanel === 'users' && <UserPanel />}
          {selectedPanel === 'veterinars' && <VeterinarPanel />}
          {selectedPanel === 'groomers' && <GroomerPanel />}
          {selectedPanel === 'grooming' && <GroomingPanel/>}



        </div>
      </div>
    </section>
  );
};

export default Admin;
