import { Routes, Route, Navigate } from "react-router";
import AdvertiverProfile from "../pages/AdvertiverProfile";
import DetailAd from "../pages/DetailAd";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "./ProtectedRoutes/protectedRoutes";

const RoutesMain = () => {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="/homepage" />} />
			<Route path="/homepage" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/detail-ad/:id" element={<DetailAd />} />

			<Route element={<ProtectedRoutes />}>
				<Route path="/profile" element={<AdvertiverProfile />} />
			</Route>
		</Routes>
	);
};

export default RoutesMain;
