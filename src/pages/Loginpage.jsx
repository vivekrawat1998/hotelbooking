import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/AxiosInstance';
import Cookies from 'js-cookie';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/auth/login__user', form);
            if (!res.data.error) {
                const { token, refreshToken, user } = res.data;

                Cookies.set('token', token, { expires: 1 / 24 });
                Cookies.set('refreshToken', refreshToken, { expires: 7 });
                Cookies.set('user', JSON.stringify(user));

                axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;

                const profileResponse = await axiosInstance.get("/user/profile");

                if (profileResponse.data) {
                    localStorage.setItem('userProfile', JSON.stringify(profileResponse.data));
                }

                navigate('/');
            } else {
                setError(res.data.message || 'Unknown error');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred, please try again');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-6">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
                {/* Left Side - Hotel Image */}
                <div className="hidden md:block">
                    <img
                        src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg" // Replace with your hotel image URL if needed
                        alt="Hotel"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="p-8 sm:p-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Login to Your Account</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-gray-600 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block mb-1 text-gray-600 font-medium">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                    placeholder="••••••••"
                                />
                                <span
                                    onClick={togglePassword}
                                    className="absolute top-2.5 right-3 cursor-pointer text-gray-500"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </span>
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-sec text-white py-2 rounded-lg font-semibold transition duration-300"
                        >
                            Login
                        </button>

                        {/* Signup Redirect Button */}
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                            className="w-full border border-gray-300 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition duration-300"
                        >
                            Don't have an account? Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
