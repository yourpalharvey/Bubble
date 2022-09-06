import { useRouter } from "next/router";
// test
const joinBubble = () => {
  const router = useRouter();
  const { bid } = router.query;

  return (
    <>
      <p> id: {bid}</p>
    </>
  );
};

export default joinBubble;
