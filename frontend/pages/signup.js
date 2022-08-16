import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Auth.module.css";

import { Background } from "../components/background";
import { SignUpCard } from "../components/signUpCard";
import { Navbar } from "../components/navbar";

const signup = () => {
  return (
    <Background>
      <Head>
        <title>Bubble - login</title>
        <meta name="description" content="Login to you Bubble account" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <SignUpCard />
    </Background>
  );
};

export default signup;
