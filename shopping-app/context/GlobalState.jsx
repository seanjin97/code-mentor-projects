import { useReducer, useContext, createContext } from 'react';

const initialState = {
  items: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return { ...state, items: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useCustomContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useShoppingItems must be used within a GlobalProvider');
  }
  return context;
};
