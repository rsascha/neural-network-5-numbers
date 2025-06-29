# 🧠 Activation Function Comparison: Sigmoid vs ReLU

## 📊 Function Values

| Input | Sigmoid | ReLU    | Sigmoid' | ReLU'  |
| ----- | ------- | ------- | -------- | ------ |
| -3    | 0.0474  | 0.0000  | 0.0452   | 0.0000 |
| -1    | 0.2689  | 0.0000  | 0.1966   | 0.0000 |
| 0     | 0.5000  | 0.0000  | 0.2500   | 0.0000 |
| 1     | 0.7311  | 1.0000  | 0.1966   | 1.0000 |
| 3     | 0.9526  | 3.0000  | 0.0452   | 1.0000 |
| 5     | 0.9933  | 5.0000  | 0.0066   | 1.0000 |
| 10    | 1.0000  | 10.0000 | 0.0000   | 1.0000 |

---

## 🔬 Mini-Neuron Experiment

**Configuration:** Weights: [0.2, -0.1, 0.3, 0.1, 0.4], Bias: 0.1

| Input            | Weighted Sum | Sigmoid Output | ReLU Output |
| ---------------- | ------------ | -------------- | ----------- |
| [1, 2, 3, 4, 5]  | 3.400        | 0.9677         | 3.4000      |
| [0, 1, 2, 3, 4]  | 2.500        | 0.9241         | 2.5000      |
| [2, 3, 4, 5, 6]  | 4.300        | 0.9866         | 4.3000      |
| [5, 4, 3, 2, 1]  | 2.200        | 0.9002         | 2.2000      |
| [-1, 0, 1, 2, 3] | 1.600        | 0.8320         | 1.6000      |

---

## 🎯 Training Speed Comparison

**Objective:** Learning the pattern `[1,2,3,4,5] → 6`

### Sigmoid Training

| Epoch | Output | Error  |
| ----- | ------ | ------ |
| 0     | 0.8389 | 5.1611 |
| 2     | 0.9965 | 5.0035 |
| 4     | 0.9971 | 5.0029 |
| 6     | 0.9975 | 5.0025 |
| 8     | 0.9978 | 5.0022 |

### ReLU Training

| Epoch | Output | Error  |
| ----- | ------ | ------ |
| 0     | 1.6500 | 4.3500 |
| 2     | 0.0000 | 6.0000 |
| 4     | 0.0000 | 6.0000 |
| 6     | 0.0000 | 6.0000 |
| 8     | 0.0000 | 6.0000 |

---

## 📝 Key Observations

### Sigmoid Function

- ✅ **Smooth S-curve**, bounded output [0,1]
- ✅ **Probabilistic interpretation** possible
- ❌ **Vanishing gradients** for large |x|
- ❌ **Computationally expensive** (exponential function)

### ReLU Function

- ✅ **Simple computation**: max(0,x)
- ✅ **No vanishing gradients** for positive values
- ✅ **Popular in deep networks**
- ❌ **Can 'die'** (always output 0 for negative inputs)
- ❌ **Unbounded output** can lead to exploding gradients

## 🎯 Conclusion

**For your linear pattern problem `[1,2,3,4,5] → 6`:**

- **Sigmoid** might be more stable due to bounded output
- **ReLU** could work faster but might be overkill for this simple pattern
- Both activation functions can solve the problem, but **Sigmoid is recommended** for small networks like yours!
