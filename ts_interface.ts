// 1. Print user info
const printUser = (user) => {
  console.log(`${user.name} is ${user.age} years old.`);
};

// 2. Get total price of cart items
const getTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// 3. Log task status
const logStatus = (status) => {
  if (status === "pending") console.log("Task is pending...");
  if (status === "in_progress") console.log("Task is in progress...");
  if (status === "done") console.log("Task completed!");
};

// 4. Calculate area of a shape
const getArea = (shape) => {
  switch (shape.kind) {
    case "square":
      return shape.size ** 2;
    case "triangle":
      return 0.5 * shape.base * shape.height;
  }
};

// 5. Format a point on 2D or 3D space
const formatPoint = (point) => {
  if ("z" in point) return `(${point.x}, ${point.y}, ${point.z})`;
  return `(${point.x}, ${point.y})`;
};

// 6. Create a greeting from a person and a greeting style
const greet = (person, style) => {
  switch (style) {
    case "formal":
      return `Good day, ${person.name}.`;
    case "casual":
      return `Hey ${person.name}!`;
    case "funny":
      return `Yo ${person.name}, what’s up!`;
  }
};
