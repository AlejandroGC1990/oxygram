import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect } from "react";
import { FetchImagesListThunk } from "../features/imgs/imgsThunk";

const Home = () => {
  const dispatch = useDispatch();
  const { randomPhotos = [], status, error } = useSelector((state) => state.imgs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(FetchImagesListThunk());
    }
  }, [dispatch, status]);

  if (status === "pending") return <p>Loading...</p>;
  if (status === "rejected") return <p>{error.message}</p>;

  return (
    <div>
      {randomPhotos.length === 0 ? (
        <p>No images available</p>
      ) : (
        randomPhotos.map((image) => <Card key={image.id} image={image} />)
      )}
    </div>
  );
};

export default Home;
