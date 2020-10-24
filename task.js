// Задание 1

function parseCount(num) {
    let parseNum = Number.parseInt(num);
    if (isNaN(parseNum)) {
        throw new Error('Невалидное значение');
    } else {
        return parseNum;
    }
}

function validateCount(num) {
    let parseNum;
    try {
        parseNum = parseCount(num);
        return parseNum;
    } catch (e) {
        return e;
    }

}