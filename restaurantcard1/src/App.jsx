import "./App.css";
import {restaurants} from "./data/restaurants";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
      <div className="restaurantcard">
        <header className="header">
          <div className="header_content">
            <p className="header-small">
              TASTE OF NEPAL
            </p>
            <h1>
              Discover Nepali Food
            </h1>
            <p className="header-text">
              Explore some delicious Nepali restaurants and traditional
              foods around Helsinki.
            </p>
          </div>

        </header>
        <main className="main-content">
          <div className="section-heading">
            <div>
              <p className="section-small">
                OUR COLLECTION
              </p>
              <h2>
                Popular Restaurants
              </h2>
            </div>

            <p className="restaurant-count">
              {restaurants.length} restaurants
            </p>
          </div>

          <RestaurantList restaurants={restaurants} />

        </main>

        <footer>
          <p>
             Nepali Restaurant Collection<br/>
            📞 contact:+753 345 23456<br/>
            📍  location: Helsinki
          </p>
        </footer>

      </div>
  );
}

export default App;