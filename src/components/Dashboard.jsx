const Dashboard = ({ images = [] }) => {
  return (
    <div className="dashboard">
      {images ? (
        <div key={images.id}>
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.urls.thumb} alt={image.description || "Image"} />
            </div>
          ))}
        </div>
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};

export default Dashboard;