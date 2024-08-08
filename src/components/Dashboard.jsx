const Dashboard = ({ images }) => {
  return (
    <div className="dashboard">
      {images.length > 0 ? (
        <div>
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