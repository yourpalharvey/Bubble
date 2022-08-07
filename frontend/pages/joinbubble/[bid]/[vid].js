import styles from "../../../styles/Bid.module.css";

const watchStream = ({title, postedById, tags, bubble}) => {

    

    return (
        <div className={styles.mainContainer}>

            <div className={styles.videoContainer}>
                {title}
            </div>
            
            <div className={styles.recommendedContainer}>
                {bubble}
            </div>

        </div>
    )
}

export default watchStream;

export const getServerSideProps = async (context) => {

    // get videostream id
    let id = 1;
    let videoId = context.params.vid;
    let bubbleId = context.params.bid;

    // search backend for this stream, returning title, userId, and tags
    let vidTitle = `testVideoTitle-${videoId}`;
    let userId = `testPostedBy-${videoId}`;
    let tagsRes = [`tag-${videoId}-1`, `tag-${videoId}-2`]

    return {
        props: {
            title: vidTitle,
            postedById: userId,
            tags: tagsRes,
            bubble: bubbleId,
        }
    }
}