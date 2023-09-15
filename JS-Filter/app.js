const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const filterProducts = (filteredProducts) => {

    productsContainer.innerHTML = filteredProducts.map(product => 
        `
        <div class="product">
        <img
          src=${product.img}
          alt=""
        >
        <span class="name">${product.name}</span>
        <span class="priceValue">${product.price}</span>
        </div>
        `
    );

};

const showProducts = (data) => {

    productsContainer.innerHTML = data.map(product => 
        `
        <div class="product">
        <img
          src=${product.img}
          alt=""
        >
        <span class="name">${product.name}</span>
        <span class="priceValue">${product.price}</span>
        </div>
        `  
    ).join("");

};

showProducts(data);

searchInput.addEventListener("keyup", (e) => {

    const value = e.target.value.toLowerCase();

    if(value) {

        filterProducts(data.filter(product => product.name.toLowerCase().indexOf(value) !== -1));

    } else {
        showProducts(data);
    }

});

const setCategories = (data) => {
    const allCats = data.map(category => category.cat);
    const categories = [
          "All", ...allCats.filter((item,index) => {
          return allCats.indexOf(item) === index;
        })
    ];

    categoriesContainer.innerHTML = categories.map(cat => 
      `
        <span class="cat">${cat}</span>
      `  
    ).join("");

    categoriesContainer.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        selectedCat === "All" 
        ? 
        showProducts(data) 
        : 
        filterProducts(data.filter(product => product.cat === selectedCat));

    });

};

const setPrices = (data) => {

    const priceList = data.map(data => data.price);

    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = minPrice;
    priceValue.textContent = "$" + minPrice;

    priceRange.addEventListener("input", (e) => {

        priceValue.textContent = "$" + e.target.value;

        filterProducts(data.filter(data => data.price < e.target.value));

    });

};

setCategories(data);

setPrices(data);