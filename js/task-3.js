function checkForSpam(message) {
    const bannedWord1 = 'spam';
    const bannedWord2 = 'sale';
    const updatedMessage = message.toLowerCase();

    const hasBannedWord1 = updatedMessage.includes(bannedWord1);
    const hasBannedWord2 = updatedMessage.includes(bannedWord2);

    const hasBannedWords = hasBannedWord1 || hasBannedWord2;
    return hasBannedWords;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
