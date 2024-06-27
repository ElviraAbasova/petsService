import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { deleteDataById, getAllData, patchData, postData } from '../../../Service/requests';
import { AddProducts, DeleteProducts, PostProducts, UpdateProducts } from '../../../Redux/Slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import RingLoader from 'react-spinners/RingLoader';
const ProductPanel = () => {
  const datas = useSelector((state) => state.product.arr);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [editModal, setEditModal] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  let price = useRef()
  let title = useRef()
  let discount = useRef()
  let image = useRef()
  let description = useRef()
  let category = useRef()
  let pet = useRef()
  let stock = useRef()
  let tags = useRef()

  useEffect(() => {
    getAllData('products').then((res) => {
      dispatch(AddProducts(res));
      setLoading(false);
    });
  }, [dispatch]);

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setEditModal(true);
  };

  const handleCloseEdit = () => {
    setEditModal(false);
    setCurrentProduct(null);
  };

  const handlePost = () => {
    setPostModal(true);
  };

  const handleClosePost = () => {
    setPostModal(false);
  };

  const handleDelete =  (id) => {
    deleteDataById('products', id);
    dispatch(DeleteProducts(id));
  };



  const handleSave = async (id,e) => {
    e.preventDefault()
    let obj ={
      _id: id, 
      title: title.current.value,
      image: image.current.value,
      price: price.current.value,
      description: description.current.value,
      discount: discount.current.value,
      category: category.current.value,
      pet: pet.current.value,
      tags: tags.current.value.split(','),
      stock: stock.current.value,

  }
  await patchData("products",id,obj)
  dispatch(UpdateProducts(obj))
    handleCloseEdit();
  };

  const handleSavePost = async (e) => {
    e.preventDefault()
    
    let obj ={
      title: title.current.value,
      image: image.current.value,
      price: price.current.value,
      description: description.current.value,
      discount: discount.current.value,
      category: category.current.value,
      pet: pet.current.value,
      tags: tags.current.value.split(','),
      stock: stock.current.value,
      seller:0,
      comments:[],
      rating:0

  }
  await postData("products",obj)
  dispatch(PostProducts(obj))
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
                  <th>Product</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Pet</th>
                  <th>Tags</th>
                  <th>Stock</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {datas &&
                  datas.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <img src={item.image} alt={item.title} className="table-image" />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price} $</td>
                      <td>{item.discount}</td>
                      <td>{item.description}</td>
                      <td>{item.category}</td>
                      <td>{item.pet}</td>
                      <td>
                        {item.tags.map((tag, index) => (
                          <p key={index}>{tag}</p>
                        ))}
                      </td>
                      <td>{item.stock}</td>
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

      {editModal && currentProduct && (
        <div className="modal">
          <div className="modal-content">
            <div className="title">
            <FontAwesomeIcon className="close" onClick={handleCloseEdit} icon={faX} />
           
           <h3>Edit</h3>
            </div>
      
            <form onSubmit={(e)=>handleSave(currentProduct._id,e)} className="infos">
              <div className="info">
                <label htmlFor="image">Image</label>
                <input required ref={image} type="text" id="image" defaultValue={currentProduct.image} />
              </div>
              <div className="info">
                <label htmlFor="title">Title</label>
                <input required  ref={title} type="text" id="title" defaultValue={currentProduct.title} />
              </div>
              <div className="info">
                <label htmlFor="price">Price</label>
                <input required   ref={price} type="number" min="0" id="price" defaultValue={currentProduct.price} />
              </div>
              <div className="info">
                <label htmlFor="discount">Discount</label>
                <input  ref={discount} type="number" min="0" id="discount" defaultValue={currentProduct.discount}  />
              </div>
              <div className="info">
                <label htmlFor="description">Description</label>
                <input required  ref={description} type="text" id="description" defaultValue={currentProduct.description} />
              </div>
              <div className="info">
                <label htmlFor="category">Category</label>
                <input required  ref={category} type="text" id="category" defaultValue={currentProduct.category} />
              </div>
              <div className="info">
                <label htmlFor="pet">Pet</label>
                <input required  ref={pet} type="text" id="pet" defaultValue={currentProduct.pet}  />
              </div>
              <div className="info">
                <label htmlFor="tags">Tags</label>
                <input required  ref={tags} type="text"  id="tags" defaultValue={currentProduct.tags}  />
              </div>
              <div className="info">
                <label htmlFor="stock">Stock</label>
                <input required  ref={stock} type="number" min="0" id="stock" defaultValue={currentProduct.stock}  />
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
          <div className="title">
            <FontAwesomeIcon className="close" onClick={handleClosePost} icon={faX} />
           
           <h3>Edit</h3>
            </div>
            <form onSubmit={(e)=>handleSavePost(e)} className="infos">
            <div className="info">
                <label htmlFor="image">Image</label>
                <input required  ref={image} type="text" id="image" />
              </div>
              <div className="info">
                <label htmlFor="title">Title</label>
                <input required  ref={title} type="text" id="title" />
              </div>
              <div className="info">
                <label htmlFor="price">Price</label>
                <input required  ref={price} type="number" min="0" id="price"  />
              </div>
              <div className="info">
                <label htmlFor="discount">Discount</label>
                <input required  ref={discount} type="number" min="0" id="discount"  />
              </div>
              <div className="info">
                <label htmlFor="description">Description</label>
                <input required  ref={description} type="text" id="description" />
              </div>
              <div className="info">
                <label htmlFor="category">Category</label>
                <input required  ref={category} type="text" id="category"/>
              </div>
              <div className="info">
                <label htmlFor="pet">Pet</label>
                <input required  ref={pet} type="text" id="pet" />
              </div>
              <div className="info">
                <label htmlFor="tags">Tags</label>
                <input required  ref={tags} type="text" id="tags"  />
              </div>
              <div className="info">
                <label htmlFor="stock">Stock</label>
                <input required  ref={stock} type="number" min="0" id="stock"/>
              </div>
              <button className="save" >Save</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPanel;
