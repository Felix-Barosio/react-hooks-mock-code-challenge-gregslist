import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ productListings, handleListingDelete, handleListingSort }) {

  const newListings = productListings.map((data) =>
    <ListingCard key={data.id} item={data} onDeleteItem={handleListingDelete} />
  )
  return (
    <main>
      <button onClick={handleListingSort}>Sort Listings</button>
      <ul className="cards">
        {newListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
