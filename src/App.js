import React, { useState, useEffect } from "react";
import Form from "./components/Form";

const App = () => {
  // app state
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (!search) return;

    const consultAPI = async () => {
      const perPage = 30;
      const API_KEY = "21854148-19447da7a8aff2d0360a21421"
      const URL =`https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=${perPage}`

      const response = await fetch(URL)
      const result = await response.json()
      console.log(result.hits)
    }
    consultAPI()

  }, [search]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Images Finder</p>

        <Form setSearch={setSearch} />
      </div>
    </div>
  );
};

export default App;
