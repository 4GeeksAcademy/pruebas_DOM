import { Carousel } from "bootstrap";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */

/**
 * Esta función render es propia de javascript y renderiza (construye) el html al que se haga mención.
 * Recibe "variables" que son las que están declaradas más abajo. (haciendo log podemos ver cuales
 * son esas variables).
 *
 */

function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console

  //empezamos a construir la variable cover, que al llevar dentro una condición, hace necesaria su creación.
  //Van a recibir una etiqueta de tipo HTML desde 0 (no la trae del archivo) y le pasa valores a esa etiqueta,
  //dentro del div tiene una etiqueta de imagen la cual recibe a través de <img src>.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;

  //con este condicional validamos lo que tiene includeCover(variable de abajo) dentro del objeto variables (por defecto = true)
  //le indicamos que si está en false debe crear un div vacío.
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Con el querySelector estamos captando una parte del código HTML, en concreto hace referencia
  //al div que se identifica como "widget_content". En hmtl vemos que ese div no tiene nada, pero
  // la información se encuentra aqui.
  //Con el innerHTML sustituirá el contenido de lo que tenga el html a lo que le pasemos por aqui.

  /**
   * aqui se está "llamando" a la variable "cover" para que se pinte su contenido dentro del nuevo div creado. 
   * se llama a lo que tenga avatarURL.
   *   nombre que viene por defecto. Como está con un innerHTML al poner otro en el campo "Name" se cambiará.
      con el dolar{variables.name} lo que hacemos es llamar a nuestra variable (que en principio está en null)
      y cuando comience a escribir sustituirá lo que tenga en el nombre de la ficha.
   */
  document.querySelector("#widget_content").innerHTML = `<div class="widget">

          ${cover} 

          
          <img src="${variables.avatarURL}" class="photo" />

  
        
          <h1>${variables.name} ${variables.lastName} </h1>

          <h2>${variables.role}</h2>
       
          <ul class="position-right">
            <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 *Se llama a la función onload que es una función propia de javascript, que se va a ejecutar cuando se 
 abra la aplicación, y recibe (a través de function) un objeto con sus atributos, y cada atributo tiene
 key-value.  
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,

    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",

    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",

    name: "Nombre",

    lastName: "Apellido",

    role: "Selecciona"
  };

  /************************************************************************************* */

  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
