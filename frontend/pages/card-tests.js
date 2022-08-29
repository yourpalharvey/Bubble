import { Background } from "../components/background";
import { BubbleCardImage } from "../objects/bubbleCardImage";
import { MidBubble } from "../components/bubbles";

const CardTests = () => {
  return (
    <>
      <Background>
      <MidBubble
          text="Taylor Swift Live"
          streamCount="22 streams"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Taylor_fykweg.png"
          url="categories/1"
          colour="var(--accent-red)"
        />
      </Background>
    </>
  );
};

export default CardTests;
