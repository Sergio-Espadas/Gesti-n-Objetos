const EXCECUTE_HANDLER = Symbol('excecuteHandler');

class RestaurantView {



    constructor() {
        this.main = document.getElementsByTagName('main')[0];
        this.categories = document.getElementById('categorias_principal');
        this.menu = document.querySelector('.barra__navegacion');
        this.platos = document.querySelector('.platos');
        this.categorias = document.querySelector('.categories');
        this.migas = document.querySelector('.breadcrumb');
        this.productWindow = null;
        this.openWindowMap = new Map();
    }

    [EXCECUTE_HANDLER](handler, handlerArguments, scrollElement, data, url,
        event) {
        handler(...handlerArguments);
        const scroll = document.querySelector(scrollElement);
        if (scroll) scroll.scrollIntoView();
        history.pushState(data, null, url);
        event.preventDefault();
    }


    bindInit(handler) {
        document.getElementById('init').addEventListener('click', (event) => {
            this[EXCECUTE_HANDLER](handler, [], 'body', { action: 'init' }, '#inicio',
                event);
        });
        document.getElementById('logo').addEventListener('click', (event) => {
            this[EXCECUTE_HANDLER](handler, [], 'body', { action: 'init' }, '#inicio',
                event);
        });
    }

    showCategories(categories) {
        if (this.platos.children.length > 1)
            this.platos.children[1].remove();
        const container = document.createElement('div');
        container.id = 'categorylist';
        container.classList.add("category");
        for (const category of categories) {
            container.insertAdjacentHTML('beforeend',
                `<div class="category__container">
                    <a data-category="${category.name.name}" href="#categorylist">
                        <div class="cat-list-image category__photo"><img alt="${category.name.name}"
                            src="./Imagenes/${category.name.name}.jpg" />
                        </div>
                        <div class="cat-list-text category_info">
                            <h3>${category.name.name}</h3>
                            <p>${category.name.description}</p>
                        </div>
                    </a>
                </div>`

            )
        };
        this.categorias.append(container);
    }

    showCategoriesInMenu(categories) {
        const div = document.createElement('div');
        div.classList.add('nav-item');
        div.classList.add('dropdown');
        div.insertAdjacentHTML('beforeend',
            `<a class="nav-link dropdown-toggle"
            href="#categorylist" id="navCats" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Categorías</a>`);
        const container = document.createElement('ul');
        container.classList.add('dropdown-menu');
        for (const category of categories) {
            container.insertAdjacentHTML('beforeend', `<div><a data-category="${category.name.name}" 
            class="dropdown-item" href="#category">${category.name.name}</a></div>`);
        }
        div.append(container);
        this.menu.append(div);
    }

    showAllergensInMenu(allergens) {
        const div = document.createElement('div');
        div.id = 'allergen-list';
        div.classList.add('nav-item');
        div.classList.add('dropdown');
        div.insertAdjacentHTML('beforeend',
            `<a class="nav-link dropdown-toggle"
            href="#allergenlist" id="navAlls" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Alergenos</a>`);
        const container = document.createElement('ul');
        container.classList.add('dropdown-menu');
        for (const allergen of allergens) {
            container.insertAdjacentHTML('beforeend', `<div><a data-allergen="${allergen.name.name}" 
            class="dropdown-item" href="#allergen">${allergen.name.name}</a></div>`);
        }
        div.append(container);
        this.menu.append(div);
    }

    showMenusInMenu(menus) {
        const div = document.createElement('div');
        div.id = 'menu-list';
        div.classList.add('nav-item');
        div.classList.add('dropdown');
        div.insertAdjacentHTML('beforeend',
            `<a class="nav-link dropdown-toggle"
            href="#menulist" id="navMen" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Menus</a>`);
        const container = document.createElement('ul');
        container.classList.add('dropdown-menu');
        for (const menu of menus) {
            container.insertAdjacentHTML('beforeend', `<div><a data-menu="${menu.name.name}" 
            class="dropdown-item" href="#menu">${menu.name.name}</a></div>`);
        }
        div.append(container);
        this.menu.append(div);
    }

