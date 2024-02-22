import { Category, Allergen, Menu, Coordinate, Dish, Restaurant, } from './restaurant.js';

const MODEL = Symbol('restaurant');
const VIEW = Symbol('restaurantView');
const LOAD_RESTAURANT = Symbol('Load Manager Objects');

class RestaurantController {
    constructor(model, view) {

        this[MODEL] = model;
        this[VIEW] = view;

        this.onLoad();

        this.onInit();
        this[VIEW].bindInit(this.handleInit);


    }

    [LOAD_RESTAURANT]() {
        // Crear instancias de las categorías, platos, alérgenos, menús y restaurantes

        // Creamos los 4 platos de Hamburguesas
        let italiana = new Dish("Italiana", "Hamburguesa italiana",
            ["italiana", "Tomate"],
            "URL_italiana_Con_Tomate");

        let smash = new Dish("Smash", "Hamburguesa smash",
            ["smash", "Tomate"],
            "URL_smash_Con_Tomate");

        let vegetariana = new Dish("Vegetariana", "Hamburguesa vegetal",
            ["vegetal", "Tomate"],
            "URL_vegetal_Con_Tomate");

        let barbacoa = new Dish("Barbacoa", "Hamburguesa barbacoa",
            ["barbacoa", "Tomate"],
            "URL_barbacoa_Con_Tomate");


        // Creamos los 4 platos de heladoss
        let chocolate = new Dish("Chocolate", "Helado de chocolate",
            ["chocolate", "Salsa"],
            "URL_chocolate_En_Salsa");

        let vainilla = new Dish("Vainilla", "Helado de vainilla",
            ["vainilla", "Salsa"],
            "URL_vainilla_En_Salsa");

        let nata = new Dish("Nata", "Helado de nata",
            ["nata", "Salsa"],
            "URL_nata_En_Salsa");

        let pistacho = new Dish("Pistacho", "Helado de pistacho",
            ["pistacho", "Salsa"],
            "URL_pistacho_En_Salsa");


        // Creamos los 4 platos de brochetas
        let pollo = new Dish("Pollo", "Brocheta de pollo",
            ["pollo", "Salsa"],
            "URL_pollo_En_Salsa");

        let ternera = new Dish("Ternera", "Brocheta de ternera",
            ["ternera", "Salsa"],
            "URL_ternera_En_Salsa");

        let vegetal = new Dish("Vegetal", "Brocheta vegetal",
            ["vegetal", "Salsa"],
            "URL_vegetal_En_Salsa");

        let mixto = new Dish("Mixto", "Brocheta mixta",
            ["mixto", "Salsa"],
            "URL_mixto_En_Salsa");


        // Crear un objeto de la clase Category
        let brochetas = new Category("Brochetas", "Pimiento, cebolla y carne...");
        let hamburguesas = new Category("Hamburguesas", "Jugosas y al punto");
        let helados = new Category("Helados", "Helados Naturales");

        // Crear un objeto de la clase Allergen
        let gluten = new Allergen("Gluten", "Las hamburguesas contiene gluten");
        let lactosa = new Allergen("Lactosa", "La salsa contiene leche");
        let frutosSecos = new Allergen("Frutos Secos", "La brochetas contiene trazas de frutos secos");
        let platano = new Allergen("Platanos", "La salsa puede contener trazas de platano");

        // Crear un objeto de la clase Menu
        let menuHamburguesas = new Menu("Menu Hamburguesas", "Menu diario del restaurante");
        let menuBrochetas = new Menu("Menu Brochetas", "Menu diario del restaurante");
        let menuHelados = new Menu("Menu Helados", "Menu diario del restaurante");

        // Crear un objeto de la clase Coordinate
        let coordenadasSergio = new Coordinate(40.7128, -74.0060);
        let coordenadasGourmet = new Coordinate(40.7128, -74.0060);
        let coordenadasTenedor = new Coordinate(40.7128, -74.0060);

        // Crear un objeto de la clase Restaurant
        let cocinaDeSergio = new Restaurant("La cocina de Sergio", "Restaurante tradicional", coordenadasSergio);
        let cocinaGourmet = new Restaurant("La cocina Gourmet", "Restaurante de calidad mundial", coordenadasGourmet);
        let cocinaTenedor = new Restaurant("La cocina del Tenedor", "Restaurante de estrella michelin", coordenadasTenedor);

        this[MODEL].addRestaurant(cocinaDeSergio, cocinaGourmet, cocinaTenedor);

        // Asignamos los platos a las categorías
        this[MODEL].assignCategoryToDish(hamburguesas, italiana, smash, vegetariana, barbacoa);

        this[MODEL].assignCategoryToDish(brochetas, pollo, mixto, vegetal, ternera);

        this[MODEL].assignCategoryToDish(helados, chocolate, vainilla, pistacho, nata);

        //Asignamos los platos a los alergenos
        this[MODEL].assignAllergenToDish(gluten, italiana, smash, vegetariana, barbacoa, vegetal, ternera);
        this[MODEL].assignAllergenToDish(lactosa, chocolate, vainilla, pistacho, nata);
        this[MODEL].assignAllergenToDish(frutosSecos, chocolate, pistacho);
        this[MODEL].assignAllergenToDish(platano, vainilla, nata)

        // Asignamos los platos a los menus 
        this[MODEL].assignMenuToDish(menuHamburguesas, barbacoa, vegetariana, smash);
        this[MODEL].assignMenuToDish(menuHelados, nata, vainilla, chocolate);
        this[MODEL].assignMenuToDish(menuBrochetas, ternera, vegetal, pollo);
    }

