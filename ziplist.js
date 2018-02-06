const testList1 = ['a','b','c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
    let array = [];
    for (i = 0; i < list1.length; i++) {
        array.push(list1[i], list2[i]);
    }
    return array;
}

function zipListTheSimpleWay(list1, list2) {
    return _.flatten(_.zip(list1, list2));
}


console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));

