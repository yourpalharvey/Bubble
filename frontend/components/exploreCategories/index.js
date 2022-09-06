import { ExploreContentContainer } from "../../containers/exploreContentContainer";
import { TallBubble } from "../bubbles";
import styles from "./exploreCategories.module.css";

export const ExploreCategories = ({data}) => {

  let colours = ['--accent-red', '--teal', '--indigo', '--orange', '--blue', '--green'];

  const randomise = (max) => {
    return Math.floor(Math.random() * max)
  }

  const categoryData = data.slice(0,12).map((tag) => <TallBubble 
      key={tag.id}
      text={tag.title}
      image={tag.image}
      url={`categories/${tag.id}`}
      colour={`var(${colours[randomise(colours.length)]})`}
    />
  )
  return (
    <>
      <ExploreContentContainer topRow={true} title="All categories">
        {/*<TallBubble
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
        />*/}
        {categoryData}
      </ExploreContentContainer>

      
      <ExploreContentContainer bottomRow={true} seeMore="See more categories">
      </ExploreContentContainer>
    </>
  );
};
