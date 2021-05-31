import React from "react";
import Image from "./Image";
import PropTypes from "prop-types";

const Gallery = ({ images }) => {
  return (
    <div className="col-12 p-2 row">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
