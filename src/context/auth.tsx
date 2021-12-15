import React from 'react';

const state = {}
type StateType = typeof state;
const AuthContext = React.createContext(state);
function countReducer(state: StateType, action: any) {
    switch (action.type) {
      case 'increment': {
        return {}
      }
      case 'decrement': {
        return {}
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }

function AuthProvider({ children }: React.PropsWithChildren<any>) {
    const [state, dispatch] = React.useReducer(countReducer, { })
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider