import { cars } from "./data/Cars.js";

const searchbar = document.getElementById("search_bar");
const scale = document.getElementById("scale_menu");
const brand = document.getElementById("brand_menu");
const make = document.getElementById("make_menu");
const clear = document.getElementById("clear_filters");
const count = document.getElementById("result_count");
const model = document.getElementById("model_dialog");
const grid = document.getElementById("card_grid");

function populateCardGrid() {
    if(cars.length === 0) return "No models found.";

    count.textContent = cars.length + (cars.length === 1 ? " model" : " models");
    grid.replaceChildren();

    cars.forEach(car => grid.append(createCard(car)));
    return grid;
}

function createCard(car) {
    const card = document.createElement("article");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = "";
    img.alt = car.name;

    const title = document.createElement("h2");
    const open_button = document.createElement("button");
    open_button.classList.add("card_open");
    open_button.type = "button";
    open_button.textContent = car.name;
    title.append(open_button);

    const info = document.createElement("ul");
    const car_make = document.createElement("li");
    car_make.textContent = car.make;
    const car_brand = document.createElement("li");
    car_brand.textContent = car.brand;
    info.append(car_make, car_brand);

    card.append(img, title, info);
    return card;
}

populateCardGrid(cars);