import { Background } from "../components/background"
import { Navbar } from "../components/navbar"
import { getCookie } from "cookies-next"
import { Text } from "../components/textBox";
import { ButtonBootstrap } from "../objects/buttonBootstrap";


const TestUserPage = ({token}) => {
    return (
        <Background>
            
            <Navbar />
            <h1>test user page</h1>
            <div>
            <ButtonBootstrap primarySmall={true} text={token}/>
            </div>
            
            
        </Background>
    )
};

export default TestUserPage;

export const getServerSideProps = (ctx) => {

    const {req, res} = ctx;

    const token = getCookie("token", {req, res});

    if (token != null)
    {
        return {
            props: {
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