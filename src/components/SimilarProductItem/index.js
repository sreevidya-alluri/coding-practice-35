// Write your code here
import './index.css' // Assuming this is the correct import path

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="similar-product-item">
      <img
        src={imageUrl} // Fixed the src attribute
        className="similar-product-image"
        alt={`similar product ${title}`} // Added closing backtick
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-products-brand">by {brand}</p>{' '}
      {/* Corrected the syntax */}
      <div className="similar-product-price-rating-container">
        <p className="similar-product-price">Rs {price}/-</p>{' '}
        {/* Added closing slash */}
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="similar-product-star"
          />
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
