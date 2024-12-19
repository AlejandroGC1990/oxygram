import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchLatestImagesListThunk } from "../features/newPhotos/newPhotosThunk";
import Card from "../components/Card";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import "../styles/Page/_home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { lastestPhotos, status } = useSelector((state) => state.newPhotos);

  useEffect(() => {
    console.log("HOME - Latest photos:", lastestPhotos);
    if (!Array.isArray(lastestPhotos) || lastestPhotos.length === 0) {
      dispatch(FetchLatestImagesListThunk({ page: 1 }));
    }
  }, [dispatch, lastestPhotos]);

  useInfiniteScroll();

  return (
    <div className="home">
      <h1>For you</h1>
      {status === "pending" && <p>Loading...</p>}
      {status === "rejected" && <p>Error fetching images</p>}
      {/* {status === "fulfilled" && ( */}
      <div className="home__photo-gallery">
        {Array.isArray(lastestPhotos) && lastestPhotos.length > 0 ? (
          lastestPhotos.map((image) => <Card key={image.id} image={image} />)
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