    onLoad = () => {
        this[LOAD_RESTAURANT]();
        this[VIEW].showCategories(this[MODEL].getCategories());
        this[VIEW].showDishes(this[MODEL].getCategories());
        this.onAddCategory();
        this.onAddAllergens();
        this.onAddMenus();
        this.onAddRestaurant();
    };

    onInit = () => {
        // Categorias
        this[VIEW].bindDishesCategoryList(this.handleDishesCategoryList,);
        this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList,);

        // Alergenos
        this[VIEW].bindDishesAllergenListInMenu(this.handleDishesAllergenList,);

        // Menus
        this[VIEW].bindDishesMenuListInMenu(this.handleDishesMenuList,);

        // Restaurant
        this[VIEW].bindRestaurantListInMenu(this.handleRestaurantList,);
    }

    handleInit = () => {
        this.onInit();
    }

    onAddCategory = () => {
        this[VIEW].showCategoriesInMenu(this[MODEL].getCategories());
    };

    onAddAllergens = () => {
        this[VIEW].showAllergensInMenu(this[MODEL].getAllergens());
    };

    onAddMenus = () => {
        this[VIEW].showMenusInMenu(this[MODEL].getMenus());
    };

    onAddRestaurant = () => {
        this[VIEW].showRestaurantsInMenu(this[MODEL].getRestaurants());
    };

    handleDishesCategoryList = (title) => {
        console.log(title);
        const category = (this[MODEL].getCategory(title));
        this[VIEW].listCategories(this[MODEL].getCategoryProducts(category),
            category.name);
        this[VIEW].bindShowDetailsDishes(this.handleShowDetailsDishes);
    };

    handleDishesAllergenList = (title) => {
        console.log(title);
        const allergen = (this[MODEL].getAllergen(title));
        this[VIEW].listAllergens(this[MODEL].getAllergenProducts(allergen),
            allergen.name);
        this[VIEW].bindShowDetailsDishes(this.handleShowDetailsDishes);
    };

    handleDishesMenuList = (title) => {
        console.log(title);
        const menu = (this[MODEL].getMenu(title));
        this[VIEW].listMenus(this[MODEL].getMenuProducts(menu),
            menu.name);
        this[VIEW].bindShowDetailsDishes(this.handleShowDetailsDishes);
    };

    handleRestaurantList = (title) => {
        console.log(title);
        const restaurant = (this[MODEL].getRestaurant(title));
        this[VIEW].listRestaurant(this[MODEL].getRestaurantsDetails(restaurant),
            restaurant.name);
    };

    handleShowDetailsDishes = (name) => {
        try {
            let dish = this[MODEL].getDish(name);

            this[VIEW].showDetailsDishes(dish);

            this[VIEW].bindShowProductInNewWindow(
                this.handleShowProductInNewWindow,
            );

        } catch (error) {
            this[VIEW].showDetailsDishes(null, 'No existe este producto en la página.');
        }
    };

    handleShowProductInNewWindow = (name) => {

        console.log(name);
        let dish = this[MODEL].getDish(name);

        console.log(dish);

        this[VIEW].showProductInNewWindow(dish);


    };

}


export default RestaurantController;