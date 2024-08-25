import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage } from "../features/imgs/imgsSlice";
import { FetchImagesListThunk, FetchSearchImagesListThunk } from "../features/imgs/imgsThunk";

// const useInfiniteScroll = () => {
//   const dispatch = useDispatch();
//   const { page, status, searchQuery } = useSelector(
//     (state) => state.imgs
//   );
//   const isSearchMode = searchQuery !== "";

//   const handleScroll = useCallback(() => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop >=
//         document.documentElement.offsetHeight - 100 &&
//       status === "fulfilled"
//     ) {
//       dispatch(incrementPage());

//       if(isSearchMode) {
//         dispatch(FetchSearchImagesListThunk({ query: searchQuery, page: page + 1}));
//       } else {
//         dispatch(FetchImagesListThunk({page: page + 1}));
//       }
//     }
//   }, [dispatch, page, status, searchQuery, isSearchMode]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   return;
// };

const useInfiniteScroll = () => {
  const dispatch = useDispatch();
  const { page, status, searchQuery } = useSelector((state) => state.imgs);
  const isSearchMode = searchQuery !== "";

  const [scrollPosition, setScrollPosition] = useState(0); // Estado para guardar la posición del scroll

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      status === "fulfilled"
    ) {
      setScrollPosition(document.documentElement.scrollTop); // Guardar la posición actual del scroll antes de cargar más imágenes
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

  // Restaurar la posición del scroll después de cargar más imágenes
 useEffect(() => {
  const scrollDifference = document.documentElement.scrollTop - scrollPosition;
  window.scrollBy({ top: scrollDifference, behavior: 'smooth' });
}, [scrollPosition]);

  return;
};

export default useInfiniteScroll;