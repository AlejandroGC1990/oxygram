import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { loadComments } from "../features/comments/commentsSlice";
import { useEffect } from "react";

const Profile = () => {
  const { favs } = useSelector((state) => state.favs);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      const parsedComments = JSON.parse(savedComments);
      dispatch(loadComments(parsedComments));
    }
  }, [dispatch]);

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
