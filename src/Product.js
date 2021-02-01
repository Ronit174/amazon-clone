import React from 'react'; 
import './Product.css';
import { useStateValue } from './Stateprovider';

function Product({ id, title, image , price, rating}) {

const [state, dispatch] = useStateValue();    

const addToBasket = () => {
  //dispatch the item on the data layer
  dispatch({
      type: 'ADD TO BASKET',
      item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
      },
  });
};
     
    return (
        <div className="product">
            <div className="product_info">
                <p> {title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                     <p>🌟 </p>
                    ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
