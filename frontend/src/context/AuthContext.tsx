import { createContext, ReactNode, useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// Define the context value type
interface AuthContextType {
    token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

// Auth provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
    // Retrieve the token from Redux state
    const token = useSelector((state: RootState) => state.auth.token);

    // Render the Provider component from AuthContext, passing the username as the value.
    return (
        <AuthContext.Provider value={{ token }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
