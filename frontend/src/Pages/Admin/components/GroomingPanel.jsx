import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteDataById, getAllData, patchData, postData } from '../../../Service/requests';
import { AddGroomings,DeleteGrooming, PostGrooming, UpdateGrooming } from '../../../Redux/Slices/groomingSlice';
import { useDispatch, useSelector } from 'react-redux';
import RingLoader from 'react-spinners/RingLoader';

const GroomingPanel = () => {
  const datas = useSelector((state) => state.grooming.arr);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [editModal, setEditModal] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  let price = useRef()
  let name = useRef()
  let about = useRef()



  useEffect(() => {
    getAllData('grooming').then((res) => {
      dispatch(AddGroomings(res));
      setLoading(false);
    });
  }, [dispatch]);

  const handleEdit = (grooming) => {
    setCurrentData(grooming);
    setEditModal(true);
  };

  const handleCloseEdit = () => {
    setEditModal(false);
    setCurrentData(null);
  };

  const handlePost = () => {
    setPostModal(true);
  };

  const handleClosePost = () => {
    setPostModal(false);
  };

  const handleDelete =  (id) => {
    deleteDataById('grooming', id);
    dispatch(DeleteGrooming(id));
  };



  const handleSave = async (id,e) => {
    e.preventDefault()
    let obj ={
      _id: id, 
      package: name.current.value,
      price: price.current.value,
      about: about.current.value.split(','),
  }
  await patchData("grooming",id,obj)
  dispatch(UpdateGrooming(obj))
    handleCloseEdit();
  };

  const handleSavePost = async (e) => {
    e.preventDefault()
    let obj ={
      package: name.current.value,
      price: price.current.value,
      about: about.current.value.split(','),
  }
  await postData("grooming",obj)
  dispatch(PostGrooming(obj))
    handleClosePost();
  };
  return (
    <section id="admin">
      <div className="container">
        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RingLoader color="#f47107" size={100} />
          </div>
        ) : (
          <>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Price</th>
                  <th>About</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {datas &&
                  datas.map((item) => (
                    <tr key={item._id}>
                      <td>{item.package}</td>
                      <td>{item.price} </td>
                      <td> {item.about.map((elem, index) => (
                          <p key={index}>{elem}</p>
                        ))}</td>
                      <td>
                        <FontAwesomeIcon
                          className="edit"
                          onClick={() => handleEdit(item)}
                          icon={faPenToSquare}
                        />
                      </td>
                      <td onClick={() => handleDelete(item._id)}>
                        <FontAwesomeIcon className="trash" icon={faTrash} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button className="post" onClick={handlePost}>
              Post
            </button>
          </>
        )}
      </div>

      {editModal && currentData && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseEdit}>
              &times;
            </span>
            <h3>Edit</h3>
            <div className="infos">
              <div className="info">
                <label htmlFor="name">name</label>
                <input required  ref={name} type="text" id="name" defaultValue={currentData.package} />
              </div>
              <div className="info">
                <label htmlFor="price">Price</label>
                <input required   ref={price} type="number" min={0} id="price" defaultValue={currentData.price} />
              </div>
              <div className="info">
                <label htmlFor="aboutt">About</label>
                <input required   ref={about} type="text" id="aboutt" defaultValue={currentData.about} />
              </div>
              <button className="save" onClick={(e)=>handleSave(currentData._id,e)}>
                Save
              </button>
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
            <h3>Post</h3>
            <div className="infos">
            <div className="info">
                <label htmlFor="name">name</label>
                <input required  ref={name} type="text" id="name"  />
              </div>
              <div className="info">
                <label htmlFor="price">Price</label>
                <input required   ref={price} type="number" min={0} id="price" />
              </div>
              <div className="info">
                <label htmlFor="aboutt">About</label>
                <input required   ref={about} type="text" id="aboutt"  />
              </div>
              <button className="save" onClick={(e)=>handleSavePost(e)}>Save</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GroomingPanel;
