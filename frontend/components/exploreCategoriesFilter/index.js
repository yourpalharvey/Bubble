import { ExploreContentContainer } from "../../containers/exploreContentContainer";
import { TallBubble } from "../bubbles";
import styles from "./exploreCategoriesFilter.module.css";

export const ExploreCategoriesFilter = (props) => {

  let colours = ['--accent-red', '--teal', '--indigo', '--orange', '--blue', '--green'];

  const randomise = (max) => {
    return Math.floor(Math.random() * max)
  }


  const categoryData = props.data.map((tag) => {
    if (props.music && (tag.category_id === 2))
    {
      return (
        <TallBubble 
          key={tag.id}
          text={tag.title}
          image={tag.image}
          url={`categories/${tag.category_id}`}
          colour={`var(${colours[randomise(colours.length)]})`}
        />
      )
    }
    else if (props.sports && tag.category_id === 1)
    {
      return (
        <TallBubble 
          key={tag.id}
          text={tag.title}
          image={tag.image}
          url={`categories/${tag.category_id}`}
          colour={`var(${colours[randomise(colours.length)]})`}
        />
      )
    }
    else if (props.art && tag.category_id === 4)
    {
      return (
        <TallBubble 
          key={tag.id}
          text={tag.title}
          image={tag.image}
          url={`categories/${tag.category_id}`}
          colour={`var(${colours[randomise(colours.length)]})`}
        />
      )
    }
    else if (props.theatre && tag.category_id === 3)
    {
      return (
        <TallBubble 
          key={tag.id}
          text={tag.title}
          image={tag.image}
          url={`categories/${tag.category_id}`}
          colour={`var(${colours[randomise(colours.length)]})`}
        />
      )
    }
  })

  const handleTitle = () => {
    if (props.music)
    {
      return "Music categories";
    }
    else if (props.sports)
    {
      return "Sport categories";
    }
    else if (props.theatre)
    {
      return "Theatre categories";
    }
    else if (props.art)
    {
      return "Art categories";
    }
  };


  return (
    <ExploreContentContainer topRow={true} title={handleTitle()}>
      {categoryData}
    </ExploreContentContainer>
  )
};
