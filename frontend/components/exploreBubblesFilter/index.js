import styles from "./exploreBubblesFilter.module.css";
import { ExploreContentContainer } from "../../containers/exploreContentContainer";
import { MidBubble, TallBubble } from "../bubbles";

export const ExploreBubblesFilter = (props) => {
  if (props.music) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Music bubbles">
          <MidBubble
            text="Taylor Swift Live"
            streamCount="22 streams"
            tag1="Pop"
            tag2="Country"
            tag3="Acoustic"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Taylor_fykweg.png"
            url="categories/1"
            colour="var(--accent-red)"
          />

          <MidBubble
            text="Sunshine Fest"
            streamCount="12 streams"
            tag1="Festival"
            tag2="Electronic"
            tag3="Dance"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Festival_vn7zdc.png"
            url="categories/1"
            colour="var(--orange)"
          />

          <MidBubble
            text="Fleet Foxes"
            streamCount="10 streams"
            tag1="Indie"
            tag2="Folk"
            tag3="Rock"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/FleetFoxes_gbtgck.png"
            url="categories/1"
            colour="var(--blue)"
          />

          <MidBubble
            text="Pheobe Bridgers Live"
            streamCount="8 streams"
            tag1="Indie"
            tag2="Rock"
            tag3="Alternative"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661795351/Bubble/Mask_group_2_aurwb8.png"
            url="categories/1"
            colour="var(--indigo)"
          />
        </ExploreContentContainer>
      </>
    );
  } else if (props.sports) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Sport bubbles">
          <MidBubble
            text="F1 GP bubble"
            streamCount="16 streams"
            tag1="Formula 1"
            tag2="Motor sport"
            tag3="Racing"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/F1_nkmcwj.png"
            url="categories/1"
            colour="var(--teal)"
          />

          <MidBubble
            text="Golf fun"
            streamCount="3 streams"
            tag1="Golf"
            tag2="Outdoors"
            tag3="Beginner"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Golf_q3bha8.png"
            url="categories/1"
            colour="var(--blue)"
          />

          <MidBubble
            text="Go Karting Bristol"
            streamCount="1 Stream"
            tag1="Go Kart"
            tag2="Racing"
            tag3="Motor Sport"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1661795862/Bubble/Mask_group_3_rwaj4a.png"
            url="categories/1"
            colour="var(--teal)"
          />
        </ExploreContentContainer>
      </>
    );
  } else if (props.art) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Art bubbles">
          <MidBubble
            text="Tate Modern"
            streamCount="1 stream"
            tag1="Art Galleries"
            tag2="Modern Art"
            tag3="Sculptures"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Tate_fyowjr.png"
            url="categories/1"
            colour="var(--accent-red)"
          />
        </ExploreContentContainer>
      </>
    );
  } else if (props.theatre) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Theater bubbles">
          <MidBubble
            text="Lion King"
            streamCount="8 streams"
            tag1="Musical"
            tag2="Westend"
            tag3="Classic"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Lion_m1mrkp.png"
            url="categories/1"
            colour="var(--green)"
          />

          <MidBubble
            text="Circus bubble cardiff"
            streamCount="4 streams"
            tag1="Circus"
            tag2="Acrobatics"
            tag3=""
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Circus_gl01gt.png"
            url="categories/1"
            colour="var(--orange)"
          />
        </ExploreContentContainer>
      </>
    );
  } else if (props.pop) {
    return (
      <>
        <ExploreContentContainer topRow={true} title="Pop bubbles">
          <MidBubble
            text="Taylor Swift Live"
            streamCount="22 streams"
            tag1="Pop"
            tag2="Country"
            tag3="Acoustic"
            image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Taylor_fykweg.png"
            url="categories/1"
            colour="var(--accent-red)"
          />
        </ExploreContentContainer>
      </>
    );
  }
};
