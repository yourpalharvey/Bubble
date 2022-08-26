export function Page({loggedIn, user}) {
    return (
        <></>
    )
}

export const getServerSideProps = async (ctx) => {

    // get the req and res objects from context
    const {req, res} = ctx;
  
    // get the token cookie
    const token = getCookie("token", {req, res});
  
    // if the token exists, return wheteher it is valid, otherwise set it as false
    const valid = token != null ? await isAuth(token): false;
    const username = token!= null ? await getUsername(token) : null;
  
  
  
    // return props
    return {
      props: {
          loggedIn: valid,
          user: username,
      }
    } 
  
  }