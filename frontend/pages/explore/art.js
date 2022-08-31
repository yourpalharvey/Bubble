import styles from "../../styles/Explore.module.css";
import Head from "next/head";
import { Background } from "../../components/background";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  TallBubble,
  CategoryBubble,
  CategoryBubbleSelected,
} from "../../components/bubbles";
import { CategoryContainer } from "../../containers/categoryContainer";
import { ExploreCategoriesFilter } from "../../components/exploreCategoriesFilter";
import { ExploreBubblesFilter } from "../../components/exploreBubblesFilter";
import { ExploreStreamsFilter } from "../../components/exploreStreamsFilter";
import { getCookie } from "cookies-next";
import { isAuth, getUsername } from "../../logic/auth";
import { URLBASE } from "../../logic";
import { getRequest } from "../../logic/requests";

import React, { useState } from "react";
import { ExploreNav } from "../../objects/exploreNav";

export default function Explore({ loggedIn, user, data }) {
  const [showCategories, setShowCategories] = useState(true);
  const handleShowCategories = () => setShowCategories(true);
  const handleCloseCategories = () => setShowCategories(false);

  const [showBubbles, setShowBubbles] = useState(false);
  const handleShowBubbles = () => setShowBubbles(true);
  const handleCloseBubbles = () => setShowBubbles(false);

  const [showStreams, setShowStreams] = useState(false);
  const handleShowStreams = () => setShowStreams(true);
  const handleCloseStreams = () => setShowStreams(false);

  let contentRendered;

  if (showCategories == true) {
    contentRendered = <ExploreCategoriesFilter art={true} data={data}/>;
  } else if (showBubbles == true) {
    contentRendered = <ExploreBubblesFilter art={true} />;
  } else {
    contentRendered = <ExploreStreamsFilter art={true} />;
  }

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
          <CategoryBubble
            text="Music"
            colour="var(--accent-red)"
            url="/explore/music"
          />
          <CategoryBubble
            text="Sport"
            colour="var(--blue)"
            url="/explore/sports"
          />
          <CategoryBubbleSelected
            text="Art"
            colour="var(--orange)"
            url="/explore"
          />
          <CategoryBubble
            text="Theatre"
            colour="var(--teal)"
            url="/explore/theatre"
          />
        </CategoryContainer>
      </div>

      <ExploreNav
        showCategories={showCategories}
        handleShowCategories={handleShowCategories}
        handleCloseCategories={handleCloseCategories}
        showBubbles={showBubbles}
        handleShowBubbles={handleShowBubbles}
        handleCloseBubbles={handleCloseBubbles}
        showStreams={showStreams}
        handleShowStreams={handleShowStreams}
        handleCloseStreams={handleCloseStreams}
      />

      <div className={styles.contentContainer}>{contentRendered}</div>

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
    }
  };
};
