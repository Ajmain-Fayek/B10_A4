// Notification Generator

function sendNotification(email) {
    const emailArray = email.split("");

    if (typeof email !== "string" || !emailArray.includes("@")) {
        return "Invalid Email";
    } else {
        let count = 0;
        for (let a = 0; a < emailArray.length; a++) {
            if (emailArray[a] === "@") {
                count++;
            }
        }
        if (count > 1) return "Invalid Email";
    }

    const userName = [];
    const domainName = [];
    for (let i = 0; i < emailArray.indexOf("@"); i++) {
        userName.push(emailArray[i]);
    }
    for (let j = emailArray.indexOf("@") + 1; j < emailArray.length; j++) {
        domainName.push(emailArray[j]);
    }

    return `${userName.join("")} sent you an email from ${domainName.join("")}`;
}

// ================
// ** Test Cases **
// ================
const email = "sadia8icloud@gmmail.com";
console.log(sendNotification(email));
