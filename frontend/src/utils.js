export function processData(allText) {
    let record_num = 5;  // or however many elements there are in each row
    let allTextLines = allText.split(/\r\n|\n/);
    let entries = allTextLines[0].split(',');
    let lines = [];

    let headings = entries.splice(0,record_num);
    while (entries.length>0) {
        let tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
        }
        lines.push(tarr);
    }

    return lines
}