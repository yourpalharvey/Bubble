import { Background } from "../components/background"
import { Navbar } from "../components/navbar"
import { getCookie } from "cookies-next"
import { Text } from "../components/textBox";
import { ButtonBootstrap } from "../objects/buttonBootstrap";
import { isAuth } from "../logic/auth";


const TestUserPage = ({token, loggedIn}) => {
    return (
        <Background>
            
            <Navbar />
            
            <p>{loggedIn}</p>
            <p>{token}</p>
            
        </Background>
    )
};

export default TestUserPage;

export const getServerSideProps = async (ctx) => {

    // get the req and res objects from context
    const {req, res} = ctx;

    // get the token cookie
    const token = getCookie("token", {req, res});


    // if token is found, then verify. Otherwise, redirect to homepage
    if (token != null)
    {
        // request verification of token
        const valid = await isAuth(token);

        return {
            props: {
                loggedIn: valid,
                token: token
            }
        } 


    }
    return {
        redirect: {
          destination: '/',
          permanent: false,
        },
    }

}