class Sorter {

    constructor() {
        this.myArray = [];
        const COMPARE_NUMBER = (left, right) => left - right;
        this.compareFunc = COMPARE_NUMBER;
    }

    add(element) {
        this.myArray.push(element);
    }

    at(index) {
        return this.myArray[index];
    }

    get length() {
        return this.myArray.length;
    }

    toArray() {
        return this.myArray;
    }

    sort(indices) {

        indices.sort(this.COMPARE_NUMBER);
        var tempMyArray = new Array(0), i;

        for (i = 0; i < indices.length; i++){
            tempMyArray.push(this.myArray[indices[i]]);
        }

        tempMyArray.sort(this.compareFunc);

        for (i = 0; i < indices.length; i++){
            this.myArray[indices[i]] = tempMyArray[i];
        }

    }

    setComparator(compareFunction) {
        this.compareFunc = compareFunction;
    }
}

module.exports = Sorter;