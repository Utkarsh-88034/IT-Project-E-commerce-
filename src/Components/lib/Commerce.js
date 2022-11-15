import Commerce from "@chec/commerce.js";

export const store = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
