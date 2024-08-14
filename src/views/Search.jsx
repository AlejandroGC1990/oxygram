import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSearchImagesListThunk } from "../features/imgs/imgsThunk";
import {useParams} from "react-router-dom";
import Modal from "../components/ModalCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("nature");
  const [selectedImg, setSelectedImg] = useState(null);
  const dispatch = useDispatch();
  const { searchPhotos, status } = useSelector((state) => state.imgs);
  const defaultQuery = "nature";
  const { tag } = useParams(); 

  useEffect(() => {
    if (tag) {
      setQuery(tag);
      setSearchQuery(tag);
    } else if (searchQuery) {
      dispatch(FetchSearchImagesListThunk(searchQuery));
    }
  }, [tag, searchQuery, dispatch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearchClick = () => {
    setSearchQuery(query);
    console.log(query);
  };

  useEffect(() => {
    if (searchQuery !== "") {
      dispatch(FetchSearchImagesListThunk(searchQuery  || defaultQuery));
    }
  }, [searchQuery, dispatch]);

  const openModal = (image) => {
    setSelectedImg(image);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  console.log("Status:", status);
  console.log("Search Photos:", searchPhotos);

  return (
    <div className="search">
      <h1>Search Photos</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for photos..."
      />
      <button onClick={handleSearchClick}>Search</button>
      {status === "pending" && <p>Loading...</p>}
      {status === "rejected" && <p>Error fetching images</p>}
      {status === "fulfilled" && (
        <div>
          {searchPhotos.map((image) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => openModal(image)}
            />
          ))}
        </div>
      )}
      {selectedImg && (
        <Modal image={selectedImg} onClose={closeModal} />
      )}
    </div>
  );
};

export default Search;
