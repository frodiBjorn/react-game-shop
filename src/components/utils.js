export const calcTotalPrice = (items) => {
    return items.reduce((acc, game) => (acc += game.price), 0);
};

export const getNoun = (
    number,
    one = "товар",
    two = "товара",
    five = "товаров"
) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
};
