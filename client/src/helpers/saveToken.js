
export const saveToken = async (token) => {
    localStorage.setItem("token", token);
    const savedToken = localStorage.getItem("token")
    return savedToken; 
}