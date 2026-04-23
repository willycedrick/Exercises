const names = ["william", "jonathan", "alexander", "cedrick", "charlie", "willy", "patrick"];

const processedNames = names
    .filter(name => name.length > 5)
    .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());

console.log(processedNames); 

