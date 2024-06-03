const API_BASE_URL = process.env.REACT_APP_API_URL;

export const ENDPOINTS = {
  REGISTER_USER: `${API_BASE_URL}/user/registation`,
  OTP_VERIFY: `${API_BASE_URL}/user/otpcheck`,
  VERIFY_EMAIL: `${API_BASE_URL}/user/emailcheck`,
  RE_SEND_M_OTP: `${API_BASE_URL}/user/otpresend`,
  RE_SEND_E_VERIFY: `${API_BASE_URL}/user/emailresend`,
  FORGET_PASSWORD: `${API_BASE_URL}/user/passowrdreset`,
  DASH_BOARD: `${API_BASE_URL}/dashboard/index`,
  CREATE_UPI_ID: `${API_BASE_URL}/dashboard/Creatupiid`,
  CREATE_VIRTUAL_BANK_ACCOUNT: `${API_BASE_URL}/dashboard/Creatacno`,
  LOGOUT_REQUEST: `${API_BASE_URL}/dashboard/logout`,
  LOGIN_USER: `${API_BASE_URL}/user/login`,
  
  CHANGE_PASSWORD_DASH: `${API_BASE_URL}/dashboard/changepass`,
  GET_API_KEY: `${API_BASE_URL}/dashboard/getapi`,

  // Add more endpoints as needed
};

