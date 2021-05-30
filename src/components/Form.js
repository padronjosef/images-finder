import React, { useState } from "react";
import Error from "./Error";

const Form = ({ setSearch }) => {
  const [tern, setTern] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!tern.trim()) {
      setError(true);
      return;
    }
    setError(false);

    // set the search terns to the principal component
    setSearch(tern);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search a image, ex: futbol or coffee"
            onChange={(e) => setTern(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="search"
          />
        </div>
      </div>
      {error ? <Error message="Write down a tern to search" /> : null}
    </form>
  );
};

export default Form;
