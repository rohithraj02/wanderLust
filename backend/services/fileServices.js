const fs = require('fs');

// function to read file
function getDataFromFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return error;
    }
}

// function to write data to file
function writeDataToFile(data, filePath) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

module.exports = {
    getDataFromFile,
    writeDataToFile
};
