/**
 * Sigmoid activation function.
 * This function takes a number as input and returns a value between 0 and 1.
 * It is commonly used in neural networks to introduce non-linearity.
 * @param x - The input value to the sigmoid function.
 * @returns The output value of the sigmoid function, which is between 0 and 1.
 */
export function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

/**
 * Derivative of the sigmoid function.
 * This function calculates the derivative of the sigmoid function at a given point.
 * It is used in backpropagation to update weights in neural networks.
 * @param x - The input value to the sigmoid function.
 * @returns The derivative of the sigmoid function at the input value.
 */
export function sigmoidDerivative(x: number): number {
  const s = sigmoid(x);
  return s * (1 - s);
}

/**
 * ReLU (Rectified Linear Unit) activation function.
 * This function returns the input if positive, zero otherwise.
 * It is widely used in modern neural networks due to its simplicity and effectiveness.
 * @param x - The input value to the ReLU function.
 * @returns The output value: max(0, x)
 */
export function relu(x: number): number {
  return Math.max(0, x);
}

/**
 * Derivative of the ReLU function.
 * Returns 1 for positive inputs, 0 for negative inputs.
 * Note: Technically undefined at x=0, but we use 0 by convention.
 * @param x - The input value to the ReLU function.
 * @returns The derivative: 1 if x > 0, else 0
 */
export function reluDerivative(x: number): number {
  return x > 0 ? 1 : 0;
}
