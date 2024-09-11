// Calculate Admission Final Score

function calculateFinalScore(obj) {
    if (
        typeof obj !== "object" ||
        typeof obj.name !== "string" ||
        typeof obj.testScore !== "number" ||
        obj.testScore > 50 ||
        typeof obj.schoolGrade !== "number" ||
        obj.schoolGrade > 30 ||
        typeof obj.isFFamily !== "boolean"
    ) {
        return "Invalid Input";
    } else {
        const result = obj.testScore + obj.schoolGrade + (obj.isFFamily ? 20 : 0);
        if (result >= 80) {
            return true;
        } else {
            return false;
        }
    }
}

// ================
// ** Test Cases **
// ================
const score = {
    name: "Rajib",
    testScore: 50,
    schoolGrade: 30,
    isFFamily: false,
};

// const score = [];
console.log(calculateFinalScore(score));
