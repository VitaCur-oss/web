
const your_name = prompt('Введите имя')

/**
 * Приветствие
 * @param {string} name Имя
 * @returns {string} 
 */
function greeting(name) {
    return `Приветствую тебя, ${name}!`
}
console.log(greeting(your_name))