    showRestaurantsInMenu(restaurants) {
        const div = document.createElement('div');
        div.id = 'restaurant-list';
        div.classList.add('nav-item');
        div.classList.add('dropdown');
        div.insertAdjacentHTML('beforeend',
            `<a class="nav-link dropdown-toggle"
            href="#restaurantlist" id="navRes" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Restaurantes</a>`);
        const container = document.createElement('ul');
        container.classList.add('dropdown-menu');
        for (const res of restaurants) {
            container.insertAdjacentHTML('beforeend', `<div><a data-restaurant="${res.name}" 
            class="dropdown-item" href="#restaurant">${res.name}</a></div>`);
        }
        div.append(container);
        this.menu.append(div);
    }

    showDishes(dishes) {
        if (this.platos.children.length > 1)
            this.platos.children[1].remove();
        const container = document.createElement('div');
        container.classList.add("category");

        for (const dish of dishes) {
            let aleatorio = Math.floor(Math.random() * 4);
            console.log(dish);
            container.insertAdjacentHTML('beforeend',
                `<div class="category__container">
                    <a data-category="${dish.dishes[0].name[aleatorio].name}" href="#disheslist">
                        <div class="cat-list-image category__photo"><img alt="${dish.dishes[0].name[aleatorio].name}"
                            src="./Imagenes/${dish.dishes[0].name[aleatorio].name}.jpg" />
                        </div>
                        <div class="cat-list-text category_info">
                            <h3>${dish.dishes[0].name[aleatorio].name}</h3>
                            <p>${dish.dishes[0].name[aleatorio].description}</p>
                        </div>
                    </a>
                </div>`

            )
        };
        this.platos.append(container);
    }

    // Estas son las imagenes del inicio
    bindDishesCategoryList(handler) {
        const categoryList = document.getElementById('categorylist');
        const links = categoryList.querySelectorAll('a');
        for (const link of links) {
            link.addEventListener('click', (event) => {
                const { category } = event.currentTarget.dataset;
                console.log(category);
                this[EXCECUTE_HANDLER](
                    handler,
                    [category],
                    '#dish-list',
                    { action: 'CategoryList', category },
                    '#categorylist',
                    event,
                );
            });
        }
    }

    // Este es el desplegable de las categorias
    bindDishesCategoryListInMenu(handler) {
        const navCats = document.getElementById('navCats');
        const links = navCats.nextSibling.querySelectorAll('a');
        for (const link of links) {
            link.addEventListener('click', (event) => {
                const { category } = event.currentTarget.dataset;
                this[EXCECUTE_HANDLER](
                    handler,
                    [category],
                    '#dish-list',
                    { action: 'CategoryList', category },
                    '#categorylist',
                    event,
                );
            });

        }
    }

    // Este es desplegable de los alergenos 
    bindDishesAllergenListInMenu(handler) {
        const navAlls = document.getElementById('navAlls');
        const links = navAlls.nextSibling.querySelectorAll('a');
        for (const link of links) {
            link.addEventListener('click', (event) => {
                const { allergen } = event.currentTarget.dataset;
                this[EXCECUTE_HANDLER](
                    handler,
                    [allergen],
                    '#dish-list',
                    { action: 'AllergenListInMenu', allergen },
                    '#allergenlist',
                    event,
                );
            });
        }
    }

    bindDishesMenuListInMenu(handler) {
        const navMen = document.getElementById('navMen');
        const links = navMen.nextSibling.querySelectorAll('a');
        for (const link of links) {
            link.addEventListener('click', (event) => {
                const { menu } = event.currentTarget.dataset;
                this[EXCECUTE_HANDLER](
                    handler,
                    [menu],
                    '#dish-list',
                    { action: 'MenuListInMenu', menu },
                    '#menulist',
                    event,
                );
            });
        }
    }

    bindRestaurantListInMenu(handler) {
        const navRes = document.getElementById('navRes');
        const links = navRes.nextSibling.querySelectorAll('a');
        for (const link of links) {
            link.addEventListener('click', (event) => {
                const { restaurant } = event.currentTarget.dataset;
                this[EXCECUTE_HANDLER](
                    handler,
                    [restaurant],
                    '#dish-list',
                    { action: 'RestaurantListInMenu', restaurant },
                    '#restaurantlist',
                    event,
                );
            });
        }
    }

