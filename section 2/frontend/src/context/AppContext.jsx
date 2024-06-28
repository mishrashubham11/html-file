// login kare to logout ka option aye ar vo kare to vo ye sb uske liye code h
'use client';
import { useRouter } from "next/navigation";
import { Children, createContext, useContext, useState } from "react";    

export const AppContext = createContext();

export const AppProvider = ({Children})=>{

    const router = useRouter();

const [currentUser,setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
);

const [loggedIn, setloggedIn] = useState(currentUser !== null);

const logout = () => {
    localStorage.removeItem("user");
    //remove cookie
    document.cookie = "token=; expire=thu, 01 Jan 1970 00:00:00 UTC;path=/;"
    setCurrentUser(null);
    setloggedIn(false);
    router.push("/login");
}

    return <AppContext.Provider value={{
        currentUser,
        setCurrentUser,
        loggedIn,
        setloggedIn,
        logout
    }}>
        {Children}
    </AppContext.Provider>

}

const useAppContext = () => useContext(AppContext);
export default useAppProvider;