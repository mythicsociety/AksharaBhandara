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

export function getYear(filePath) {
    let fileName = getFileNameFromPath(filePath);
    let indx = fileName.indexOf("_");
    let imageYear = new Date().getFullYear();

    if (indx !== -1) {
        imageYear = fileName.substring(0, indx);
    }
    return imageYear
}