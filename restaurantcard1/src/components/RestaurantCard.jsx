import Badge from "./Badge";
import Rating from "./Rating";

function RestaurantCard({ restaurant }) {
    return (
        <div className="card">

            <img
                src={restaurant.image}
                alt={restaurant.name}
                className="card-image"
            />

            <div className="card-content">

                <div className="tags">
                    <Badge
                        label={restaurant.cuisine}
                        type="cuisine"
                    />

                </div>

                <h2 className="card-title">
                    {restaurant.name}
                </h2>

                <p className="card-location">
                    📍 {restaurant.location}
                </p>

                <p className="card-description">
                    {restaurant.description}
                </p>

                <div className="card-footer">
                    <Rating score={restaurant.rating} />
                </div>

            </div>

        </div>
    );
}

export default RestaurantCard;