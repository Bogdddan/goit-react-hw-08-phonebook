import { useSelector } from "react-redux";
import {
    selectUser,
    selectIsLoggedIn,
} from './../redux/auth/selectors';

export const useAuth = () => {
    const isLogedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    return {
        isLogedIn,
        user,
    };
};