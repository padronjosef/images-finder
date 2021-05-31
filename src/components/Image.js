import React from "react";
import { AiFillHeart, AiFillLike, AiFillTags } from "react-icons/ai";
import PropTypes from "prop-types";

const Image = ({ image }) => {
  const {
    largeImageURL,
    likes,
    previewURL,
    tags,
    views,
    imageHeight,
    imageWidth,
  } = image;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img
          src={previewURL}
          alt={tags}
          className="card-img-top"
          style={{ maxHeight: "100px", objectFit: "cover" }}
        />
        <div className="card-body p-3">
          <p className="card-text mb-2">
            <AiFillHeart /> {likes}
          </p>
          <p className="card-text mb-2">
            <AiFillLike /> {views}
          </p>
          <p className="card-text mb-3">
            <AiFillTags /> {tags}
          </p>
          <p className="card-text">
            Resolution: {imageHeight} x {imageWidth}
          </p>
        </div>
        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="nooponer noreferrer"
            className="btn btn-primary btn-block"
          >
            View Image
          </a>
        </div>
      </div>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    previewURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  }),
};

export default Image;
