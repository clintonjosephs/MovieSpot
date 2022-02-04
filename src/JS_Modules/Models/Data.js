export default class Data {
    static start = 0;
    static end = 24;

    static allData;

    static chunkArray = (array) => {
        let result = []
        let arrayCopy = [...array]
        while (arrayCopy.length > 0) {
            result.push(arrayCopy.splice(0, Data.end))
        }
        Data.allData = result
    }
}