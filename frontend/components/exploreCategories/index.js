import { ExploreContentContainer } from "../../containers/exploreContentContainer";
import { TallBubble } from "../bubbles";
import styles from "./exploreCategories.module.css";

export const ExploreCategories = () => {
  return (
    <>
      <ExploreContentContainer topRow={true} title="All categories">
        <TallBubble
          text="Pop"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660828077/Bubble/TaylorSwift_xoyk4t.png"
          url="categories/1"
          colour="var(--accent-red)"
        />

        <TallBubble
          text="Football"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/ManU_poggqm.png"
          url="categories/2"
          colour="var(--teal)"
        />

        <TallBubble
          text="Hip-Hop"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Kendrick_rzjge0.png"
          url="categories/3"
          colour="var(--indigo)"
        />

        <TallBubble
          text="Skateboard"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Skateboard_l6mtul.png"
          url="categories/1"
          colour="var(--orange)"
        />

        <TallBubble
          text="Musicals"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/musical_eio2tb.png"
          url="categories/2"
          colour="var(--blue)"
        />

        <TallBubble
          text="Art Galleries"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Gallery_waibqd.png"
          url="categories/3"
          colour="var(--green)"
        />
      </ExploreContentContainer>

      <ExploreContentContainer bottomRow={true} seeMore="See more categories">
        <TallBubble
          text="Rock"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Rock_qbeh2v.png"
          url="categories/1"
          colour="var(--green)"
        />

        <TallBubble
          text="Jazz"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Jazz_azjztx.png"
          url="categories/2"
          colour="var(--blue)"
        />

        <TallBubble
          text="Rugby"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/rugby_gjhdnn.png"
          url="categories/3"
          colour="var(--orange)"
        />

        <TallBubble
          text="Go Kart"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/GoKart_b7gui5.png"
          url="categories/1"
          colour="var(--accent-red)"
        />

        <TallBubble
          text="Paintball"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Paintball_fc4abo.png"
          url="categories/2"
          colour="var(--indigo)"
        />

        <TallBubble
          text="Poetry"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Spokenword_gqrlcn.png"
          url="categories/3"
          colour="var(--teal)"
        />
      </ExploreContentContainer>
    </>
  );
};
