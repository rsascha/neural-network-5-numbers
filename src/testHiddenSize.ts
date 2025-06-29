#!npx tsx

import { SimpleNetwork } from "./network";

for (let hiddenSize = 1; hiddenSize <= 10; hiddenSize++) {
  const net = new SimpleNetwork(5, hiddenSize);
  const input = [1, 2, 3, 4, 5];

  for (let i = 0; i < 1000; i++) {
    net.train(input, 6);
  }

  const prediction = net.predict(input);
  console.log({ hiddenSize, prediction });
}

/**
# 1. run

$ npx tsx testHiddenSize.ts
{ hiddenSize: 1, prediction: 5.999999999999998 }
{ hiddenSize: 2, prediction: 5.999999999999999 }
{ hiddenSize: 3, prediction: 5.999999999999998 }
{ hiddenSize: 4, prediction: 6 }                  <-- good
{ hiddenSize: 5, prediction: 6 }
{ hiddenSize: 6, prediction: 6 }
{ hiddenSize: 7, prediction: 6 }
{ hiddenSize: 8, prediction: 6 }
{ hiddenSize: 9, prediction: 6 }
{ hiddenSize: 10, prediction: 6 }

# 2. run

$ npx tsx testHiddenSize.ts
{ hiddenSize: 1, prediction: 5.9999999999999964 }
{ hiddenSize: 2, prediction: 5.999999999999999 }
{ hiddenSize: 3, prediction: 6 }
{ hiddenSize: 4, prediction: 5.999999999999999 }
{ hiddenSize: 5, prediction: 6 }                    <-- better
{ hiddenSize: 6, prediction: 6 }
{ hiddenSize: 7, prediction: 6 }
{ hiddenSize: 8, prediction: 6 }
{ hiddenSize: 9, prediction: 6 }
{ hiddenSize: 10, prediction: 6 }

hiddenSize: 5 gives the best prediction of 6, which is the expected output for the input [1, 2, 3, 4, 5].
 */
