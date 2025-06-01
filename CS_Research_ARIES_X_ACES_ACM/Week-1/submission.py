import numpy as np

def linearRegression(X: np.array, Y: np.array, lr: float, lambda_: float): # type: ignore
    """
    Parameters:
    - X: Input feature matrix (NumPy array)
    - Y: Target vector (NumPy array)
    - lr: Learning rate (float)
    - lambda_: L1 regularization coefficient (float)

    Returns:
    - weights: Learned model parameters
    """

    # Add bias term to X
    X_b = np.c_[np.ones((X.shape[0], 1)), X]

    n_samples, n_features = X_b.shape

    # Initialize weights
    weights = np.zeros(n_features)

    # Number of iterations (epochs)
    n_iters = 1000
    for _ in range(n_iters):
        # Prediction
        y_pred = X_b @ weights
        # Compute gradient (MSE + L1 regularization)
        gradient = (2 / n_samples) * (X_b.T @ (y_pred - Y)) + lambda_ * np.sign(weights)
        # Update weights
        weights -= lr * gradient

    return weights
