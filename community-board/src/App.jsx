
import FoodTruckCard from './FoodTruckCard';
import './App.css';

function App() {
  const foodTrucks = [
    {
      id: 1,
      name: "Birria-Landia",
      cuisine: "Mexican",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
      description: "Authentic birria tacos with rich consommé",
      location: "Downtown Plaza",
      link: "#"
    },
    {
      id: 2,
      name: "Mysttik Masala",
      cuisine: "Indian",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
      description: "Flavorful curries and tandoori specialties",
      location: "Tech District",
      link: "#"
    },
    {
      id: 3,
      name: "The Halal Guys",
      cuisine: "Middle Eastern",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=400&fit=crop",
      description: "Famous chicken over rice with white sauce",
      location: "City Center",
      link: "#"
    },
    {
      id: 4,
      name: "Seoul Street",
      cuisine: "Korean",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop",
      description: "Korean BBQ tacos and kimchi fries",
      location: "University Ave",
      link: "#"
    },
    {
      id: 5,
      name: "Pasta Paradise",
      cuisine: "Italian",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop",
      description: "Fresh handmade pasta and Italian classics",
      location: "Riverside Park",
      link: "#"
    },
    {
      id: 6,
      name: "Pho King Awesome",
      cuisine: "Vietnamese",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop",
      description: "Authentic pho and banh mi sandwiches",
      location: "Market Square",
      link: "#"
    },
    {
      id: 7,
      name: "The Grilled Cheese Truck",
      cuisine: "American",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&h=400&fit=crop",
      description: "Gourmet grilled cheese with creative combos",
      location: "Arts District",
      link: "#"
    },
     {
    id: 8,
    name: "Lobsta Love",
    cuisine: "Seafood",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&h=400&fit=crop",
    description: "Fresh lobster rolls and seafood classics",
    location: "Harbor Walk",
    link: "#"
  },
    {
      id: 9,
      name: "Sweet Wheels",
      cuisine: "Dessert",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop",
      description: "Artisan ice cream and sweet treats",
      location: "Family Park",
      link: "#"
    },
    {
      id: 10,
      name: "Thai'd Up",
      cuisine: "Thai",
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&h=400&fit=crop",
      description: "Spicy pad thai and coconut curry bowls",
      location: "Food Court Lane",
      link: "#"
    },
    {
      id: 11,
      name: "Dragon Wok",
      cuisine: "Chinese",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&h=400&fit=crop",
      description: "Sizzling stir-fry and authentic dim sum",
      location: "Chinatown Square",
      link: "#"
    },
    {
  id: 12,
  name: "El Jefe's Tacos",
  cuisine: "Mexican",
  image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop",
  description: "Street-style tacos with homemade salsas",
  location: "Festival Grounds",
  link: "#"
}
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="awning"></div>
        <h1 className="title">Food Truck Favorites</h1>
        <p className="subtitle">Discover the best street food in your city 🚚</p>
      </header>
      
      <div className="container">
        <div className="card-grid">
          {foodTrucks.map((truck) => (
            <FoodTruckCard
              key={truck.id}
              name={truck.name}
              cuisine={truck.cuisine}
              image={truck.image}
              description={truck.description}
              location={truck.location}
              link={truck.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;