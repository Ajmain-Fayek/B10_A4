// Tax calculator function

function calculateTax(income, expenses) {
    if (
        typeof income !== "number" ||
        typeof expenses !== "number" ||
        income < expenses ||
        (income, expenses) < 0
    ) {
        return "Invalid Input";
    } else {
        return (income - expenses) * 0.2;
    }
}

// ================
// ** Test Cases **
// ================
console.log(calculateTax(true, 1753));
