// 1. Returns the square of a number
const square = (n) => n * n;

// 2. Greets a user with their name and age
const greetUser = (user) => `Hi ${user.name}, age ${user.age}`;

// 3. Filters only strings from an array
const filterStrings = (arr) => arr.filter(item => typeof item === "string");

// 4. Logs the details of a product
const logProduct = (product) => {
  console.log(`${product.name} - $${product.price} - ${product.inStock ? "In Stock" : "Out of Stock"}`);
};

// 5. Wraps a value in an array (generic)
const wrap = (value) => [value];

// 6. Merges two objects
const mergeObjects = (a, b) => ({ ...a, ...b });

// 7. Calculates area based on shape type
const calculateArea = (shape) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
};

// 8. Handles status values
const handleStatus = (status) => {
  if (status === "success") return "✅ Success";
  if (status === "error") return "❌ Error";
  return "⏳ Loading";
};

// 9. Displays a score entry (tuple)
const showEntry = (entry) => {
  const [name, score] = entry;
  return `${name} scored ${score}`;
};

// 10. Sorts an array of tasks by priority
const sortTasks = (tasks) => tasks.sort((a, b) => b.priority - a.priority);
