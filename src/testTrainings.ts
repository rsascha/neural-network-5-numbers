#!npx tsx

import { SimpleNetwork } from "./network";

const net = new SimpleNetwork(5, 3);

for (let i = 0; i < 10; i++) {
  const input = [1, 2, 3, 4, 5];
  net.train(input, 6);
  const prediction = net.predict(input);
  console.log(`Iteration ${i + 1}:`, { input, prediction });
}

for (let i = 0; i < 20; i++) {
  const input = [2, 3, 4, 5, 6];
  net.train(input, 7);
  const prediction = net.predict(input);
  console.log(`Iteration ${i + 1}:`, { input, prediction });
}
