export const API_URL_alcohol = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
const API_URL_nonalcohol = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
import './styles/style.css';
import './component/header';
import './component/footer';
import './component/main';
import axios from 'axios';

const showContent = document.getElementById('alcoholSection');
const showContent2 = document.getElementById('nonalcoholSection');

const getAlcoholData = async (url) => {
  axios
    .get(url)
    .then((response) => {
      return alcoholShowData(response.data.drinks);
    })
    .catch((error) => {
      console.log(error);
    });
};
getAlcoholData(API_URL_alcohol);

const getnonAlcoholData = async (url) => {
  axios
    .get(url)
    .then((response) => {
      return nonalcoholShowData(response.data.drinks);
    })
    .catch((error) => {
      console.log(error);
    });
};
getnonAlcoholData(API_URL_nonalcohol);

const alcoholShowData = (data) => {
  showContent.innerHTML = '';

  data.map((drinks) => {
    const { strDrink, strDrinkThumb } = drinks;
    const drinksElement = document.createElement('div');
    drinksElement.classList.add('drinks-element');
    drinksElement.innerHTML = `
        <div>
        <div class="drinks-element">
        <div class="img-section">
        <img class="poster-img" src="${strDrinkThumb}" alt="">
        </div>
            <div class="overview" id="info">
                    <h1>${strDrink}</h1>
                    <br> <br>
            </div>
    </div>
        </div>
        `;

    showContent.appendChild(drinksElement);
  });
};

const nonalcoholShowData = (data) => {
  showContent2.innerHTML = '';

  data.map((drinks) => {
    const { strDrink, strDrinkThumb } = drinks;
    const drinksElement = document.createElement('div');
    drinksElement.classList.add('drinks-element');
    drinksElement.innerHTML = `
          <div>
          <div class="drinks-element">
          <div class="img-section">
          <img class="poster-img" src="${strDrinkThumb}" alt="">
          </div>
              <div class="overview" id="info">
                      <h1>${strDrink}</h1>
                      <br> <br>
              </div>
      </div>
          </div>
          `;

    showContent2.appendChild(drinksElement);
  });
};
