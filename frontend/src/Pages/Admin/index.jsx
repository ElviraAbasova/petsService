import React, { useState } from 'react'
import "./admin.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
const Admin = () => {
    const data = [
        { imgSrc: 'https://thumbs.dreamstime.com/b/people-person-fun-joy-funny-facial-expression-concept-close-up-phoyo-portrait-charming-glad-gorgeous-nice-cute-lovely-lady-272795823.jpg', title: 'TItle', desc: '1', price: 2, count:3 },
        { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEi0GhRAG3aEiQjCY0G1euMm1FfB7XZzLi3bSZXtaav5HuWCmwFZvB4aqgn8mwnmUNlWs&usqp=CAU', title: 'TItle', desc: '1', price: 2, count:3 },
        { imgSrc: 'https://thumbs.dreamstime.com/b/people-person-fun-joy-funny-facial-expression-concept-close-up-phoyo-portrait-charming-glad-gorgeous-nice-cute-lovely-lady-272795823.jpg', title: 'TItle', desc: '1', price: 2, count:3 },

      ];

      const [editModal, setEditModal] = useState(false)
      const [postModal, setPostModal] = useState(false)

      const handleEdit = ()=>{
        setEditModal(true)
      }
      const handleCloseEdit = ()=>{
        setEditModal(false)
      }
      const handlePost = ()=>{
        setPostModal(true)
      }
      const handleClosePost = ()=>{
        setPostModal(false)
      }
  return (
    <section id="admin">
        <div className="container">
        <table className="custom-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Price</th>
          <th>Desc</th>
          <th>Count</th>
          <th>Edit</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td><img src={item.imgSrc} alt={item.title} className="table-image" /></td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.count}</td>
            <td><FontAwesomeIcon className='edit' onClick={handleEdit} icon={faPenToSquare} /></td>
            <td><FontAwesomeIcon className='trash' icon={faTrash} /></td>

          </tr>
        ))}
      </tbody>
    </table>
    <button className="post" onClick={handlePost}>Post</button>
        </div>

        {editModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseEdit}>
              &times;
            </span>
            <h3>Edit</h3>
            <div className="infos">
            <div className="info">
              <label htmlFor="image">Image</label>
              <input  defaultValue="Elvira" type="text" id="image"  />
            </div>
            <div className="info">
              <label htmlFor="title">Title</label>
              <input defaultValue="Abasova" type="text" id="title"/>
            </div>
            <div className="info">
              <label htmlFor="description">Username</label>
              <input defaultValue="elviraa" type="text" id="description"  />
            </div>
            <div className="info">
              <label htmlFor="price">Price</label>
              <input
                defaultValue={1}
                type="number"
                id="price"
             
              />
            </div>
         
            <button className="save">Save</button>
            </div>
           
 
          </div>
        </div>
      )}
         {postModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClosePost}>
              &times;
            </span>
            <h3>Edit</h3>
            <div className="infos">
            <div className="info">
              <label htmlFor="image">Image</label>
              <input  defaultValue="Elvira" type="text" id="image"  />
            </div>
            <div className="info">
              <label htmlFor="title">Title</label>
              <input defaultValue="Abasova" type="text" id="title"/>
            </div>
            <div className="info">
              <label htmlFor="description">Username</label>
              <input defaultValue="elviraa" type="text" id="description"  />
            </div>
            <div className="info">
              <label htmlFor="price">Price</label>
              <input
                defaultValue={1}
                type="number"
                id="price"
             
              />
            </div>
         
            <button className="save">Save</button>
            </div>
           
 
          </div>
        </div>
      )}
    </section>
   
  )
}

export default Admin