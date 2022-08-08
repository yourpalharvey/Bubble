import styles from "./bubbleBtn.module.css";
import Image from 'next/image';

export const BubbleBtn = (props) => {
    
    if (props.closeBtn) {
        return (
            <div className={styles.bubbleBtn}>
                <Image 
                src="/bubbleBtnClose.png"
                alt=""
                height="75%"
                width="75%"
                />
            </div>
            
        )
    } else if (props.openBtn) {
        return (
            <div className={styles.bubbleBtn}>
                <Image
                    src="/bubbleBtnOpen.png"
                    alt=""
                    height="75%"
                    width="75%"
                    />
            </div>
        )
    }
}