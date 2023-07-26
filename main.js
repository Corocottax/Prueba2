import './style.css';
import { Button } from './src/components/Button/Button';

const initApp = () => {

  const app$$ = document.querySelector("#app");

  app$$.innerHTML = `
    ${Button("high", "Sign up", "id1")}
    ${Button("medium", "Discover Now", "id2")}
    ${Button("low", "Login", "pepe")}
    ${Button("high", "Explore Now", "juanillo")}
  `

}

initApp();