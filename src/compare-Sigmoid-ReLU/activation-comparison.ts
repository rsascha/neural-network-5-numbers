import {
  sigmoid,
  sigmoidDerivative,
  relu,
  reluDerivative,
} from "../activation/activation";

/**
 * Simple comparison between Sigmoid and ReLU activation functions.
 * This example shows how different activation functions affect network behavior.
 */

console.log("# 🧠 Activation Function Comparison: Sigmoid vs ReLU\n");

// Test verschiedene Eingabewerte
const testInputs = [-3, -1, 0, 1, 3, 5, 10];

console.log("## 📊 Function Values\n");
console.log("| Input | Sigmoid | ReLU   | Sigmoid' | ReLU' |");
console.log("|-------|---------|--------|----------|-------|");

testInputs.forEach((x) => {
  const sigmoidVal = sigmoid(x);
  const reluVal = relu(x);
  const sigmoidDeriv = sigmoidDerivative(x);
  const reluDeriv = reluDerivative(x);

  console.log(
    `| ${x.toString().padStart(5)} | ${sigmoidVal.toFixed(4)} | ${reluVal
      .toFixed(4)
      .padStart(6)} | ${sigmoidDeriv.toFixed(4)}   | ${reluDeriv.toFixed(4)} |`
  );
});

console.log("\n---\n");

// Praktischer Vergleich: Mini-Neuron mit beiden Aktivierungen
class MiniNeuron {
  weights: number[];
  bias: number;

  constructor() {
    // Fixe Gewichte für reproduzierbare Ergebnisse
    this.weights = [0.2, -0.1, 0.3, 0.1, 0.4];
    this.bias = 0.1;
  }

  forward(inputs: number[], activationFn: (x: number) => number): number {
    const sum = this.weights.reduce(
      (acc, w, i) => acc + w * inputs[i],
      this.bias
    );
    return activationFn(sum);
  }
}

console.log("## 🔬 Mini-Neuron Experiment\n");
console.log(
  "**Configuration:** Weights: [0.2, -0.1, 0.3, 0.1, 0.4], Bias: 0.1\n"
);

const neuron = new MiniNeuron();
const testCases = [
  [1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4],
  [2, 3, 4, 5, 6],
  [5, 4, 3, 2, 1],
  [-1, 0, 1, 2, 3],
];

console.log(
  "| Input             | Weighted Sum | Sigmoid Output | ReLU Output |"
);
console.log(
  "|-------------------|--------------|----------------|-------------|"
);

testCases.forEach((input) => {
  const weightedSum = neuron.weights.reduce(
    (acc, w, i) => acc + w * input[i],
    neuron.bias
  );
  const sigmoidOutput = neuron.forward(input, sigmoid);
  const reluOutput = neuron.forward(input, relu);

  console.log(
    `| [${input.join(", ")}] | ${weightedSum
      .toFixed(3)
      .padStart(12)} | ${sigmoidOutput.toFixed(4).padStart(14)} | ${reluOutput
      .toFixed(4)
      .padStart(11)} |`
  );
});

console.log("\n---\n");

// Training-Simulation: Wie schnell lernen sie?
console.log("## 🎯 Training Speed Comparison\n");
console.log("**Objective:** Learning the pattern `[1,2,3,4,5] → 6`\n");

function simulateTraining(
  activationFn: (x: number) => number,
  derivativeFn: (x: number) => number,
  name: string
) {
  let weights = [0.1, 0.2, 0.1, 0.15, 0.05];
  let bias = 0.0;
  const learningRate = 0.1;
  const input = [1, 2, 3, 4, 5];
  const target = 6;

  console.log(`### ${name} Training\n`);
  console.log("| Epoch | Output | Error  |");
  console.log("|-------|--------|--------|");

  for (let epoch = 0; epoch < 10; epoch++) {
    // Forward pass
    const weightedSum = weights.reduce((acc, w, i) => acc + w * input[i], bias);
    const activation = activationFn(weightedSum);
    const error = activation - target;

    // Backward pass (simplified)
    const outputGradient = error * derivativeFn(weightedSum);

    // Update weights
    weights = weights.map(
      (w, i) => w - learningRate * outputGradient * input[i]
    );
    bias = bias - learningRate * outputGradient;

    if (epoch % 2 === 0) {
      console.log(
        `| ${epoch.toString().padStart(5)} | ${activation.toFixed(
          4
        )} | ${Math.abs(error).toFixed(4)} |`
      );
    }
  }
  console.log();
}

simulateTraining(sigmoid, sigmoidDerivative, "Sigmoid");
simulateTraining(relu, reluDerivative, "ReLU");

console.log("---\n");

console.log("## 📝 Key Observations\n");
console.log("### Sigmoid Function");
console.log("- ✅ **Smooth S-curve**, bounded output [0,1]");
console.log("- ✅ **Probabilistic interpretation** possible");
console.log("- ❌ **Vanishing gradients** for large |x|");
console.log("- ❌ **Computationally expensive** (exponential function)\n");

console.log("### ReLU Function");
console.log("- ✅ **Simple computation**: max(0,x)");
console.log("- ✅ **No vanishing gradients** for positive values");
console.log("- ✅ **Popular in deep networks**");
console.log("- ❌ **Can 'die'** (always output 0 for negative inputs)");
console.log("- ❌ **Unbounded output** can lead to exploding gradients\n");

console.log("## 🎯 Conclusion");
console.log("**For your linear pattern problem `[1,2,3,4,5] → 6`:**");
console.log("- **Sigmoid** might be more stable due to bounded output");
console.log(
  "- **ReLU** could work faster but might be overkill for this simple pattern"
);
console.log(
  "- Both activation functions can solve the problem, but **Sigmoid is recommended** for small networks like yours!"
);
