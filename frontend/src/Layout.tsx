import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store'; // Import your RootState for typing
import AuthForm from './features/auth/AuthForm'; // Single Auth form for login/signup
import Dashboard from './features/dashboard/Dashboard';

const Layout = () => {
    // Correctly type `useSelector` to use the RootState interface
    const { token } = useSelector((state: RootState) => state.auth);

    const dummyData = [
        { description: 'Sale 1', amount: 1000 },
        { description: 'Purchase 1', amount: -500 },
    ];

    return (
        <BrowserRouter>
            <Routes>
                {/* If the user is not authenticated, redirect to AuthForm */}
                {!token ? (
                    <>
                        <Route path="/auth" element={<AuthForm />} />
                        {/* Redirect any unknown paths to AuthForm */}
                        <Route path="*" element={<Navigate to="/auth" />} />
                    </>
                ) : (
                    <>
                        {/* Authenticated routes */}
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Default path redirects to dashboard */}
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="*" element={<Navigate to="/dashboard" />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;
