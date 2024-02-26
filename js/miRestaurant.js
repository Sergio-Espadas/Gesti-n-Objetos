import RestaurantApp from './restaurantApp.js';

const historyActions = {
    init: () => {
        RestaurantApp.handleInit();
    },
    CategoryList: (event) => RestaurantApp.handleDishesCategoryList(event.state.category),
    AllergenListInMenu: (event) => RestaurantApp.handleDishesAllergenList(event.state.allergen),
    MenuListInMenu: (event) => RestaurantApp.handleDishesMenuList(event.state.menu),
    RestaurantListInMenu: (event) => RestaurantApp.handleRestaurantList(event.state.restaurant),
    showDetailsDishes: (event) => RestaurantApp.handleShowDetailsDishes(event.state.category),
    newCategory: () => ManagerApp.handleNewCategoryForm(),
    removeCategory: () => ManagerApp.handleRemoveCategoryForm(),

};

window.addEventListener('popstate', (event) => {
    if (event.state) {
        console.log(event)
        historyActions[event.state.action](event);
    }
});


history.replaceState({ action: 'init' }, null);

