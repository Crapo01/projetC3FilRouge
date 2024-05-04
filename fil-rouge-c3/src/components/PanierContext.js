import React, { createContext, useState} from 'react';





const PanierContext = createContext({totalFromContext:0, SumUpItems:(sum)=>{}});


export const PanierProvider  = ({ children }) => {

    const [totalFromContext, settotalFromContext] = useState(10);

    const SumUpItems = (sum) => {
        settotalFromContext(sum);
    }

    return (<PanierContext.Provider value={{totalFromContext, SumUpItems}}>
        {children}
    </PanierContext.Provider>)
};

export default PanierContext;