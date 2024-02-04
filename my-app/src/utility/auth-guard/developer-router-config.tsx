import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import HomePage from "../../pages/developer/home-page";
import { DeveloperAppRoutes } from "../app-routes";
import { Layout } from "../../components/developer/layout";
import AboutUsPage from "../../pages/developer/about-us";
import OurServices from "../../pages/developer/services/our-services";
import ServiceDetails from "../../pages/developer/services/service-details";
import NdisPage from "../../pages/developer/ndis";
import PrivacyAndPolicy from "../../pages/developer/privacy-and-policy";
import AdminLoginPage from "../../pages/developer/admin/login-page";
import AdminDashboardPage from "../../pages/developer/admin/enquiry";
import ContactUsPage from "../../pages/developer/admin/contact-us";
import AdminSignUpPage from "../../pages/developer/admin/sign-up-page";
import TermsAndCondition from "../../pages/developer/terms-condition";

export const DeveloperRouterConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/*" element={<>No page Found 404</>} />
        <Route path={DeveloperAppRoutes.homePage} element={<HomePage />} />
        <Route path={DeveloperAppRoutes.aboutUs} element={<AboutUsPage />} />
        <Route path={DeveloperAppRoutes.ourService} element={<OurServices />} />
        <Route
          path={DeveloperAppRoutes.serviceDetails}
          element={<ServiceDetails />}
        />
        <Route path={DeveloperAppRoutes.ndis} element={<NdisPage />} />
        <Route
          path={DeveloperAppRoutes.PrivacyAndPolicy}
          element={<PrivacyAndPolicy />}
        />
        <Route
          path={DeveloperAppRoutes.TermsAndCondition}
          element={<TermsAndCondition />}
        />
        <Route
          path={DeveloperAppRoutes.contactUs}
          element={<ContactUsPage />}
        />
      </Route>
      <Route
        path={DeveloperAppRoutes.adminLogin}
        element={<AdminLoginPage />}
      />
      <Route
        path={DeveloperAppRoutes.adminSignup}
        element={<AdminSignUpPage />}
      />
      <Route
        path={DeveloperAppRoutes.adminInquiry}
        element={<ProtectedRoute element={<AdminDashboardPage />} />}
      />
    </Routes>
  );
};
