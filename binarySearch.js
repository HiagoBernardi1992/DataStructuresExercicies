function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length -1;
    let midle = Math.floor((start + end) / 2);
    while(start <= end) {
        if(arr[midle] === elem) break;
        if(elem < arr[midle]) end = midle - 1;
        else start = midle + 1;
        midle = Math.floor((start + end) / 2);
    }
    return arr[midle] === elem ? midle : -1;
}