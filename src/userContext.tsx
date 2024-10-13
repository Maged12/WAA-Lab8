import { createContext, ReactNode, useContext, useState } from "react";
import { CommentModule } from "./commentsList";

interface UserContextType {
    usersList: CommentModule[],
    setUserList: (usersList: CommentModule[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
//Context Provider here
export default UserContext;


interface UserProviderProps {
    children: ReactNode;
}
export const UserProvider = ({ children }: UserProviderProps) => {
    const [usersList, setUserList] = useState<CommentModule[]>([]);

    return (
        <UserContext.Provider value={{ usersList, setUserList }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('there is no UserProvider');
    }
    return context;
};