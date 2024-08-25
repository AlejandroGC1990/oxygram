import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage } from "../features/imgs/imgsSlice";
import {
  FetchImagesListThunk,
  FetchSearchImagesListThunk,
} from "../features/imgs/imgsThunk";

const useInfiniteScroll = () => {
  const dispatch = useDispatch();
  const { page, status, searchQuery } = useSelector((state) => state.imgs);
  const isSearchMode = searchQuery !== "";

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
      } else {
        dispatch(FetchImagesListThunk({ page: page + 1 }));
      }
    }
  }, [dispatch, page, status, searchQuery, isSearchMode]);

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
