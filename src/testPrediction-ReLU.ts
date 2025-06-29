#!npx tsx

import { SimpleNetwork } from "./network";

const net = SimpleNetwork.loadFromFile("sequence-learning-relu.json");

const i1 = [1, 2, 3, 4, 5];
const p1 = net.predict(i1);
console.log({ input: i1, prediction: p1 });

const i2 = [2, 3, 4, 5, 6];
const p2 = net.predict(i2);
console.log({ input: i2, prediction: p2 });

const i3 = [3, 4, 5, 6, 7];
const p3 = net.predict(i3);
console.log({ input: i3, prediction: p3 });
