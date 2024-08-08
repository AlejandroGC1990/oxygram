import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchImagesListThunk } from '../features/imgs/imgsThunk'; 

const Search = () => {
  const dispatch = useDispatch();
  const { searchPhotos, status} = useSelector((state) => state.imgs); 

  useEffect(() => {
    dispatch(FetchImagesListThunk());
  }, [dispatch]);

  console.log('Status:', status);
  console.log('Search Photos:', searchPhotos);

  return (
    <div className="search">
      <h1>Search Photos</h1>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && <p>Error fetching images</p>}
      {status === 'fulfilled' && (
        <div className="photo-searchGallery">
          {searchPhotos.map((image) => (
            <img key={image.id} src={image.url.thumb} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
