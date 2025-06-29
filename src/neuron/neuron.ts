import { sigmoid } from "../activation";

/**
 * Neuron class representing a single neuron in a neural network.
 * This class initializes weights and bias randomly,
 * and provides a method to compute the output
 * using the sigmoid activation function.
 */
export class Neuron {
  weights: number[];
  bias: number;

  /**
   * Constructs a Neuron instance with a specified number of inputs.
   * Initializes weights and bias randomly within the range [-1, 1].
   * @param inputCount - The number of inputs to the neuron.
   */
  constructor(public inputCount: number) {
    this.weights = Array(inputCount)
      .fill(0)
      .map(() => Math.random() * 2 - 1);
    this.bias = Math.random() * 2 - 1;
  }

  /**
   * Computes the output of the neuron for given inputs.
   * It calculates the weighted sum of inputs plus bias,
   * and applies the sigmoid activation function.
   * @param inputs - Array of input values.
   * @returns The output of the neuron after applying the sigmoid function.
   */
  forward(inputs: number[]): number {
    const sum = this.weights.reduce(
      (acc, w, i) => acc + w * inputs[i],
      this.bias
    );
    return sigmoid(sum);
  }
}
