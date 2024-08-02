import iconHeart from '../assets/icon_heart.png';
import iconMessage from '../assets/icon_message.png';
import iconDownload from '../assets/icon_download.png';
import { useDispatch } from 'react-redux';
import { addFav } from '../features/favs/favsSlice';

const Card = () => {

  const dispatch = useDispatch();

  const handleFav = () => {
    dispatch(addFav());
  };

  return (
    <div>
      {/* <p>Autor : {autor.name}</p> */}
      {/* <img /> */}
      <img onClick={handleFav} src={iconHeart} alt="Add fav button"/>
      <img src={iconMessage} alt="Send message"/>
      <img src={iconDownload} alt="Download img"/>
    </div>
  );
};

export default Card;
