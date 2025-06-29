#!npx tsx

import { SimpleNetwork } from "./network";

console.log(
  "Testing different hiddenSize values with multiple random initializations:",
  "\nhiddenSize: 1-9, 5 inputs, 100 training iterations per run, 5 runs per hiddenSize",
  "\n"
);

for (let hiddenSize = 1; hiddenSize <= 9; hiddenSize++) {
  const predictions = [];

  for (let run = 0; run < 5; run++) {
    const net = new SimpleNetwork(5, hiddenSize);
    const input = [1, 2, 3, 4, 5];

    for (let i = 0; i < 100; i++) {
      net.train(input, 6);
    }

    const prediction = net.predict(input);
    predictions.push(prediction);
  }

  const minPrediction = Math.min(...predictions);
  const maxPrediction = Math.max(...predictions);

  console.log(
    `hiddenSize: ${hiddenSize} Min: ${minPrediction.toFixed(
      15
    )} Max: ${maxPrediction.toFixed(15)}`
  );
}

/**
$ npx tsx testMultipleRuns.ts 
Testing different hiddenSize values with multiple random initializations: 
hiddenSize: 1-9, 5 inputs, 100 training iterations per run, 5 runs per hiddenSize 

hiddenSize: 1 Min: 5.999843379475477 Max: 5.999999998942650
hiddenSize: 2 Min: 5.999815927040473 Max: 5.999999999999998
hiddenSize: 3 Min: 5.999999999999999 Max: 6.000000000000000
hiddenSize: 4 Min: 5.999999999999998 Max: 6.000000000000000
hiddenSize: 5 Min: 5.999999999999998 Max: 6.000000000000000
hiddenSize: 6 Min: 5.999999999999999 Max: 6.000000000000000
hiddenSize: 7 Min: 6.000000000000000 Max: 6.000000000000001
hiddenSize: 8 Min: 5.999999999999999 Max: 6.000000000000001
hiddenSize: 9 Min: 6.000000000000000 Max: 6.000000000000001
 */
