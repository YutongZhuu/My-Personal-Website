const fs = require('fs');
const path = require('path');
const content = [];

function loadContent() {
    return (new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '..', 'data', 'about-me-intro.txt'), 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            content.push({
                id: 'about-me-intro',
                content: data
            })
            console.log(content)
            resolve();

        });
    }))
}





module.exports = {
    loadContent,
    content
};

