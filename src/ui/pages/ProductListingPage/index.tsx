import {useLocation} from "@tanstack/react-router";

export default function ProductListingPage() {
  const location = useLocation();

  return (
    <div className="product-listing-container">
      <h1>Product Listing Page!</h1>
      <h3>Pathname: {location.pathname} </h3>
    </div>
  )
}