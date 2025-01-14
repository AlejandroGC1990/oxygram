import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage } from "../features/randomPhotos/randomPhotoSlice";
import {
  FetchImagesListThunk,
  FetchSearchImagesListThunk,
} from "../features/randomPhotos/randomPhotoThunk";
import { FetchLatestImagesListThunk } from "../features/newPhotos/newPhotosThunk";

const useInfiniteScroll = () => {
  const dispatch = useDispatch();
  const { page, status, searchQuery } = useSelector((state) => state.imgs);
  const isSearchMode = searchQuery !== "";
  const islastestPhotosMode = useSelector((state) => state.newPhotos.status === 'fulfilled');

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      status === "fulfilled"
    ) {
      setScrollPosition(document.documentElement.scrollTop);
      dispatch(incrementPage());

      if (isSearchMode) {
        dispatch(
          FetchSearchImagesListThunk({ query: searchQuery, page: page + 1 })
        );
      } else if (!isSearchMode && !islastestPhotosMode){
        dispatch(FetchImagesListThunk({ page: page + 1 }));
      } else if (islastestPhotosMode){
        dispatch(FetchLatestImagesListThunk({page: page + 1, perPage: 10}));
      }
    }
  }, [dispatch, page, status, searchQuery, isSearchMode, islastestPhotosMode]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (scrollPosition !== 0 && status === "fulfilled") {
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  }, [scrollPosition, status]);

  return null;
};

export default useInfiniteScroll;
