import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';
import UpdateProfile from '../pages/UpdateProfile';
import ForgotPassword from '../pages/ForgotPassword';

export default function Routes() {
    return (
        <Router>
            <RouterRoutes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/update-profile"
                    element={
                        <PrivateRoute>
                            <UpdateProfile />
                        </PrivateRoute>
                    }
                />
            </RouterRoutes>
        </Router>
    );
}
