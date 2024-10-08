// Hooks
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Redux Actions
import { loginSuccess, signupSuccess } from '../../redux/actions';

// Functions
import { login, signup } from '../../services/auth/auth';

// Styles
import { styles } from './styles/auth-styles';

const Authform = () => {
    // State management
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch(); // Initialize dispatch function from Redux

    // TODO: Use formik for form implementation / validation
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (isLogin) {
                // Call login function with credentials object
                const response = await login(credentials.email, credentials.password);
                const { access_token } = response;

                // Dispatch login success to Redux
                dispatch(loginSuccess(access_token, credentials.email));
            } else {
                if (credentials.password !== confirmPassword) {
                    alert("Passwords don't match"); // Alert if passwords do not match
                    setIsLoading(false); // Reset loading state
                    return;
                }

                // Call signup function with credentials object
                const response = await signup(credentials.email, credentials.password);

                // Dispatch signup success to Redux
                dispatch(signupSuccess(credentials.email));

                alert('Signup successful! You can now log in.'); // Alert for successful signup
                setIsLogin(true); // Switch to login after successful signup; TODO: Implement automatic login
            }
        } catch (error) {
            alert('Error: ' + error.response?.data?.msg || 'Something went wrong'); // Alert for errors
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <div style={styles.container}>
            {/* TODO: Implement reusable components from components folder */}
            <div style={styles.formContainer}>
                {/* User can choose to login or sign up */}
                <div style={styles.tabContainer}>
                    <button
                        style={isLogin ? { ...styles.tab, ...styles.activeTab } : styles.tab}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        style={!isLogin ? { ...styles.tab, ...styles.activeTab } : styles.tab}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>


                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.title}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                    {/* TODO: Implement reusable input component with appropriate props */}
                    <input
                        type="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} // Update email in credentials
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} // Update password in credentials
                        required
                        style={styles.input}
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    )}
                    <button type="submit" style={styles.button} disabled={isLoading}>
                        {isLoading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Authform;
