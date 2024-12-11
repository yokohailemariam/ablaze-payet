import { Route, Routes } from "react-router";

import { Layout } from "./components/layout";

import HomePage from "./pages/Home";
import NearByPage from "./pages/NearBy";
import ProfilePage from "./pages/Profile";
import RecentPage from "./pages/Recent";
import NotificationPage from "./pages/notification";
import QRPage from "./pages/qr";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="nearby" element={<NearByPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="recent" element={<RecentPage />} />
      </Route>

      <Route path="/qr" element={<QRPage />} />
      <Route path="/notifications" element={<NotificationPage />} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default AppRoutes;
