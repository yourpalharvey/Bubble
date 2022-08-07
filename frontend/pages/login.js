import { useState } from "react"
import Head from "next/head"
import styles from "../styles/Auth.module.css"

import { Background } from "../components/background"
import { Navbar } from "../components/navbar"
import { Button } from "../objects/button"
import { Shadow } from "../objects/shadow"
import { TextInput } from "../objects/textInput"
import { handleLogin } from '../logic/auth/index'


const login = () => {

    // handling form functions
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    

    return (
        <Background>

            <Navbar />

            <Head>
                <title>Bubble - login</title>
                <meta name="description" content="Login to you Bubble account" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <div className={styles.container}>
                <Shadow>
                    
                    <div className={styles.loginBox}>

                        <div className={styles.loginTextBox}>
                            <h3>Login</h3>
                        </div>

                        <div className={styles.alternativeLoginBox}>
                            <Shadow>
                                <Button wide={true} text="Log in with Google" />
                            </Shadow>
                            <Shadow>
                                <Button wide={true} text="Log in with Facebook" />
                            </Shadow>
                        </div>
                        
                        <form>

                            <div className={styles.detailsBox}>
                                
                                <label htmlFor="username">Username</label>
                                <TextInput placeholder="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                
                                <br />
                                
                                <label htmlFor="password">Password</label>
                                <TextInput placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                                <br />

                                <Shadow>
                                    <Button wide={true} text="Log in" onClick={() => handleLogin(username, password)} type="submit"/>
                                </Shadow>
                            </div>

                            

                        </form>

                    </div>

                </Shadow>

            </div>
        </Background>
    )
}

export default login;