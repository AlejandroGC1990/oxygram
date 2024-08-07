import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchImagesListThunk } from '../features/imgs/imgsThunk'; 
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { randomPhotos, searchPhotos, status, error } = useSelector((state) => state.imgs); 

  useEffect(() => {
    dispatch(FetchImagesListThunk(10));
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  const imagesToDisplay = searchPhotos.length > 0 ? searchPhotos : randomPhotos;

  return (
    <div className="home">
      {imagesToDisplay.length === 0 ? (
        <p>No images found.</p>
      ) : (
        <div className="cards-container">
          {imagesToDisplay.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
