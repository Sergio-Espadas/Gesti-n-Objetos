import Restaurant from './restaurant.js';
import RestaurantController from './restaurantController.js';
import RestaurantView from './restaurantView.js';

const RestaurantApp = new RestaurantController(Restaurant.getInstance(), new RestaurantView());

export default RestaurantApp;