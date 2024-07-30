module.exports = function toReadable(number) {
    const single = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',

    }
    const doubleDigit = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    const prefixes = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    const suffixes = {
        1: 'hundred',
        2: 'thousand',
        3: 'million',
        4: 'billon',
        5: 'trillion'

    }

    const array = String(number).split('').map(i => Number(i))
    console.log(Number([array[1], array[2]].join('')))
    if (number < 10) {
        return single[number];
    }
    if (number > 9 && number < 20) {
        return doubleDigit[number]
    }
    if (array.length === 2 && array[1] === 0) {
        return prefixes[number]
    }
    if (array.length === 2 && array[1] !== 0) {
        return prefixes[number - array[1]] + ' ' + single[array[1]]
    }
    if (array.length === 3) {
        if (array[1] === 0 && array[2] === 0) {
            return single[array[0]] + ' hundred'

        }
        if (array[1] === 0 && array[2] !== 0) {
            return single[array[0]] + ' hundred ' + single[array[2]]
        }
        if (array[1] !== 0 && Number([array[1], array[2]].join('')) < 20 && Number([array[1], array[2]].join('')) > 9) {
            return single[array[0]] + ' hundred ' + doubleDigit[Number([array[1], array[2]].join(''))]
        }
        if (array[1] !== 0 && array[2] === 0 && Number([array[1], array[2]].join('')) > 19) {
            return single[array[0]] + ' hundred ' + prefixes[Number([array[1], array[2]].join(''))]
        }
        if (array[1] !== 0 && array[2] !== 0 && Number([array[1], array[2]].join('')) > 20) {
            return single[array[0]] + ' hundred ' + prefixes[Number([array[1], array[2]].join('')) - array[2]] + ' ' + single[array[2]]
        }
    }
}
