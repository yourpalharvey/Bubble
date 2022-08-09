import styles from './Progress.module.css'

export const ProgressBar = ({progress}) => {
    return (
        <div className={styles.container}>
            
            <div className={styles.progressLine}>
                
                <div className={styles.progressMarker} style={{marginLeft: `${progress}%`}}>

                </div>

            </div>
        
        </div>
    )
}