    bindShowDetailsDishes(handler) {
        const productList = document.getElementById('dish-list');
        const links = productList.querySelectorAll('a');
        for (const link of links) {
            link.addEventListener('click', (event) => {
                const { category } = event.currentTarget.dataset;
                this[EXCECUTE_HANDLER](
                    handler,
                    [category],
                    '#dish-details',
                    { action: 'showProduct', category },
                    '#detailsDish',
                    event,
                    console.log(category)
                );
            });
        }
    }

    listCategories(categories, title) {
        this.platos.replaceChildren();
        if (this.categories.children.length > 1)
            this.categories.children[1].remove();
        const container = document.createElement('div');
        container.id = ("dish-list");
        container.classList.add("dishes");

        for (const dish of categories) {
            container.insertAdjacentHTML('beforeend',
                `<div class="category__container">
                    <a data-category="${dish.name}">
                        <div class="cat-list-image category__photo"><img alt="${dish.name}"
                            src="./Imagenes/${dish.name}.jpg" />
                        </div>
                        <div class="cat-list-text category_info">
                            <h3>${dish.name}</h3>
                            <p>${dish.description}</p>
                        </div>
                    </a>
                </div>`
            )

        };

        this.platos.append(container);

    }


    listAllergens(allergens, title) {
        this.platos.replaceChildren();
        if (this.categories.children.length > 1)
            this.categories.children[1].remove();
        const container = document.createElement('div');
        container.id = ("dish-list");
        container.classList.add("dishes");

        for (const dish of allergens) {
            container.insertAdjacentHTML('beforeend',
                `<div class="category__container">
                    <a data-category="${dish.name}">
                        <div class="cat-list-image category__photo"><img alt="${dish.name}"
                            src="./Imagenes/${dish.name}.jpg" />
                        </div>
                        <div class="cat-list-text category_info">
                            <h3>${dish.name}</h3>
                            <p>${dish.description}</p>
                        </div>
                    </a>
                </div>`
            )

        };

        this.platos.append(container);

    }


    listMenus(menus, title) {
        this.platos.replaceChildren();
        if (this.categories.children.length > 1)
            this.categories.children[1].remove();
        const container = document.createElement('div');
        container.id = ("dish-list");
        container.classList.add("dishes");

        for (const dish of menus) {
            container.insertAdjacentHTML('beforeend',
                `<div class="category__container">
                    <a data-category="${dish.name}">
                        <div class="cat-list-image category__photo"><img alt="${dish.name}"
                            src="./Imagenes/${dish.name}.jpg" />
                        </div>
                        <div class="cat-list-text category_info">
                            <h3>${dish.name}</h3>
                            <p>${dish.description}</p>
                        </div>
                    </a>
                </div>`
            )

        };

        this.platos.append(container);

    }

    listRestaurant(restaurants, name) {
        this.platos.replaceChildren();
        if (this.categories.children.length > 1)
            this.categories.children[1].remove();
        const container = document.createElement('div');
        container.id = ("dish-list");
        container.classList.add('ficha');

        container.insertAdjacentHTML('beforeend',
            `<div class="ficha__container">
                <a data-category="${restaurants.name}">
                    <div class="ficha__imagen">
                    <img src="./Imagenes/restaurante.jpg" class="img-fluid" alt="${restaurants.name}">
                    </div>
                    <div class="ficha__info">
                        <h3>${restaurants.name}</h3>
                        <p>${restaurants.description}</p>
                    </div>
                </a>
            </div>`
        )



        this.platos.append(container);

    }


