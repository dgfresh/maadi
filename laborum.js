let crosshair_y = 50; // Initial position of crosshair_y
const height = 100; // Maximum allowable height

// Adjusting crosshair_y to stay within the range [0, height]
crosshair_y = Math.max(0, Math.min(crosshair_y, height));

console.log(crosshair_y); // Output: 50 (unchanged, since it's within the range)

// Now, if crosshair_y were to be outside the range:
crosshair_y = 120; // Setting crosshair_y to a value greater than height

// Adjusting crosshair_y again
crosshair_y = Math.max(0, Math.min(crosshair_y, height));

console.log(crosshair_y); // Output: 100 (since it's capped at the maximum value, height)
