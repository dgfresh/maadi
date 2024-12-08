// Assuming fragmentByEnd is an object with some properties
var fragmentByEnd = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

// Iterating over each property in fragmentByEnd
for (var k in fragmentByEnd) {
    if (fragmentByEnd.hasOwnProperty(k)) {  // Ensure k is a direct property of fragmentByEnd
        console.log(k);       // Output the current key
        console.log(fragmentByEnd[k]);  // Output the corresponding value
    }
}