    showDetailsDishes(dish, message) {
        this.platos.replaceChildren();
        if (this.categories.children.length > 1)
            this.categories.children[1].remove();
        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('mt-5');
        container.classList.add('mb-5');
        console.log(dish);
        if (dish) {
            container.id = 'dish-details';
            container.classList.add(`${dish.name}-style`);
            container.insertAdjacentHTML('beforeend',
                `<div class="row d-flex
        justify-content-center">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="images p-3">
                                        <div class="text-center p-4"> <img id="main-image"
                                            src="./Imagenes/${dish.name}.jpg" /> </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="product p-4">
                                        <div class="mt-4 mb-3"><a href="#detailsDish"><span class="text-uppercasebrand">${dish.name}</span></a>
                                            <h5 class="text-uppercase">${dish.description}</h5>
                                            <div class="price d-flex flex-row align-items-center">


                                            </div>
                                        </div>
                                        <p class="about">${dish.description}</p>
                                        <div class="sizes mt-5">
                                            <h6 class="text-uppercase">Descripcion</h6>
                                            <p class="text-uppercase">${dish.ingredients}</p>
                                        </div>
                                        <div class="cart mt-4 align-items-center">
                                            <button id="b-buy" data-category="${dish.name}" class="btn btnprimary text-uppercase mr-2 px-4">Comprar</button>
                                            <button id="b-open" data-category="${dish.name}" class="btn btnprimary text-uppercase mr-2 px-4">Abrir en nueva ventana</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);

            container.insertAdjacentHTML('beforeend', '<button id="b-close" class="btn btn-primary text-uppercase m-2 px-4">Cerrar todas las ventanas</button>');

        } else {
            console.log(dish);
            container.insertAdjacentHTML(
                'beforeend',
                `<div class="row d-flex justify-content-center">
                    ${message}
                </div>`,
            );
        }
        this.platos.append(container);
    }


    showProductInNewWindow(dish, message) {
        const main = this.productWindow.document.querySelector('main');
        const header = this.productWindow.document.querySelector('header nav');
        main.replaceChildren();
        header.replaceChildren();
        let container;
        console.log(dish);
        if (dish) {
            container = document.createElement('div');
            container.id = 'dish-details';
            container.classList.add(`${dish.name}-style`);
            container.insertAdjacentHTML('beforeend',
                `<div class="row d-flex
        justify-content-center">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="images p-3">
                                        <div class="text-center p-4"> <img id="main-image"
                                            src="./Imagenes/${dish.name}.jpg" /> </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="product p-4">
                                        <div class="mt-4 mb-3"> <span class="text-uppercasebrand">${dish.name}</span>
                                            <h5 class="text-uppercase">${dish.description}</h5>
                                            <div class="price d-flex flex-row align-items-center">


                                            </div>
                                        </div>
                                        <p class="about">${dish.description}</p>
                                        <div class="sizes mt-5">
                                            <h6 class="text-uppercase">Descripcion</h6>
                                            <p class="text-uppercase">${dish.ingredients}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            container.insertAdjacentHTML('beforeend', '<button class="btn btnprimary text-uppercase m-2 px-4"	onClick = "window.close()" > Cerrar</button > ');

        } else {
            console.log(dish);
            container.insertAdjacentHTML(
                'beforeend',
                `<div class="row d-flex justify-content-center">
                    ${message}
                </div>`,
            );
        }
        main.append(container);
        this.productWindow.document.body.scrollIntoView();
    }

    bindShowProductInNewWindow(handler) {
        const bOpen = document.getElementById('b-open');

        bOpen.addEventListener('click', (event) => {
            const category = event.target.dataset.category;

            if (!this.openWindowMap.has(category)) {
                const newWindow = window.open('product.html', category,
                    'width=800, height=600, top=250, left=250, titlebar=yes, toolbar=no,menubar = no, location = no');
                newWindow.addEventListener('DOMContentLoaded', () => {
                    handler(category);
                });
                this.openWindowMap.set(category, newWindow);
                this.productWindow = newWindow;
            } else {
                const openWindow = this.openWindowMap.get(category);
                openWindow.focus();
            }

            const bClose = document.getElementById('b-close');
            bClose.addEventListener('click', this.closeAllWindows.bind(this));
        });
    }

    closeAllWindows() {
        for (const [category, openWindow] of this.openWindowMap.entries()) {
            openWindow.close();
        }
        this.openWindowMap.clear();
    }

}

export default RestaurantView;