var camelCase = (camelCaseString) => {
    return camelCaseString.split(/[A-Z]/).length;
}

console.log(camelCase(process.argv[2]));