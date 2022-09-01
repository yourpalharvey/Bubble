import styles from "../../styles/Explore.module.css";
import Head from "next/head";
import { Background } from "../../components/background";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { TallBubble, CategoryBubbleSelected } from "../../components/bubbles";
import { CategoryContainer } from "../../containers/categoryContainer";
import { ExploreCategories } from "../../components/exploreCategories";
import { ExploreBubbles } from "../../components/exploreBubbles";
import { ExploreStreams } from "../../components/exploreStreams";
import { getCookie } from "cookies-next";
import { isAuth, getUsername } from "../../logic/auth";

import React, { useState } from "react";
import { ExploreNav } from "../../objects/exploreNav";
import { getRequest, postRequest } from "../../logic/requests";
import { URLBASE } from "../../logic";
import { ExploreBubblesFilter } from "../../components/exploreBubblesFilter";
import { ExploreStreamsFilter } from "../../components/exploreStreamsFilter";

export default function Explore({ loggedIn }) {
  let contentRendered;

  return (
    <Background>
      <Head>
        <title>Hosted Events | Bubble</title>
        <meta name="description" content="Watch upcoming Events" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar loggedIn={loggedIn} />

      <div className={styles.container}>
        <CategoryContainer>
          <CategoryBubbleSelected
            text="Pop"
            colour="var(--accent-red)"
            url="/explore"
          />
        </CategoryContainer>
      </div>

      <div className={styles.contentContainer}>
        <ExploreBubblesFilter pop={true} />
        <ExploreStreamsFilter pop={true} />
      </div>

      <Footer loggedIn={loggedIn} />
    </Background>
  );
}

export const getServerSideProps = async (ctx) => {
  // get the req and res objects from context
  const { req, res } = ctx;

  // get the token cookie
  const token = getCookie("token", { req, res });

  // if the token exists, return wheteher it is valid, otherwise set it as false
  const valid = token != null ? await isAuth(token) : false;
  const username = token != null ? await getUsername(token) : null;

  // return tags
  const tags = await getRequest(`${URLBASE}/tags`);

  // return props
  return {
    props: {
      loggedIn: valid,
      user: username,
      data: tags,
    },
  };
};
