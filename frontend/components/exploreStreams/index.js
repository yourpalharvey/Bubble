import styles from "./exploreStreams.module.css";
import { ExploreContentContainer } from "../../containers/exploreContentContainer";
import { WideBubble } from "../bubbles";

export const ExploreStreams = () => {
  return (
    <>
      <ExploreContentContainer topRow={true} title="All streams">
        <WideBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--blue)"
        />

        <WideBubble
          text="testing 2"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/2"
          colour="var(--green)"
        />

        <WideBubble
          text="testing 3"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/3"
          colour="var(--teal)"
        />

        <WideBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--indigo)"
        />
      </ExploreContentContainer>

      <ExploreContentContainer middleRow={true}>
        <WideBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--blue)"
        />

        <WideBubble
          text="testing 2"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/2"
          colour="var(--green)"
        />

        <WideBubble
          text="testing 3"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/3"
          colour="var(--teal)"
        />

        <WideBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--indigo)"
        />
      </ExploreContentContainer>

      <ExploreContentContainer bottomRow={true} seeMore="See more streams">
        <WideBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--blue)"
        />

        <WideBubble
          text="testing 2"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/2"
          colour="var(--green)"
        />

        <WideBubble
          text="testing 3"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/3"
          colour="var(--teal)"
        />

        <WideBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--indigo)"
        />
      </ExploreContentContainer>
    </>
  );
};
