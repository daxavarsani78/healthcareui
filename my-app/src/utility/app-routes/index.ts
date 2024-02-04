export const enum AppRoutes {
  root = "/",
  DesignerHomePage = "/home",
  DesignerServices = "/services",
  DesignerServiceDetail = "/service-detail",
  DesignerContact = "/contact-us",
  DesignerAboutUs = "/about-us",
  DesignerNdis = "/ndis",
  DesignerPrivacy = "/privacy-policy",
  DesignerTerms = "/terms-and-conditions",
  DesignerLogin = "/login",
  DesignerDashboard = "/dashboard",
}

export const enum APIRoutes {
  login = "/userIdentity/sign-in",
  signup = "/userIdentity/sign-up",
  enquiry = "/public/enquiry",
  getEnquiry = "/public/get-enquiry",
  deleteEnquiry = "/public/delete-enquiry",
  markAsResolved = "/public/mark-as-resolved-enquiry",
  markAsUnResolved = "/public/mark-as-un-resolved-enquiry",
}

export const enum DeveloperAppRoutes {
  homePage = "/",
  aboutUs = "/about-us",
  ourService = "/service/our-service",
  serviceDetails = "/service/service-details",
  ndis = "/ndis",
  contactUs = "/contact-us",
  PrivacyAndPolicy = "/privacy-and-policy", // As of now both are in PrivacyAndPolicy
  TermsAndCondition = "/terms-and-condition",
  adminLogin = "/admin/login",
  adminSignup = "/admin/sign-up",
  adminInquiry = "/admin/Inquiry",
}
