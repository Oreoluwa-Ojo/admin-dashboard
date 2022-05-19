import Sidebar from "./sidebar2";
import './product.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Products() {

    const [products, setProducts] = useState([])

    const url = 'https://fakerapi.it/api/v1/products?_quantity=6';

    useEffect(() => {
        axios.get(url)
        .then(response => setProducts(response.data.data) )
  }, [])

     
    return<>
        <h1 className="pro">Our Products</h1>
        
        <div className='product'>
        
{
  products ? products.map((product, idx )=> (
    <div key={idx} className='product-card'>

      <div className='product-card-image'>
        <img src={product.image} alt="icon" />
      </div>

      <div className="text">
        <h4> {product.name} </h4>
        <p> {product.net_price}</p>
        <p> { product.taxes} </p>
        <p> {product.price}</p>
      </div>

  </div>

  ) )
  : null
}



<Sidebar/>

</div>

    
    </>
}

export default Products;