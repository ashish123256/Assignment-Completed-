function getUniqueValues(arr){
    const uniqueValuesSet = new Set(arr);
    const uniqueValuesArray = Array.from(uniqueValuesSet);

    return uniqueValuesArray;
}


const array = [1,2,3,2,4,5,3,6,1,6];
const uniqueArray = getUniqueValues(array);

console.log(uniqueArray);