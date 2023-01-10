
import useAuthContext from './useAuthContext';
export const useLogout = () => {

  const { dispatch } = useAuthContext();

  const logout = function () {
    //* remove the user details from the local storage
    localStorage.removeItem("user");

    //* dispatch logout function
    dispatch({type:"LOGOUT"})
  };

  return {logout}
};
