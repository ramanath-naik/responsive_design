import React, { useReducer } from 'react';

// Initial state for the shopping cart
const initialState = {
  cartItems: [],
};

// Reducer function to manage state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
  if (existingItem) {
    // If the item exists, update its quantity
    const updatedCartItems = state.cartItems.map(item =>
      item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    return { ...state, cartItems: updatedCartItems };
  } else {
    // If the item doesn't exist, add it to the cart with a quantity of 1
    return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
  }
    case 'REMOVE_FROM_CART':
      // Remove the item from the cart
      const filteredCartItems = state.cartItems.filter(item => item.id !== action.payload);
      return { ...state, cartItems: filteredCartItems };
    case 'UPDATE_QUANTITY':
      // Update the quantity of an item in the cart
      const updatedItems = state.cartItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return { ...state, cartItems: updatedItems };
    default:
      return state;
  }
};

const Reducer = () => {
  // UseReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Event handler to add an item to the cart
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Event handler to remove an item from the cart
  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  // Event handler to update the quantity of an item in the cart
  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: quantity } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cartItems.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ id: 1, name: 'Product 1', quantity: 1 })}>Add Product 1</button>
      <button onClick={() => addToCart({ id: 2, name: 'Product 2', quantity: 1 })}>Add Product 2</button>
    </div>
  );
};



export default Reducer;