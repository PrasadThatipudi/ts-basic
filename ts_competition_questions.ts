// 1. Returns the square of a number
function square(n) {
  return n * n;
}

// 2. Greets a user with their name and age
function greetUser(user) {
  return `Hi ${user.name}, age ${user.age}`;
}

// 3. Filters only strings from an array
function filterStrings(arr) {
  return arr.filter(item => typeof item === "string");
}

// 4. Logs the details of a product
function logProduct(product) {
  console.log(`${product.name} - $${product.price} - ${product.inStock ? "In Stock" : "Out of Stock"}`);
}

// 5. Wraps a value in an array (generic)
function wrap(value) {
  return [value];
}

// 6. Merges two objects
function mergeObjects(a, b) {
  return { ...a, ...b };
}

// 7. Calculates area based on shape type
function calculateArea(shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

// 8. Handles status values
function handleStatus(status) {
  if (status === "success") return "✅ Success";
  if (status === "error") return "❌ Error";
  return "⏳ Loading";
}

// 9. Displays a score entry (tuple)
function showEntry(entry) {
  const [name, score] = entry;
  return `${name} scored ${score}`;
}

// 10. Sorts an array of tasks by priority
function sortTasks(tasks) {
  return tasks.sort((a, b) => b.priority - a.priority);
}
