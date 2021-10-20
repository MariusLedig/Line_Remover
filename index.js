const fs = require('fs')

function getContentFile(path) {
    try {
        var result = fs.readFileSync(path, 'utf8');
        return (result);
    } catch (error) {
        return ('error');
    }
}

function writeContentFile(path, data) {
    fs.writeFile(path, data, function write(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('File written successfully\n');
        }
    });
}

function removeDuplicates(fcontent, scontent) {
    var ftab = fcontent.split('\n');
    var stab = scontent.split('\n');
    var rtab = [];
    var vcounter = 0;

    ftab.forEach(felem => {
        stab.forEach(selem => {
            if (felem == selem) {
                // to nothing because duplicate
            } else {
                vcounter = vcounter + 1;
            }
        });
        if (vcounter == stab.length) {
            rtab.push(felem);
        } else {
            // do nothing duplicate
        }
        vcounter = 0;
    });
    return (rtab.join('\n'));
}

function main() {
    var first_content = getContentFile('./files/file1.txt');
    var second_content = getContentFile('./files/file2.txt');
    var final_content;

    if (first_content == 'error'|| second_content == 'error') {
        console.log('Files are misspelled\n');
        return;
    };
    final_content = removeDuplicates(first_content, second_content);
    writeContentFile('./files/result.txt', final_content);
}

main();