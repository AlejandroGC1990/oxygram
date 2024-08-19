import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSearchImagesListThunk, FetchImagesListThunk } from "../features/imgs/imgsThunk";
import { useParams } from "react-router-dom";
import Modal from "../components/ModalCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Search = () => {
  const [query, setQuery] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const dispatch = useDispatch();
  const { searchPhotos, status } = useSelector((state) => state.imgs);
  const { tag } = useParams();

  useInfiniteScroll();

  useEffect(() => {
    if (tag) {
      setQuery(tag);
      dispatch(FetchSearchImagesListThunk({ query: tag }));
    } else if (query === "") {
      dispatch(FetchImagesListThunk());
    } else {
      dispatch(FetchSearchImagesListThunk({ query }));
    }
  }, [tag, query, dispatch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(FetchSearchImagesListThunk({ query }));
  };

  const openModal = (image) => {
    setSelectedImg(image);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

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
