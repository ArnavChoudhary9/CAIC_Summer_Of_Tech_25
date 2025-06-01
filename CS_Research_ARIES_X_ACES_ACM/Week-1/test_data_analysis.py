import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Generate a simple synthetic dataset for demonstration
np.random.seed(42)
X = np.linspace(0, 10, 50)
Y = 2.5 * X + np.random.normal(0, 3, 50)

data = pd.DataFrame({'X': X, 'Y': Y})

# Analyze the dataset
print('--- Data Head ---')
print(data.head())
print('\n--- Data Description ---')
print(data.describe())

# Visualize the data
plt.figure(figsize=(8, 5))
plt.scatter(data['X'], data['Y'], color='blue', label='Data Points')
plt.title('Scatter Plot of X vs Y')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend()
plt.grid(True)
plt.show()
