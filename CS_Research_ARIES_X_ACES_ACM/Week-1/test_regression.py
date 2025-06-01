import numpy as np
import matplotlib.pyplot as plt
from submission import linearRegression

# Generate synthetic linear data
data_size = 100
np.random.seed(0)
X = np.linspace(0, 20, data_size)
true_slope = 3.5
true_intercept = -7
Y = true_slope * X + true_intercept + np.random.normal(0, 8, data_size)

# Reshape X for single feature
X_reshaped = X.reshape(-1, 1)

# Train the regression model
lr = 0.0005  # Reduced learning rate
lambda_ = 0.01
weights = linearRegression(X_reshaped, Y, lr, lambda_)

print('Learned weights:', weights)

# Predict using learned weights
X_b = np.c_[np.ones((X_reshaped.shape[0], 1)), X_reshaped]
Y_pred = X_b @ weights

print('First 5 predictions:', Y_pred[:5])
print('First 5 actual:', Y[:5])

# Plot the results
plt.figure(figsize=(8, 5))
plt.scatter(X, Y, color='blue', label='Data Points')
plt.plot(X, Y_pred, color='red', label='Regression Line')
plt.title('Linear Regression Fit')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend()
plt.grid(True)
plt.show()

# Print mean squared error
mse = np.mean((Y - Y_pred) ** 2)
print(f'Mean Squared Error: {mse:.2f}')
