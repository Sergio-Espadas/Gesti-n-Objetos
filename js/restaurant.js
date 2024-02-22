
// Objeto para identifica los datos de un plato
class Dish {

    #name;
    #description;
    #ingredients;
    #image;

    constructor(name, description = "", ingredients = [], image = "") {
        this.#name = name;
        this.#description = description;
        this.#ingredients = ingredients;
        this.#image = image;


        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });


        // Get y set de ingredients
        Object.defineProperty(this, 'ingredients', {
            enumerable: true,
            get() {
                return this.#ingredients;
            },
            set(value) {
                if (!value) throw new EmptyValueException('ingredients');
                this.#ingredients = value;
            },
        });


        // Get y set de image
        Object.defineProperty(this, 'image', {
            enumerable: true,
            get() {
                return this.#image;
            },
            set(value) {
                if (!value) throw new EmptyValueException('image');
                this.#image = value;
            },
        });
    }

    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description + "\n" +
            "Ingredients: " + this.#ingredients + "\n" + "Image: " + this.#image;
    }
}


// Con este objeto podemos crear la estructura de categorías
class Category {
    #name;
    #description;

    constructor(name, description = " ") {

        this.#name = name;
        this.#description = description;

        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });
    }

    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description;
    }
}


// Representa los alérgenos que pueden tener un determinado plato
class Allergen {
    #name;
    #description;

    constructor(name, description = " ") {

        this.#name = name;
        this.#description = description;


        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });
    }

    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description;
    }
}


// Se trata de una agregación de platos
class Menu {
    #name;
    #description;

    constructor(name, description = " ") {

        this.#name = name;
        this.#description = description;


        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });
    }


    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description;
    }
}


// Representa un recurso restaurante para formar parte de la cadena de restaurantes a gestionar 
class Restaurant {

    #name;
    #description;
    #location;

    constructor(name, description = "", location = "") {
        this.#name = name;
        this.#description = description;
        this.#location = location


        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });


        // Get y set de location
        Object.defineProperty(this, 'location', {
            enumerable: true,
            get() {
                return this.#location;
            },
            set(value) {
                if (!value) throw new EmptyValueException('location');
                this.#location = value;
            },
        });
    }


    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description + "\n" + "Location: " + this.#location;
    }
}


// Son coordenadas para localizar una ubicación.
class Coordinate {

    #latitude;
    #longitude;

    constructor(latitude, longitude) {
        this.#latitude = latitude;
        this.#longitude = longitude;


        // Get y set de latitude
        Object.defineProperty(this, 'latitude', {
            enumerable: true,
            get() {
                return this.#latitude;
            },
            set(value) {
                if (!value) throw new EmptyValueException('latitude');
                this.#latitude = value;
            },
        });


        // Get y set de longitude
        Object.defineProperty(this, 'longitude', {
            enumerable: true,
            get() {
                return this.#longitude;
            },
            set(value) {
                if (!value) throw new EmptyValueException('longitude');
                this.#longitude = value;
            },
        });
    }


    toString() {
        return "Latitud: " + this.#latitude + "\n" + "Longitud: " + this.#longitude;
    }
}


