
export const checkToken = () => (!!localStorage.getItem("jwt"))

export const getToken = () => (localStorage.getItem("jwt"))

export const setToken = (token) => { localStorage.setItem("jwt", token); }