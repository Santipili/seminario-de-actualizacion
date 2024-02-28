
import { BackTest} from "./backTest.js";



function main() {

  let test = new BackTest();

  document.body.appendChild(test);
}

window.addEventListener("load", main);