// Objeto RestaurantsManager (Singleton)
let RestaurantsManager = (function () {
    let instantiated;

    class RestaurantsManager {

        #systemName = "Nombre del Sistema";
        #categories = [];
        #allergens = [];
        #dishes = [];
        #menus = [];
        #restaurants = [];


        #getDishPosition(dish) {
            return this.#dishes.findIndex((elemento) => elemento.name === dish.name);
        }


        #getCategoryPosition(category) {
            return this.#categories.findIndex((elemento) => elemento.name === category.name);
        }


        #getAllergenPosition(allergen) {
            return this.#allergens.findIndex((elemento) => elemento.name === allergen.name);
        }


        #getMenuPosition(menu) {
            return this.#menus.findIndex((elemento) => elemento.name === menu.name);
        }


        // Getter para obtener un iterador de categorías
        getCategories() {
            const categories = this.#categories;
            return {
                *[Symbol.iterator]() {
                    for (const category of categories) {
                        yield category;
                    }
                },
            };
        }

        getCategoryProducts(category, ordered) {
            if (!(category instanceof Category)) {
                throw new ObjecManagerException('category', 'Category');
            }

            let categorias = this.#categories;

            for (const cate of categorias) {
                if (cate.name.name.includes(category.name)) {
                    const storedCategory = cate;
                    const values = (ordered)
                        ? storedCategory.dishes[0].name(ordered)
                        : storedCategory.dishes[0].name;
                    return {
                        *[Symbol.iterator]() {
                            for (const product of values) {
                                yield product;
                            }
                        },
                    };

                }
            }

        }

        getAllergenProducts(allergen, ordered) {
            if (!(allergen instanceof Allergen)) {
                throw new ObjecManagerException('allergen', 'allergen');
            }

            let allergens = this.#allergens;

            for (const aller of allergens) {
                if (aller.name.name.includes(allergen.name)) {
                    const storedAllergen = aller;
                    const values = (ordered)
                        ? storedAllergen.dishes[0].name(ordered)
                        : storedAllergen.dishes[0].name;
                    return {
                        *[Symbol.iterator]() {
                            for (const product of values) {
                                yield product;
                            }
                        },
                    };

                }
            }

        }

        getMenuProducts(menu, ordered) {
            if (!(menu instanceof Menu)) {
                throw new ObjecManagerException('menu', 'Menu');
            }

            let menus = this.#menus;

            for (const men of menus) {
                if (men.name.name.includes(menu.name)) {
                    const storedMenu = men;
                    const values = (ordered)
                        ? storedMenu.dishes[0].name(ordered)
                        : storedMenu.dishes[0].name;
                    return {
                        *[Symbol.iterator]() {
                            for (const product of values) {
                                yield product;
                            }
                        },
                    };

                }
            }

        }

        getRestaurantsDetails(restaurant, ordered) {
            if (!(restaurant instanceof Restaurant)) {
                throw new ObjecManagerException('menu', 'Menu');
            }

            let restaurants = this.#restaurants;

            for (const res of restaurants) {
                if (res.name.includes(restaurant.name)) {
                    const storedRes = res;
                    console.log(storedRes);
                    return storedRes
                }
            }

        }

        getRestaurant(title) {

            let restaurants = this.#restaurants;

            for (const res of restaurants) {
                if (res.name.includes(title)) {
                    var resDet = res;
                }
            }

            if (resDet) {
                return resDet;
            } else {
                throw new Error("No se encontro el restaurante " + title);
            }

        }

        getCategory(title) {

            let categorias = this.#categories;

            for (const cate of categorias) {
                if (cate.name.name.includes(title)) {
                    var cat = cate.name;
                }
            }

            if (cat) {
                return cat;
            } else {
                throw new Error("No se encontro la categoria " + title);
            }

        }

        getAllergen(title) {

            let allergens = this.#allergens;

            for (const alle of allergens) {
                if (alle.name.name.includes(title)) {
                    var aller = alle.name;
                }
            }

            if (aller) {
                return aller;
            } else {
                throw new Error("No se encontro el Alergeno " + title);
            }

        }

        getMenu(title) {
            let menus = this.#menus;

            for (const menu of menus) {
                if (menu.name.name.includes(title)) {
                    var men = menu.name;
                }
            }

            if (men) {
                return men;
            } else {
                throw new Error("No se encontro el Menu " + title);
            }

        }


        // Getter para obtener un iterador de menús
        getMenus() {
            const menuIterator = this.#menus;
            return {
                *[Symbol.iterator]() {
                    for (const menu of menuIterator) {
                        yield menu;
                    }
                },
            };
        }


        // Getter para obtener un iterador de alérgenos
        getAllergens() {
            const allergenIterator = this.#allergens;
            return {
                *[Symbol.iterator]() {
                    for (const allergen of allergenIterator) {
                        yield allergen;
                    }
                },
            };
        }


        // Getter para obtener un iterador de dishes
        getDishes() {
            const dishIterator = this.#dishes;
            return {
                *[Symbol.iterator]() {
                    for (const dish of dishIterator) {
                        yield dish;
                    }
                },
            };
        }

        getDish(name) {

            let dishes = this.#dishes;
            for (const di of dishes) {
                console.log(di.name);
                const dish = di.name.find(obj => obj.name === name);
                if (dish) {
                    return dish;
                }
            }
            return null; // Si no se encuentra el objeto, devolvemos null
        }



        // Getter para obtener un iterador de restaurantes
        getRestaurants() {
            const restaurantIterator = this.#restaurants;
            return {
                *[Symbol.iterator]() {
                    for (const restaurant of restaurantIterator) {
                        yield restaurant;
                    }
                },
            };
        }


        // Método para añadir una nueva categoría
        addCategory(...newCategory) {
            for (const category of newCategory) {

                // Verificar si newCategory es una instancia de la clase Category
                if (!(category instanceof Category)) {
                    throw new Error("La categoría no es un objeto Category.");
                }

                //Verifcar que la categoría no es null
                if (category === null) {
                    throw new Error("La categoría es Null.");
                }

                // Sacamos la posición
                let position = this.#categories.findIndex((elemento) => elemento.name === category.name)

                // Verificar si la categoría ya existe
                if (position !== -1) {
                    throw new Error("La categoría ya existe.");
                }

                // Añadir la nueva categoría
                this.#categories.push(category, {
                    dishes: [],
                });
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar una categoría
        removeCategory(...categoriesToRemove) {
            for (const category of categoriesToRemove) {

                // Sacamos la posición
                let position = this.#categories.findIndex((elemento) => elemento.name === category.name)

                // Verificar si la categoría ya existe
                if (position === -1) {
                    throw new Error("La categoría ya existe.");
                }

                console.log(position);

                // Eliminar la categoría del sistema
                this.#categories.splice(position, 1);

            }
        }


        // Método para añadir un menú
        addMenu(...menuToAdd) {
            for (const menu of menuToAdd) {
                // Verificar si menuToAdd es una instancia de la clase Menu
                if (!(menu instanceof Menu)) {
                    throw new Error("El menú no es un objeto Menu.");
                }

                //Verifcar que los menus no son null
                if (menu === null) {
                    throw new Error("El menu es null.");
                }

                // Sacamos la posición
                let position = this.#menus.findIndex((elemento) => elemento.name === menu.name)

                // Verificar si la categoría ya existe
                if (position !== -1) {
                    throw new Error("El menu ya existe.");
                }

                // Añadir el menú al sistema
                this.#menus.push(menu, {
                    dishes: [],
                });

            }


            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un menú
        // Método para eliminar un menú
        removeMenu(...menuToRemove) {
            for (const menu of menuToRemove) {
                // Sacamos la posición
                let position = this.#menus.findIndex((elemento) => elemento.name === menu.name)
                // Verificar si el menú esta registrado
                if (position === -1) {
                    throw new Error("El menú no existe.");
                }
                console.log(position);
                // Eliminar el menú del sistema
                this.#menus.splice(position, 1);
            }
        }


        // Método para añadir un alérgeno
        addAllergen(...allergenToAdd) {
            for (const allergen of allergenToAdd) {
                // Verificar si allergenToAdd es una instancia de la clase Allergen
                if (!(allergen instanceof Allergen)) {
                    throw new Error("El alérgeno no es un objeto Allergen.");
                }

                //Verifcar que el alergeno no es null
                if (allergen === null) {
                    throw new Error("El alergeno es null.");
                }

                // Sacamos la posición
                let position = this.#allergens.findIndex((elemento) => elemento.name === allergen.name)

                // Verificar si la categoría ya existe
                if (position !== -1) {
                    throw new Error("El alergeno ya existe.");
                }

                // Añadir el alérgeno al sistema
                this.#allergens.push(allergen, {
                    dishes: [],
                });
            }
            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un alérgeno
        removeAllergen(...allergenToRemove) {
            for (const allergen of allergenToRemove) {

                // Sacamos la posición
                let position = this.#allergens.findIndex((elemento) => elemento.name === allergen.name);

                // Verificar si el alergeno esta registrado
                if (position === -1) {
                    throw new Error("El alergeno no existe.");
                }

                console.log(position);

                // Eliminar el alergeno del sistema
                this.#allergens.splice(position, 1);
            }
        }


        // Método para añadir un plato
        addDish(...dishToAdd) {
            for (const dish of dishToAdd) {
                // Verificar si dishToAdd es una instancia de la clase Dish
                if (!(dish instanceof Dish)) {
                    throw new Error("El plato no es un objeto Dish.");
                }

                //Verifcar que el plato no es null
                if (dish === null) {
                    throw new Error("El plato es Null.");
                }

                // Sacamos la posición
                let position = this.#dishes.findIndex((elemento) => elemento.name === dish.name);

                // Verificar si el plato ya existe
                if (position !== -1) {
                    throw new Error("El plato ya existe.");
                }

                // Añadir el plato al sistema
                this.#dishes.push(dish, {
                    categories: [],
                    allergens: [],
                });
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un plato
        //Elimina un plato y si también lo eliminara de categorias, alergenos y menus
        removeDish(...dishes) {
            for (const dish of dishes) {
                if (!(dish instanceof Dish)) {
                    throw new Error("El plato no es un objeto Dish.");
                }

                //Buscamos  si el plato existe y si es asi lo eliminamos
                let position = this.#getDishPosition(dish);
                console.log(position);
                if (position !== -1) {
                    this.#dishes.splice(position, 1);

                    // Buscamos en las categorias y si lo encontramos borramos el plato
                    for (const category of this.#categories) {
                        let categoryPosition = this.#getCategoryPosition(category);
                        console.log(categoryPosition);

                        let objCategory = this.#categories[categoryPosition];

                        // Verificar si objCategory es undefined antes de acceder a dishes
                        if (objCategory && objCategory.dishes) {
                            let dishIndex = objCategory.dishes.findIndex((busqueda) => busqueda.nombre === dish.nombre);
                            console.log(dishIndex);

                            if (dishIndex !== -1) {
                                this.#categories[categoryPosition].dishes.splice(dishIndex, 1);
                            }
                        }
                    }


                    // Buscamos en los alergenos y si lo encontramos borramos el plato
                    for (const allergen of this.#allergens) {
                        let allergenPosition = this.#getAllergenPosition(allergen);
                        console.log(allergenPosition);

                        let objAllergen = this.#allergens[allergenPosition];

                        // Verificar si objAllergen es undefined antes de acceder a dishes
                        if (objAllergen && objAllergen.dishes) {
                            let dishIndex = objAllergen.dishes.findIndex((busqueda) => busqueda.nombre === dish.nombre);
                            console.log(dishIndex);

                            if (dishIndex !== -1) {
                                this.#allergens[allergenPosition].dishes.splice(dishIndex, 1);
                            }
                        }
                    }


                    // Buscamos en los menus y si lo encontramos borramos el plato
                    for (const menu of this.#menus) {
                        let menuPosition = this.#getMenuPosition(menu);
                        console.log(menuPosition);

                        let objMenu = this.#menus[menuPosition];

                        // Verificar si objAllergen es undefined antes de acceder a dishes
                        if (objMenu && objMenu.dishes) {
                            let dishIndex = objMenu.dishes.findIndex((busqueda) => busqueda.nombre === dish.nombre);
                            console.log(dishIndex);

                            if (dishIndex !== -1) {
                                this.#menus[menuPosition].dishes.splice(dishIndex, 1);
                            }
                        }
                    }

                } else {
                    throw new Error("Dish no existe en esta lista");
                }
            }
        }



        // Método para añadir un restaurante
        addRestaurant(...restaurantToAdd) {
            for (const restaurant of restaurantToAdd) {
                // Verificar si restaurantToAdd es una instancia de la clase Restaurant
                if (!(restaurant instanceof Restaurant)) {
                    throw new Error("El restaurante no es un objeto Restaurant.");
                }

                //Verifcar que el restaurante no es null
                if (restaurant === null) {
                    throw new Error("La categoría es Nula.");
                }

                // Sacamos la posición
                let position = this.#restaurants.findIndex((elemento) => elemento.name === restaurant.name)

                // Verificar si la categoría ya existe
                if (position !== -1) {
                    throw new Error("La categoría ya existe.");
                }

                // Añadir el restaurante al sistema
                this.#restaurants.push(restaurant);
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un restaurante
        removeRestaurant(...restaurantToRemove) {
            for (const restaurant of restaurantToRemove) {

                // Sacamos la posición
                let position = this.#restaurants.findIndex((elemento) => elemento.name === restaurant.name);

                // Verificar si el restaurante esta registrado
                if (position === -1) {
                    throw new Error("El restaurante no existe.");
                }

                console.log(position);

                // Eliminar el restaurante del sistema
                this.#restaurants.splice(position, 1);
            }
        }


        // Método para asignar un plato a una categoría
        assignCategoryToDish(categoryName, ...dishName) {
            // Verificar si Category es null
            if (categoryName === null) {
                throw new Error("La categoría es null.");
            }

            // Verificar si Dish es null
            if (dishName === null) {
                throw new Error("El plato es null.");
            }

            // Buscar la categoría en el sistema
            let category = this.#categories.find((cat) => cat.name === categoryName);

            // Si la categoría no existe, se añade al sistema
            if (!category) {
                category = { name: categoryName, dishes: [] };
                this.#categories.push(category);
            }

            // Buscar el plato en el sistema
            let dish = this.#dishes.find((d) => d.name === dishName);


            // Si el plato no existe, se añade al sistema
            if (!dish) {
                dish = { name: dishName, categories: [] };
                this.#dishes.push(dish);
            }


            // Asignar el plato a la categoría
            category.dishes.push(dish);
            // Asignar la categoría al plato
            dish.categories.push(category);

            // Permitir encadenar llamadas
            return this;
        }


        // Método para asignar un plato a una alegeria
        assignAllergenToDish(allergenName, ...dishName) {
            // Verificar si allergen es null
            if (allergenName === null) {
                throw new Error("El alergeno es null.");
            }

            // Verificar si Dish es null
            if (dishName === null) {
                throw new Error("El plato es null.");
            }

            // Buscar la categoría en el sistema
            let allergen = this.#allergens.find((cat) => cat.name === allergenName);

            // Si el alergeno no existe, se añade al sistema
            if (!allergen) {
                allergen = { name: allergenName, dishes: [] };
                this.#allergens.push(allergen);
            }

            // Buscar el plato en el sistema
            let dish = this.#dishes.find((d) => d.name === dishName);

            // Si el plato no existe, se añade al sistema
            if (!dish) {
                dish = { name: dishName, allergen: [] };
                this.#dishes.push(dish);
            }

            // Asignar el plato a la categoría
            allergen.dishes.push(dish);
            // Asignar la categoría al plato
            dish.allergen = allergen;

            // Permitir encadenar llamadas
            return this;
        }


        // Método para asignar un plato a un menu
        assignMenuToDish(menuName, ...dishName) {
            // Verificar si allergen es null
            if (menuName === null) {
                throw new Error("El menu es null.");
            }

            // Verificar si Dish es null
            if (dishName === null) {
                throw new Error("El plato es null.");
            }

            // Buscar el menu en el sistema
            let menu = this.#menus.find((cat) => cat.name === menuName);

            // Si el menu no existe, se añade al sistema
            if (!menu) {
                menu = { name: menuName, dishes: [] };
                this.#menus.push(menu);
            }

            // Buscar el plato en el sistema
            let dish = this.#dishes.find((d) => d.name === dishName);

            // Si el plato no existe, se añade al sistema
            if (!dish) {
                dish = { name: dishName, menu: [] };
                this.#dishes.push(dish);
            }

            // Asignar el plato a la categoría
            menu.dishes.push(dish);
            // Asignar la categoría al plato
            dish.menu = menu;

            // Permitir encadenar llamadas
            return this;
        }


        // Método para desasignar un plato de una categoría
        deassignCategoryToDish(categoryName, ...dishName) {
            // Verificar si Category es null
            if (categoryName === null) {
                throw new Error("La categoría es null.");
            }

            // Verificar si Dish es null
            if (dishName === null) {
                throw new Error("El plato es null.");
            }

            // Buscar la categoría en el sistema
            let category = this.#categories.find((cat) => cat.name === categoryName);

            // Verificar si la categoría no está registrada
            if (!category) {
                throw new Error("La categoría no está registrada.");
            }

            // Buscar el plato en el sistema
            let dish = this.#dishes.find((d) => d.name === dishName);

            // Verificar si el plato no está registrado
            if (!dish) {
                throw new Error("El plato no está registrado.");
            }

            // Desasignar el plato de la categoría
            category.dishes = category.dishes.filter((d) => d !== dish);

            // Desasignar la categoría del plato
            dish.categories = dish.categories.filter((cat) => cat !== category);

            // Permitir encadenar llamadas
            return this;
        }


        // Método para desasignar un plato de un alergeno
        deassignAllergenToDish(allergenName, ...dishName) {
            // Verificar si allergen es null
            if (allergenName === null) {
                throw new Error("El alergeno es null.");
            }

            // Verificar si Dish es null
            if (dishName === null) {
                throw new Error("El plato es null.");
            }

            // Buscar el alergeno en el sistema
            let allergen = this.#allergens.find((a) => a.name === allergenName);

            // Verificar si el alergeno no está registrada
            if (!allergen) {
                throw new Error("El alergeno no está registrada.");
            }

            // Buscar el plato en el sistema
            let dish = this.#dishes.find((d) => d.name === dishName);

            // Verificar si el plato no está registrado
            if (!dish) {
                throw new Error("El plato no está registrado.");
            }

            // Desasignar el plato del alergeno
            allergen.dishes = allergen.dishes.filter((d) => d !== dish);

            // Permitir encadenar llamadas
            return this;
        }



        // Método para desasignar un plato de un menu
        deassignMenuToDish(menuName, ...dishName) {
            // Verificar si menu es null
            if (menuName === null) {
                throw new Error("El menu es null.");
            }

            // Verificar si Dish es null
            if (dishName === null) {
                throw new Error("El plato es null.");
            }

            // Buscar el menu en el sistema
            let menu = this.#menus.find((cat) => cat.name === menuName);

            // Verificar si el menu no está registrada
            if (!menu) {
                throw new Error("El menu no está registrada.");
            }
            // Buscar el plato en el sistema
            let dish = this.#dishes.find((d) => d.name === dishName);

            // Verificar si el plato no está registrado
            if (!dish) {
                throw new Error("El plato no está registrado.");
            }

            // Desasignar el plato del menu
            menu.dishes = menu.dishes.filter((d) => d !== dish);

            // Permitir encadenar llamadas
            return this;
        }


        // Método para intercambiar las posiciones de dos platos en un menú
        changeDishesPositionsInMenu(menuName, dishName1, dishName2) {
            // Verificar si Menu es null
            if (menuName === null) {
                throw new Error("El menú es null.");
            }

            // Buscar el menú en el sistema
            let menu = this.#menus.find((m) => m.name === menuName);

            // Verificar si el menú no está registrado
            if (!menu) {
                throw new Error("El menú no está registrado.");
            }

            // Verificar si Dish1 es null
            if (dishName1 === null) {
                throw new Error("El primer plato es null.");
            }

            // Verificar si Dish2 es null
            if (dishName2 === null) {
                throw new Error("El segundo plato es null.");
            }

            // Buscar los platos en el menú
            let dish1 = menu.dishes.find((d) => d.name === dishName1);
            let dish2 = menu.dishes.find((d) => d.name === dishName2);

            // Verificar si los platos no están registrados en el menú
            if (!dish1) {
                throw new Error("El primer plato no está registrado en el menú.");
            }

            if (!dish2) {
                throw new Error("El segundo plato no está registrado en el menú.");
            }

            // Intercambiar las posiciones de los platos en el menú
            const index1 = menu.dishes.indexOf(dish1);
            const index2 = menu.dishes.indexOf(dish2);

            menu.dishes[index1] = dish2;
            menu.dishes[index2] = dish1;

            // Permitir encadenar llamadas
            return this;
        }

    }

    function init() {
        return new RestaurantsManager();
    }

    return {
        getInstance() {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        },
    };
})();

export default RestaurantsManager;

// Exportar las clases
export { Dish, Category, Allergen, Menu, Restaurant, Coordinate };
