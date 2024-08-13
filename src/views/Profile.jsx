import { useSelector } from "react-redux";
import Card from "../components/Card";

const Profile = () => {
  const { favs } = useSelector((state) => state.favs);

  return (
    <div>
      <h1>PROFILE</h1>
      <div>
        {favs.length === 0 ? (
          <p>No favorite photos yet</p>
        ) : (
          favs.map((image) => <Card key={image.id} image={image} />)
        )}
      </div>
    </div>
  );
};

export default Profile;
