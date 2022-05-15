import React, { useState } from 'react'
import "./AddProduct.css"
import { useHistory } from "react-router-dom"
import axios from 'axios';

const AddProduct = () => {

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const history = useHistory()


  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/product/add", {
      image,
      title,
      price, 
      type
    })
    history.push("/")
  }

  return (
    <div className='add_container'>
     <img src="https://png.pngtree.com/png-vector/20200126/ourlarge/pngtree-woman-receiving-an-order-delivery-service-flat-3d-isometric-illustration-perfect-png-image_2135535.jpg" alt="" />
          <form onSubmit={handleSubmit}>
              <div className="add_input_wrapper">
                  <h1>Add Product</h1>
                  <input value={image} onChange={e => setImage(e.target.value)} type="text" placeholder='Image URL'/>
                  <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Product Name'/>
                  <input value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder='Price'/>
                  <select className='add_select' value={type} onChange={e => setType(e.target.value)}>
                    <option value="">Categoriyani tanlang</option>
                    <option value="narx">Zo'r narx</option>
                    <option value="yangi">Yangi</option>
                    <option value="ommabop">Ommabop</option>
                    <option value="toplam">To'plamlar</option>
                  </select>
                  <button type='submit' className='add_product_btn'>Qo'shish</button>
               </div>
          </form>
        <img src="https://img.freepik.com/vecteurs-libre/illustration-dessin-anime-vecteur-livraison-plat_82574-1720.jpg" alt="" />
    </div>
  )
}

export default AddProduct