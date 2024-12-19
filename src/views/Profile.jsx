import { useSelector } from "react-redux";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { useState } from "react";
import Select from "react-select";
import "../styles/Page/_profile.scss";
import Masonry from 'react-masonry-css';

const Profile = () => {
  const { favs } = useSelector((state) => state.favs);

  const [sortBy, setSortBy] = useState({ value: "date", label: "Date" });

  const handleSortChange = (selectedOptions) => {
    setSortBy(selectedOptions);
  };

  const sortFavorites = (photos) => {
    return [...photos].sort((a, b) => {
      switch (sortBy.value) {
        case "date":
          return new Date(b.created_at) - new Date(a.created_at);
        case "height":
          return b.height - a.height;
        case "width":
          return b.width - a.width;
        case "likes":
          return b.likes - a.likes;
        default:
          return 0;
      }
    });
  };

  const options = [
    { value: "date", label: "Date" },
    { value: "height", label: "Height" },
    { value: "width", label: "Width" },
    { value: "likes", label: "Likes" },
  ];

  return (
    <div className="profile">
      <h1>Your profile</h1>
      {favs.length === 0 ? (
        <p className="no-favs-message">No favorite photos yet</p>
      ) : (
        <div className="profile__content">
          <div className="profile__content__sort-selector">
            <label htmlFor="sort-by">Sort by A:</label>
            <Select
              className="profile__content__sort-selector__select"
              id="sort-by"
              options={options}
              value={sortBy}
              onChange={handleSortChange}
            />
          </div>

          <Carousel images={favs} />
          
          <div className="profile__content__photo-gallery">
             {sortFavorites(favs).map((image) => {
              console.log("Image data:", image); 
              return (
                <Card
                  className="profile__content__photo-gallery__card"
                  key={image.id}
                  image={image}
                />
              );
            })}  
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
