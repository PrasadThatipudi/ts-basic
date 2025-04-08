// 1. Returns the square of a number
const square = (n: number): number => n * n;

type User = {
  name: string;
  age: number;
};

// 2. Greets a user with their name and age

const greetUser = (user: User) => `Hi ${user.name}, age ${user.age}`;

// 3. Filters only strings from an array
const filterStrings = (arr: string[]) =>
  arr.filter((item) => typeof item === "string");

// 4. Logs the details of a product
type Product = { price: number; name: string; inStock: Boolean };
const logProduct = (product: Product) => {
  console.log(
    `${product.name} - $${product.price} - ${
      product.inStock ? "In Stock" : "Out of Stock"
    }`
  );
};

// 5. Wraps a value in an array (generic)
const wrap = (value) => [value];

// 6. Merges two objects
const mergeObjects = (a: Object, b: Object): Object => ({ ...a, ...b });

// 7. Calculates area based on shape type
type Circle = { radius: number };
type Rectangle = { width: number; height: number };

// interface Shape {
//   kind: Circle | Rectangle;
// }
interface Shape {
  kind: "circle" | "rectangle";
  radius: number;
  width: number;
  height: number;
}

const calculateArea = (shape: Shape) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
};

// 8. Handles status values
type Status = "success" | "error";

const handleStatus = (status: Status) => {
  if (status === "success") return "✅ Success";
  if (status === "error") return "❌ Error";
  return "⏳ Loading";
};

// 9. Displays a score entry (tuple)
type Entry = [string, number];

const showEntry = (entry: Entry) => {
  const [name, score] = entry;
  return `${name} scored ${score}`;
};

// 10. Sorts an array of tasks by priority
type Task = { priority: number };
type Tasks = Task[];
const sortTasks = (tasks: Tasks) =>
  tasks.sort((a, b) => b.priority - a.priority);
