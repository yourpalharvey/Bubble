import React from "react";
import ReactPlayer from "react-player"
import styles from "./videoPlayer.module.css"

const ResponsivePlayer = () => {

        return (
            <div className={styles.playerWrapper}>
                <ReactPlayer
                    className={styles.reactPlayer}
                    playing url={[{src: 'videoplayback.mp4', type: 'video/mp4'}]}
                    controls={true}
                    width='70%'
                    height='70%'
                />
            </div>
        )
 
}

export default ResponsivePlayer;