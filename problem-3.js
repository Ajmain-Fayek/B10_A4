// Checking Digits inside a Name

function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalide Input";
    } else {
        for (let i = 0; i < name.length; i++) {
            if (isNaN(name[i]) === false) {
                return true;
            }
        }
        return false;
    }
}

// ================
// ** Test Cases **
// ================
const a = "Name2024";
console.log(checkDigitsInName(a));
