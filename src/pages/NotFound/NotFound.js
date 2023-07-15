import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', {replace: true});
        }, 3000)
    }, [])

    return (
        <>
            <div>Page not Found</div>
        </>
    )
}

export default NotFound;