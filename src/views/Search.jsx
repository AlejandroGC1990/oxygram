import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSearchImagesListThunk, FetchImagesListThunk } from "../features/imgs/imgsThunk";
import { useParams } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Search = () => {
  const [query, setQuery] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const dispatch = useDispatch();
  const { searchPhotos, randomPhotos, status } = useSelector((state) => state.imgs);
  const { tag } = useParams();

  useInfiniteScroll();

  useEffect(() => {
    if (tag) {
      setQuery(tag);
      dispatch(FetchSearchImagesListThunk({ query: tag }));
    } else if (query === "") {
      dispatch(FetchImagesListThunk({ page: 1, perPage: 10 }));
    } else {
      dispatch(FetchSearchImagesListThunk({ query }));
    }
  }, [tag, query, dispatch]);

  useEffect(() => {
    return () => {
      // Limpia el valor del input
      dispatch({ type: 'imgs/resetSearchResults' }); 
    };
  }, [dispatch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(FetchSearchImagesListThunk({ query }));
  };

  const openCommentModal = (image) => {
    setSelectedImg(image);
  };

  const closeCommentModal = () => {
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
          {(query === "" ? randomPhotos : searchPhotos).map((image) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => openCommentModal(image)}
            />
          ))}
        </div>
      )}
      {selectedImg && (
        <ModalCard image={selectedImg} onClose={closeCommentModal} />
      )}
    </div>
  );
};

export default Search;
