
const celc = Number.parseFloat(prompt('Введите температуру по Цельсию'))

/**
 * Функция преобразования температуры из Цельсия в Фарингейт
 * @param {number} num темп-ра Цельсия
 * @returns {number} темп-ра Фарингейта
 */

function c_to_f(num) {
    return (num * 1.8 + 32).toFixed(1)
}
alert(`Цельсий: ${celc}, Фарингейт: ${c_to_f(celc)}`)
