import { useSelector } from "react-redux";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Profile = () => {
  const { favs } = useSelector((state) => state.favs);

  console.log(favs);
  return (
    <div>
      <h1>PROFILE</h1>
      <div>
        {favs.length === 0 ? (
          <p>No favorite photos yet</p>
        ) : (
          <div>
            <Carousel images={favs} />
            <div>
              {favs.map((image) => <Card key={image.id} image={image} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
