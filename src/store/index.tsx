import React from 'react';
import { StoreContext } from './StoreProvider';


export const useStore = () => {
  const store = React.useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return store;
}

export {StoreProvider} from './StoreProvider';