interface ParseNumber {
    value: number;
}

export function parseApiNumber(value: ParseNumber) {
    const number = String(value);
    const formatedNumber = `${number.substring(
        0,
        number.length - 2
    )}.${number.substring(number.length - 2)}`;
    return parseFloat(formatedNumber);
}
