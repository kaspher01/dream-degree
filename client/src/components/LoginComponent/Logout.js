export const Logout = () => {
    localStorage.clear();
    window.location.replace('http://localhost:3000');
}

export default Logout;