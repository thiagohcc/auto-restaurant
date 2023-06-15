import { useMemo, useState } from 'react';
import GeneralContext from './generalContext';

function GeneralProvider({ children }) {
  const [user, setUser] = useState({});

  const contextValue = useMemo(() => ({
    user, setUser
  }), [user]);

  return (
    <GeneralContext.Provider value={ contextValue }>
      { children }
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
