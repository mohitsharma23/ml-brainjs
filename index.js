const brain = require("brain.js");

const network = new brain.NeuralNetwork();

network.train([
  { input: { r: 1, g: 0.376, b: 0.376 }, output: { dark: 1 } },
  { input: { r: 0.243, g: 0.509, b: 0.282 }, output: { light: 1 } },
  { input: { r: 1, g: 0.188, b: 0.878 }, output: { dark: 1 } },
  { input: { r: 0.204, g: 0.176, b: 1 }, output: { light: 1 } },
  { input: { r: 0.976, g: 1, b: 0.349 }, output: { dark: 1 } },
  { input: { r: 1, g: 1, b: 1 }, output: { light: 1 } },
  { input: { r: 0.996, g: 0.976, b: 0.58 }, output: { light: 1 } }
]);

const result = network.run({ r: 0, g: 1, b: 0.65 });
console.log(result);
