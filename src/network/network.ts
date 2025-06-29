import { sigmoid, sigmoidDerivative } from "../activation";

/**
 * Simple neural network with one hidden layer and one output.
 * This network is designed to predict a single output based on five input values.
 * It uses a single hidden layer with a sigmoid activation function.
 * The network is trained using backpropagation.
 * @param inputSize - Number of input features.
 * @param hiddenSize - Number of neurons in the hidden layer.
 */
export class SimpleNetwork {
  weights: number[][];
  biases: number[];
  learningRate = 0.1;

  constructor(public inputSize: number, public hiddenSize: number) {
    // Input → Hidden: Matrix mit inputSize × hiddenSize
    this.weights = [];
    for (let h = 0; h < hiddenSize; h++) {
      this.weights[h] = Array(inputSize)
        .fill(0)
        .map(() => Math.random() * 2 - 1);
    }

    // Hidden → Output: Array mit hiddenSize Gewichten
    this.weights[hiddenSize] = Array(hiddenSize)
      .fill(0)
      .map(() => Math.random() * 2 - 1);

    this.biases = [
      // Ein Bias für jedes versteckte Neuron
      ...Array(hiddenSize)
        .fill(0)
        .map(() => Math.random() * 2 - 1),
      // Ein Bias für die Ausgabe
      Math.random() * 2 - 1,
    ];
  }

  predict(inputs: number[]): number {
    // Berechne alle versteckten Neuronen
    const hiddenValues = [];
    const hiddenActivations = [];

    for (let h = 0; h < this.hiddenSize; h++) {
      let sum = this.biases[h];
      for (let i = 0; i < inputs.length; i++) {
        sum += inputs[i] * this.weights[h][i];
      }
      hiddenValues[h] = sum;
      hiddenActivations[h] = sigmoid(sum);
    }

    // Berechne Ausgabe
    let output = this.biases[this.hiddenSize]; // Output bias
    for (let h = 0; h < this.hiddenSize; h++) {
      output += hiddenActivations[h] * this.weights[this.hiddenSize][h];
    }

    return output;
  }

  train(inputs: number[], target: number): void {
    // Forward Pass (gleich wie predict, aber wir brauchen die Zwischenwerte)
    const hiddenValues = [];
    const hiddenActivations = [];

    for (let h = 0; h < this.hiddenSize; h++) {
      let sum = this.biases[h];
      for (let i = 0; i < inputs.length; i++) {
        sum += inputs[i] * this.weights[h][i];
      }
      hiddenValues[h] = sum;
      hiddenActivations[h] = sigmoid(sum);
    }

    let output = this.biases[this.hiddenSize];
    for (let h = 0; h < this.hiddenSize; h++) {
      output += hiddenActivations[h] * this.weights[this.hiddenSize][h];
    }

    // Fehler berechnen
    const error = output - target;

    // Backpropagation
    const outputGradient = error;

    // Gradienten für versteckte Schicht berechnen
    const hiddenGradients = [];
    for (let h = 0; h < this.hiddenSize; h++) {
      hiddenGradients[h] =
        sigmoidDerivative(hiddenValues[h]) *
        outputGradient *
        this.weights[this.hiddenSize][h];
    }

    // Gewichte und Biases anpassen
    // Hidden → Output Gewichte
    for (let h = 0; h < this.hiddenSize; h++) {
      this.weights[this.hiddenSize][h] -=
        this.learningRate * outputGradient * hiddenActivations[h];
    }

    // Input → Hidden Gewichte
    for (let h = 0; h < this.hiddenSize; h++) {
      for (let i = 0; i < inputs.length; i++) {
        this.weights[h][i] -=
          this.learningRate * hiddenGradients[h] * inputs[i];
      }
    }

    // Biases anpassen
    for (let h = 0; h < this.hiddenSize; h++) {
      this.biases[h] -= this.learningRate * hiddenGradients[h];
    }
    this.biases[this.hiddenSize] -= this.learningRate * outputGradient;
  }
}
