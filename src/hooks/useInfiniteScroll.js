import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage } from "../features/imgs/imgsSlice";
import { FetchImagesListThunk, FetchSearchImagesListThunk } from "../features/imgs/imgsThunk";

const useInfiniteScroll = () => {
  const dispatch = useDispatch();
  const { page, status, searchQuery } = useSelector(
    (state) => state.imgs
  );
  const isSearchMode = searchQuery !== "";

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      status === "fulfilled"
    ) {
      dispatch(incrementPage());

      if(isSearchMode) {
        dispatch(FetchSearchImagesListThunk({ query: searchQuery, page: page + 1}));
      } else {
        dispatch(FetchImagesListThunk({page: page + 1}));
      }
    }
  }, [dispatch, page, status, searchQuery, isSearchMode]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return;
};

export default useInfiniteScroll;