export function getFileNameFromPath(filePath) {
    let indx = filePath.lastIndexOf("/");
    // if (indx === -1) {
    //     return "unknown";
    // }

    let result = filePath.substring(indx + 1);
    let dotIdx = result.lastIndexOf(".");
    // if (dotIdx === -1) {
    //     return "unknown";
    // }

    let fileName = result.substring(0, dotIdx);
    return fileName;
}

export function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

export function groupByCentury(array, key) {
    const result = {};
    array.forEach(item => {
        // get the century from the year
        const century = Math.floor(item[key] / 100) + 1;
        // use the century as a key in the result object
        if (!result[century]) {
            result[century] = [];
        }
        result[century].push(item);
    });
    return result;
}

export function getYear(filePath) {
    let fileName = getFileNameFromPath(filePath);
    let indx = fileName.indexOf("_");
    let imageYear = new Date().getFullYear();

    if (indx !== -1) {
        imageYear = fileName.substring(0, indx);
    }
    return imageYear
}

export function getRandomItemsFromArray(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

export function getRandomItemFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}