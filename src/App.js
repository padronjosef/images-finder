import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Pagination from "./components/Pagination";

const App = () => {
  // app state
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  useEffect(() => {
    if (!search) return;

    const consultAPI = async () => {
      const perPage = 30;
      const API_KEY = "21854148-19447da7a8aff2d0360a21421";
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=${perPage}&page=${actualPage}`;

      const response = await fetch(URL);
      const result = await response.json();

      setImages(result.hits);

      // calculate the total pages
      const totalPagesToCalculate = Math.ceil(result.totalHits / perPage);
      setTotalPage(totalPagesToCalculate);
    };
    consultAPI();

    // move to the top when click on next/previo buttons
    const jumbotron = document.querySelector(".jumbotron");
    jumbotron.scrollIntoView({ behavior: "smooth" });
  }, [search, actualPage]);

  return (
    <div className="container">
      <div className="jumbotron">
        <h2 className="text-center text-uppercase mb-4">Images Finder</h2>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <Gallery images={images} />
        <Pagination
          search={search}
          actualPage={actualPage}
          setActualPage={setActualPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default App;
