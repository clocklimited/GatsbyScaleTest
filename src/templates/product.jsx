import React from 'react'

const Product = ({ pathContext }) =>
  <div>
    <h2>{pathContext.heading}</h2>
    <p>{pathContext.description}</p>
  </div>

export default Product
