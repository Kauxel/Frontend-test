import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import FormPage from '../pages/FormPages';
import { DashboardLayout } from '../layouts';
import Dashboard from '../pages/DashboardPages';
import RoomPage from '../pages/RoomPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes >
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<RoomPage />} />
                    <Route path="/booking-room" element={<FormPage />} />
                </Route>
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
};

export default AppRoutes;