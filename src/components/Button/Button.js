import "./Button.css"

export const Button = (emphasis, text, id) => {
    return `<button id="${id}" class="${emphasis} myButton">${text}</button>`
}


/* Los botones se pueden usar de la siguiente manera: 

    ${Button("high", "Sign up", "id1")}
    ${Button("medium", "Discover Now", "id2")}
    ${Button("low", "Login", "pepe")}
    ${Button("high", "Explore Now", "juanillo")}
     
    La primera propiedad es el tipo de botón, high es el naranja con la letra blanca, medium es el blanco con borde naranja y letra naranja y low es el que sólo tiene la letra naranja sin fondo ni borde
    
    La segunda propiedad es el texto que va a tener el botón

    La tercera propiedad es el id del botón
*/