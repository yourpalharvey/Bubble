import styles from "../../styles/Explore.module.css";
import Head from "next/head";
import { Background } from "../../components/background";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { HomeTopContainer } from "../../containers/bubbleContainer";
import { ExploreContainer } from "../../containers/exploreContainer";
import { TallBubble, CategoryBubble } from "../../components/bubbles";
import { CategoryContainer } from "../../containers/categoryContainer";

export default function Explore() {
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

        <ExploreContainer title="Top categories" seeMore="See more categories">
          <TallBubble
            text="testing"
            image="/phoebeBridges.png"
            url="categories/1"
            colour="var(--accent-red)"
          />

          <TallBubble
            text="testing 2"
            image="/phoebeBridges.png"
            url="categories/2"
            colour="var(--teal)"
          />

          <TallBubble
            text="testing 3"
            image="/phoebeBridges.png"
            url="categories/3"
            colour="var(--indigo)"
          />

          <TallBubble
            text="testing"
            date="July 28th"
            image="/phoebeBridges.png"
            url="categories/1"
            colour="var(--orange)"
          />

          <TallBubble
            text="testing 2"
            image="/phoebeBridges.png"
            url="categories/2"
            colour="var(--blue)"
          />

          <TallBubble
            text="testing 3"
            image="/phoebeBridges.png"
            url="categories/3"
            colour="var(--green)"
          />
        </ExploreContainer>
      </div>

      <Footer loggedIn={false} />
    </Background>
  );
}
