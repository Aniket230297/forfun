import { useState } from "react";
import TokenContext from "./TokenContext";

const TokenProvider= ({children})=>{
const [token , setToken]=useState();

    return(
        <div>

                <TokenContext.Provider value={{token, setToken}}>
                            {children}
                </TokenContext.Provider>
        </div>
    )
}

export default TokenProvider;