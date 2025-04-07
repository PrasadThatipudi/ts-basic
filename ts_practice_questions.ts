// 1. Create a type alias for a union of "admin" | "user" | "guest"
// Parameters: role
// Test cases: isValidRole("admin") => true, isValidRole("manager") => false
const isValidRole = function (role) {};

// 2. Define an interface for a Car with make, model, and year
// Parameters: car
// Test cases: getCarDescription({ make: "Toyota", model: "Camry", year: 2020 }) => "Toyota Camry (2020)"
const getCarDescription = function (car) {};

// 3. Use an enum to represent weekdays (Mon–Sun)
// Parameters: day
// Test cases: isWeekend(Weekday.Saturday) => true, isWeekend(Weekday.Wednesday) => false
const isWeekend = function (day) {};

// 4. Create a function that takes a tuple of [number, string]
// Parameters: data
// Test cases: formatTuple([5, "apples"]) => "5 apples"
const formatTuple = function (data) {};

// 5. Define a type for a function that takes two numbers and returns a number
// Parameters: op
// Test cases: calculate(add, 2, 3) => 5
const calculate = function (op, a, b) {};

// 6. Create a discriminated union for shapes: Circle and Rectangle
// Parameters: shape
// Test cases: getArea({ kind: "circle", radius: 5 }) => 78.54 (approx)
const getArea = function (shape) {};

// 7. Use generics to wrap a value in an array
// Parameters: value
// Test cases: wrapInArray(5) => [5], wrapInArray("hello") => ["hello"]
const wrapInArray = function (value) {};

// 8. Create an interface that extends another interface
// Parameters: employee
// Test cases: getFullName({ firstName: "John", lastName: "Doe", position: "Manager" }) => "John Doe"
const getFullName = function (employee) {};

// 9. Use keyof to get a property from an object dynamically
// Parameters: obj, key
// Test cases: getProp({ a: 1, b: 2 }, "a") => 1
const getProp = function (obj, key) {};

// 10. Create a mapped type that makes all properties of an object optional
// Parameters: obj
// Test cases: makeOptional({ a: 1, b: 2 }) => { a?: 1, b?: 2 }
const makeOptional = function (obj) {};
