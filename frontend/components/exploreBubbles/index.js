import styles from "./exploreBubbles.module.css";
import { ExploreContentContainer } from "../../containers/exploreContentContainer";
import { MidBubble, TallBubble } from "../bubbles";

export const ExploreBubbles = ({title, data}) => {

  let colours = ['--accent-red', '--teal', '--indigo', '--orange', '--blue', '--green'];

  const randomise = (max) => {
    return Math.floor(Math.random() * max)
  }

  const categoryData = data.slice(0,12).map(
    (tag) => <MidBubble
      key={tag.id}
      text={tag.title}
      streamCount="22 streams"
      tag1="Pop"
      tag2="Country"
      tag3="Acoustic"
      image={tag.image}
      url={`streams/${tag.id}`}
      colour={`var(${colours[randomise(colours.length)]})`}
    />
  )

  if (data != null)
  {
    return (
    <ExploreContentContainer topRow={true} title={title ? title : "All bubbles"}>
        {categoryData}
    </ExploreContentContainer>
    )
  }
  return (
    <>
      <ExploreContentContainer topRow={true} title={title ? title : "All bubbles"}>
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
          text="Lion King"
          streamCount="8 streams"
          tag1="Musical"
          tag2="Westend"
          tag3="Classic"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/Lion_m1mrkp.png"
          url="categories/1"
          colour="var(--green)"
        />
      </ExploreContentContainer>

      <ExploreContentContainer bottomRow={true} seeMore="See more bubbles">
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
          text="Tate Modern"
          streamCount="1 stream"
          tag1="Art Galleries"
          tag2="Modern Art"
          tag3="Sculptures"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Tate_fyowjr.png"
          url="categories/1"
          colour="var(--accent-red)"
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
};
