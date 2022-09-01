import styles from "./exploreStreams.module.css";
import { ExploreContentContainer } from "../../containers/exploreContentContainer";
import { WideBubble } from "../bubbles";

export const ExploreStreams = () => {
  return (
    <>
      <ExploreContentContainer topRow={true} title="All streams">
        <WideBubble
          text="Feet Foxes!"
          subText="FoxesFan123"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/FleetFoxes_gbtgck.png"
          url="categories/1"
          colour="var(--blue)"
        />

        <WideBubble
          text="F1 - Grand Prix"
          subText="MotorKid"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/F1_nkmcwj.png"
          url="categories/2"
          colour="var(--green)"
        />

        <WideBubble
          text="Tate Modern"
          subText="ArtyMarty"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Tate_fyowjr.png"
          url="categories/3"
          colour="var(--teal)"
        />

        <WideBubble
          text="Cardiff Circus"
          subText="Jane2986"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Circus_gl01gt.png"
          url="categories/1"
          colour="var(--indigo)"
        />

        <WideBubble
          text="Lion King"
          subText="lols23"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Lion_m1mrkp.png"
          url="categories/1"
          colour="var(--blue)"
        />

        <WideBubble
          text="Trying to play golf"
          subText="golfnoob"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Golf_q3bha8.png"
          url="categories/2"
          colour="var(--green)"
        />

        <WideBubble
          text="Sunny Festival"
          subText="EvenStevens"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Festival_vn7zdc.png"
          url="categories/3"
          colour="var(--teal)"
        />

        <WideBubble
          text="Taylor Swift Live"
          subText="Suzzie101"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Taylor_fykweg.png"
          url="categories/1"
          colour="var(--indigo)"
        />
      </ExploreContentContainer>

      <ExploreContentContainer
        bottomRow={true}
        seeMore="See more streams"
      ></ExploreContentContainer>
    </>
  );
};
