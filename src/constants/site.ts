export const APP_NAME = process.env.APP_NAME || "CRMSync";

export const APP_DOMAIN = process.env.APP_DOMAIN || "crmsync.vercel.app";

export const APP_HOSTNAMES = new Set([
    process.env.APP_HOSTNAME || "crmsync.vercel.app",
    process.env.APP_HOSTNAME || "www.crmsync.vercel.app",
]);

export const APP_SIGNUP_URL = process.env.APP_SIGNUP_URL || "https://appcrmsync.vercel.app/sign-up";
export const APP_SIGNIN_URL = process.env.APP_SIGNIN_URL || "https://appcrmsync.vercel.app/login";
