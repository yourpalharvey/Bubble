import styles from "./exploreStreamsFilter.module.css";
import { ExploreContentContainer } from "../../containers/exploreContentContainer";
import { WideBubble } from "../bubbles";

export const ExploreStreamsFilter = (props) => {
  if (props.music) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Music streams">
          <WideBubble
            text="Feet Foxes!"
            subText="FoxesFan123"
            date="July 28th"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/FleetFoxes_gbtgck.png"
            url="categories/1"
            colour="var(--blue)"
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
      </>
    );
  } else if (props.sports) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Sport streams">
          <WideBubble
            text="F1 - Grand Prix"
            subText="MotorKid"
            date="July 28th"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/F1_nkmcwj.png"
            url="categories/2"
            colour="var(--green)"
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
            text="Taylor Swift Live"
            subText="Suzzie101"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Taylor_fykweg.png"
            url="categories/1"
            colour="var(--indigo)"
          />
        </ExploreContentContainer>
      </>
    );
  } else if (props.art) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Art streams">
          <WideBubble
            text="Tate Modern"
            subText="ArtyMarty"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Tate_fyowjr.png"
            url="categories/3"
            colour="var(--teal)"
          />
        </ExploreContentContainer>
      </>
    );
  } else if (props.theatre) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Theatre streams">
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
        </ExploreContentContainer>
      </>
    );
  } else if (props.pop) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Pop streams">
          <WideBubble
            text="Taylor Swift Live"
            subText="Suzzie101"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Taylor_fykweg.png"
            url="categories/1"
            colour="var(--indigo)"
          />
        </ExploreContentContainer>
      </>
    );
  }
};
