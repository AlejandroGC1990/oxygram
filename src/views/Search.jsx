import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSearchImagesListThunk } from "../features/imgs/imgsThunk";
import Dashboard from "../components/Dashboard";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { searchImages, status } = useSelector((state) => state.imgs);

  const handleSearch = () => {
    dispatch(FetchSearchImagesListThunk(query));
  };

  return (
    <div className="search">
      <h1>Search Photos</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {status === "pending" && <p>Loading...</p>}
      {status === "rejected" && <p>Error fetching images</p>}
      {status === "fulfilled" && <Dashboard images={searchImages} />}
    </div>
  );
};

export default Search;
