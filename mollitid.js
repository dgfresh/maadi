const geoStream = require('geo-stream');

const obj = { longitude: 116.4079, latitude: 39.9842 };

const projectedObj = geoStream(obj, projectionStream(contextStream));

console.log(projectedObj); // { x: 123456, y: 789012 }
