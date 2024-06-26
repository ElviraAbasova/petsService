import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteDataById, getAllData, patchData, postData } from '../../../Service/requests';
import { AddGroomers,DeleteGroomer, PostGroomer, UpdateGroomer } from '../../../Redux/Slices/groomerSlice';
import { useDispatch, useSelector } from 'react-redux';
import RingLoader from 'react-spinners/RingLoader';

const GroomerPanel = () => {
  const datas = useSelector((state) => state.groomer.arr);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [editModal, setEditModal] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  let name = useRef()
  let surname = useRef()
  let image = useRef()
  let about = useRef()
  let facebook = useRef()
  let instagram = useRef()
  let twitter = useRef()


  useEffect(() => {
    getAllData('groomers').then((res) => {
      dispatch(AddGroomers(res));
      setLoading(false);
    });
  }, [dispatch]);

  const handleEdit = (groomer) => {
    setCurrentData(groomer);
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
    deleteDataById('groomers', id);
    dispatch(DeleteGroomer(id));
  };



  const handleSave = async (id,e) => {
    e.preventDefault()
    let obj ={
      _id: id, 
      name: name.current.value,
      surname: surname.current.value,
      image: image.current.value,
      about: about.current.value,
      facebook: facebook.current.value,
      instagram: instagram.current.value,
      twitter: twitter.current.value,
  }
  await patchData("groomers",id,obj)
  dispatch(UpdateGroomer(obj))
    handleCloseEdit();
  };

  const handleSavePost = async (e) => {
    e.preventDefault()
    let obj ={
      name: name.current.value,
      surname: surname.current.value,
      image: image.current.value,
      about: about.current.value,
      facebook: facebook.current.value,
      instagram: instagram.current.value,
      twitter: twitter.current.value,
      randevus:[],
  }
  await postData("groomers",obj)
  dispatch(PostGroomer(obj))
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
                  <th>Groomer</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>About</th>
                  <th>Facebook</th>
                  <th>Instagram</th>
                  <th>Twitter</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {datas &&
                  datas.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <img src={item.image} alt={item.name} className="table-image" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.surname} </td>
                      <td>{item.about} </td>
                      <td>{item.facebook}</td>
                      <td>{item.instagram}</td>
                      <td>{item.twitter}</td>
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
            <form onSubmit={(e)=>handleSave(currentData._id,e)} className="infos">
              <div className="info">
                <label htmlFor="image">Image</label>
                <input required ref={image} type="text" id="image" defaultValue={currentData.image} />
              </div>
              <div className="info">
                <label htmlFor="name">Name</label>
                <input required  ref={name} type="text" id="name" defaultValue={currentData.name} />
              </div>
              <div className="info">
                <label htmlFor="surname">Surname</label>
                <input required   ref={surname} type="text" id="surname" defaultValue={currentData.surname} />
              </div>
              <div className="info">
                <label htmlFor="aboutt">About</label>
                <input required   ref={about} type="text" id="aboutt" defaultValue={currentData.about} />
              </div>
              <div className="info">
                <label htmlFor="facebook">Facebook</label>
                <input  ref={facebook} type="text" id="facebook" defaultValue={currentData.facebook}  />
              </div>
              <div className="info">
                <label htmlFor="instagram">Instagram</label>
                <input required  ref={instagram} type="text" id="instagram" defaultValue={currentData.instagram} />
              </div>
              <div className="info">
                <label htmlFor="twitter">Twitter</label>
                <input required  ref={twitter} type="text" id="twitter" defaultValue={currentData.twitter} />
              </div>
              <button className="save" >
                Save
              </button>
            </form>
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
            <form onSubmit={(e)=>handleSavePost(e)} className="infos">
            <div className="info">
                <label htmlFor="image">Image</label>
                <input required ref={image} type="text" id="image"  />
              </div>
              <div className="info">
                <label htmlFor="name">Name</label>
                <input required  ref={name} type="text" id="name" />
              </div>
              <div className="info">
                <label htmlFor="surname">Surname</label>
                <input required   ref={surname} type="text" id="surname" />
              </div>
              <div className="info">
                <label htmlFor="aboutt">About</label>
                <input required   ref={about} type="text" id="aboutt" />
              </div>
              <div className="info">
                <label htmlFor="facebook">Facebook</label>
                <input  ref={facebook} type="text" id="facebook"  />
              </div>
              <div className="info">
                <label htmlFor="instagram">Instagram</label>
                <input required  ref={instagram} type="text" id="instagram" />
              </div>
              <div className="info">
                <label htmlFor="twitter">Twitter</label>
                <input required  ref={twitter} type="text" id="twitter"/>
              </div>
              <button className="save" >Save</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default GroomerPanel;
