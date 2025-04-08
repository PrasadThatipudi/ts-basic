// 1. Returns the sum of two numbers
const competition
function sum(a, b) {
  return a + b;
}

// 2. Capitalizes the first letter of a word
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// 3. Returns the length of each word in the array
function wordLengths(words) {
  return words.map(w => w.length);
}

// 4. Greets a user with a message
function greet(name) {
  return `Hello, ${name}!`;
}

// 5. Multiplies all numbers in an array
function multiplyAll(nums) {
  return nums.reduce((acc, val) => acc * val, 1);
// 6. Returns full name from a user object
function getFullName(user) {
  return `${user.first} ${user.last}`;
}

// 7. Filters products that are in stock
function filterInStock(products) {
  return products.filter(p => p.inStock);
}

// 8. Formats a coordinate object
function formatCoord(coord) {
  return `(${coord.x}, ${coord.y})`;
}

// 9. Logs a message with an optional prefix
function log(message, prefix) {
  console.log(prefix ? `[${prefix}] ${message}` : message);
}

// 10. Gets the average age of users
function averageAge(users) {
  const total = users.reduce((sum, u) => sum + u.age, 0);
  return total / users.length;
}
// 11. Handles different shapes with a kind field
function getArea(shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
}

// 12. Generic function to wrap any value in an array
function wrapInArray(value) {
  return [value];
}

// 13. Logs info about a status using enum-like strings
function handleStatus(status) {
  switch (status) {
    case "success":
      console.log("Success!");
      break;
    case "error":
      console.log("Error occurred.");
      break;
    case "loading":
      console.log("Loading...");
      break;
  }
}

// 14. Accepts a tuple with name and score
function showScore(entry) {
  return `${entry[0]} scored ${entry[1]}`;
}

// 15. Merges two objects
function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
