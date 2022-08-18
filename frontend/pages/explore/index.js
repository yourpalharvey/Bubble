import styles from "../../styles/Explore.module.css";
import Head from "next/head";
import { Background } from "../../components/background";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { HomeTopContainer } from "../../containers/bubbleContainer";
import { ExploreContainer } from "../../containers/exploreContainer";
import { TallBubble, CategoryBubble } from "../../components/bubbles";
import { CategoryContainer } from "../../containers/categoryContainer";
import Nav from "react-bootstrap/Nav";
import { ExploreCategories } from "../../components/exploreCategories";
import { ExploreBubbles } from "../../components/exploreBubbles";
import { ExploreStreams } from "../../components/exploreStreams";

import React, { useState } from "react";

export default function Explore(props) {
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
    contentRendered = <ExploreCategories />;
  } else if (showBubbles == true) {
    contentRendered = <ExploreBubbles />;
  } else {
    contentRendered = <ExploreStreams />;
  }

  return (
    <Background>
      <Head>
        <title>Hosted Events | Bubble</title>
        <meta name="description" content="Watch upcoming Events" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar loggedIn={false} />

      <div className={styles.container}>
        <CategoryContainer>
          <CategoryBubble text="Music" colour="var(--accent-red)" />
          <CategoryBubble text="Sport" colour="var(--blue)" />
          <CategoryBubble text="Art" colour="var(--orange)" />
          <CategoryBubble text="Theatre" colour="var(--teal)" />
        </CategoryContainer>

        <Nav activeKey="/categories">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                handleCloseBubbles();
                handleCloseStreams();
                handleShowCategories();
              }}
            >
              Categories
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                handleCloseCategories();
                handleCloseStreams();
                handleShowBubbles();
              }}
            >
              Bubbles
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                handleCloseCategories();
                handleCloseBubbles();
                handleShowStreams();
              }}
            >
              Streams
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div>{contentRendered}</div>
      </div>

      <Footer loggedIn={false} />
    </Background>
  );
}
