import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchImagesListThunk } from '../features/imgs/imgsThunk'; 
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { randomPhotos, status} = useSelector((state) => state.imgs); 

  useEffect(() => {
    dispatch(FetchImagesListThunk());
  }, [dispatch]);

  return (
    <div className="home">
      <h1>Random Photos</h1>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && <p>Error fetching images</p>}
      {status === 'fulfilled' && (
        <div className="photo-gallery">
          {randomPhotos.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;