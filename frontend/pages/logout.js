import { deleteCookie, getCookies } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout = () => {
    const router = useRouter();

    // handle logout
    const handleLogout = async () => {
        
        const cookies = getCookies({});

        if (cookies.hasOwnProperty("token"))
        {
            deleteCookie("token");

            router.push("/");
        }
        else
        {
            router.reload(window.location.pathname);
        }

    }


    // useEffect to delete Cookie and  redirect to Home
    useEffect(
        () => {
            handleLogout();
        },
        []
    )

    return (
        <></>
    )
}

export default Logout;