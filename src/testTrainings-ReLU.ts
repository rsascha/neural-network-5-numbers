#!npx tsx

import { relu, reluDerivative } from "./activation";
import { SimpleNetwork } from "./network";

const net = new SimpleNetwork(5, 3, relu, reluDerivative);

console.log("Training des neuronalen Netzwerks auf Sequenzmuster:");

// Trainingsdaten
const trainingData = [
  { input: [1, 2, 3, 4, 5], target: 6 },
  { input: [2, 3, 4, 5, 6], target: 7 },
  { input: [3, 4, 5, 6, 7], target: 8 },
  { input: [4, 5, 6, 7, 8], target: 9 },
];

// Training über mehrere Epochen
const epochs = 100000;
for (let epoch = 0; epoch < epochs; epoch++) {
  let totalError = 0;

  // Trainiere auf beiden Mustern
  for (const data of trainingData) {
    const prediction = net.predict(data.input);
    const error = Math.abs(prediction - data.target);
    totalError += error;

    // Training step
    net.train(data.input, data.target);
  }

  // Zeige Fortschritt alle 10 Epochen
  if ((epoch + 1) % 10 === 0) {
    console.log(`\nEpoch ${epoch + 1}:`);
    console.log(
      `Durchschnittsfehler: ${(totalError / trainingData.length).toFixed(4)}`
    );

    // Test beide Muster
    for (const data of trainingData) {
      const prediction = net.predict(data.input);
      const error = Math.abs(prediction - data.target);
      console.log(
        `  ${data.input} → Vorhersage: ${prediction.toFixed(3)}, Ziel: ${
          data.target
        }, Fehler: ${error.toFixed(3)}`
      );
    }
  }
}

console.log("\n==================================================");
console.log("Finales Training abgeschlossen!");
console.log("\nTeste gelernte Muster:");

// Finale Tests
for (const data of trainingData) {
  const prediction = net.predict(data.input);
  const error = Math.abs(prediction - data.target);
  console.log(
    `${data.input} → Vorhersage: ${prediction.toFixed(3)}, Ziel: ${
      data.target
    }, Fehler: ${error.toFixed(3)}`
  );
}

// Test auf ähnliche Sequenzen (Generalisierung)
console.log("\nTeste Generalisierung auf ähnliche Sequenzen:");
const testSequences = [
  [0, 1, 2, 3, 4], // Sollte ~5 vorhersagen
  [3, 4, 5, 6, 7], // Sollte ~8 vorhersagen
  [1, 1, 2, 3, 5], // Fibonacci-ähnlich
];

for (const seq of testSequences) {
  const prediction = net.predict(seq);
  console.log(`${seq} → Vorhersage: ${prediction.toFixed(3)}`);
}

net.saveToFile("sequence-learning-relu.json");
