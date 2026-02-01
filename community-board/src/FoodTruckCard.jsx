import './FoodTruckCard.css';

const FoodTruckCard = ({ name, cuisine, image, description, location, link }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3 className="truck-name">{name}</h3>
        <p className="cuisine-type">{cuisine}</p>
        <p className="description">{description}</p>
        <p className="location">📍 {location}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="view-menu-btn">
          View Menu
        </a>
      </div>
    </div>
  );
};

export default FoodTruckCard;