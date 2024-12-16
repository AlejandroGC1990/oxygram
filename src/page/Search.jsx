import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchSearchImagesListThunk,
  FetchImagesListThunk,
} from "../features/randomPhotos/randomPhotoThunk";
import { useParams } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import "../styles/Page/_search.scss";
import { CiSearch } from "react-icons/ci";
import Masonry from "react-masonry-css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const dispatch = useDispatch();
  const { searchPhotos, randomPhotos, status } = useSelector(
    (state) => state.imgs
  );
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
      dispatch({ type: "imgs/resetSearchResults" });
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
      <div className="search__input">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for photos..."
        />
        <button onClick={handleSearchClick}>
          <CiSearch color="white" />
        </button>
      </div>
      {status === "pending" && <p>Loading...</p>}
      {status === "rejected" && <p>Error fetching images</p>}
      {status === "fulfilled" && (
        // <div className="search__photo-gallery">
        //   {(query === "" ? randomPhotos : searchPhotos).map((image) => (
        //     <img
        //       key={image.id}
        //       src={image.urls.small}
        //       alt={image.alt_description}
        //       onClick={() => openCommentModal(image)}
        //     />
        //   ))}
        // </div>
        <Masonry
          breakpointCols={{
            default: 4,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="search__photo-gallery"
          columnClassName="search__photo-gallery-column"
        >
          {(query === "" ? randomPhotos : searchPhotos).map((image) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => openCommentModal(image)}
            />
          ))}
        </Masonry>
      )}
      {selectedImg && (
        <ModalCard image={selectedImg} onClose={closeCommentModal} />
      )}
    </div>
  );
};

export default Search;
