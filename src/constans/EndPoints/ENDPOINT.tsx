const BASEURL = `https://upskilling-egypt.com:3005/api`;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<AUTHURL>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const AUTHURL = {
  REGISTER: `${BASEURL}/auth/register`,
  LOGIN: `${BASEURL}/auth/login`,
  FORGET: `${BASEURL}/auth/forgot-password`,
  RESET: `${BASEURL}/auth/reset-password`,
  CHANGE: `${BASEURL}/auth/change-password`,
  LOGOUT: `${BASEURL}/auth/logout`,
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<INSTRUCTORSURL>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const DASHINSTRUCTORS = {
  GETFRISTFIVE: `${BASEURL}/instructors`,
};
