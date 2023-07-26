import "./Button.css"

export const Button = (emphasis, text, id) => {
    return `<button id="${id}" class="${emphasis} myButton">${text}</button>`
}