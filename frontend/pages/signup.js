import Head from "next/head"
import { useState } from "react"
import styles from "../styles/Auth.module.css"

import { Background } from "../components/background"
import { Navbar } from "../components/navbar"
import { Button } from "../objects/button"
import { Shadow } from "../objects/shadow"
import { TextInput } from "../objects/textInput"
import { handleSignup } from "../logic/auth"

const signup = () => {

    // handling form functions
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");
    const [email, setEmail] = useState("");

    

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
                            <h3>Sign Up</h3>
                        </div>
                        
                        <div className={styles.spacerBox}></div>

                        <form>

                            <div className={styles.detailsBox}>
                                
                                <label htmlFor="username">Username</label>
                                <TextInput placeholder="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                
                                <br />
                                
                                <label htmlFor="password">Password</label>
                                <TextInput placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                                <br />

                                <label htmlFor="confirm-password">Confirm Password</label>
                                <TextInput placeholder="password" name="confirm-password" value={passwordCon} onChange={(e) => setPasswordCon(e.target.value)}/>

                                <br />

                                <label htmlFor="email">Email</label>
                                <TextInput placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                                <div className={styles.spacerBox}></div>
                                <br />
                                
                                <Shadow>
                                    <Button wide={true} text="Log in" onClick={() => handleSignup(username, password, email)} type="submit"/>
                                </Shadow>
                            
                            </div>

                        </form>

                    </div>

                </Shadow>

            </div>

        </Background>
    )
}

export default signup;