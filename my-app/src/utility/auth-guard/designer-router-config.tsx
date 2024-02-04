import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../app-routes";
import DesignerHome from "../../pages/designer/designerHome";
import DesignerServices from "../../pages/designer/designerServices";
import DesignerContact from "../../pages/designer/designerContact";
import DesignerServiceDetails from "../../pages/designer/designerServiceDetails";
import DesignerAboutUs from "../../pages/designer/designerAboutUs";
import DesignerNdis from "../../pages/designer/designerNdis";
import DesignerPrivacy from "../../pages/designer/designerPrivacy";
import DesignerTerms from "../../pages/designer/designerTerms";
import DesignerLoginPage from "../../pages/designer/designerLogin";
import DesignerDashboard from "../../pages/designer/designerDashboard";

export const DesignerRouterConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DesignerHome />} />
      <Route path={AppRoutes.DesignerHomePage} element={<DesignerHome />} />
      <Route path={AppRoutes.DesignerServices} element={<DesignerServices />} />
      <Route path={AppRoutes.DesignerContact} element={<DesignerContact />} />
      <Route path={AppRoutes.DesignerServiceDetail} element={<DesignerServiceDetails />} />
      <Route path={AppRoutes.DesignerAboutUs} element={<DesignerAboutUs />} />
      <Route path={AppRoutes.DesignerNdis} element={<DesignerNdis />} />
      <Route path={AppRoutes.DesignerPrivacy} element={<DesignerPrivacy />} />
      <Route path={AppRoutes.DesignerTerms} element={<DesignerTerms />} />
      <Route path={AppRoutes.DesignerLogin} element={<DesignerLoginPage />} />
      <Route path={AppRoutes.DesignerDashboard} element={<DesignerDashboard />} />
    </Routes>
  );
};
