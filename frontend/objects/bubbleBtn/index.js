import styles from "./bubbleBtn.module.css";
import Image from 'next/image';

export const BubbleBtn = (props) => {
    
    if (props.closeBtn) {
        return (
                <Image
                    src="/bubbleBtnClose.svg" 
                    alt=""
                    height="75%"
                    width="75%"
                />
        )
    } else {
        return (
            <div className={styles.bubbleBtnContainer}>
                <svg width="62" height="65" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2_14750)">
                <rect x="15" y="10" width="32" height="32" rx="15" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2929 21.2929C28.6834 20.9024 29.3166 20.9024 29.7071 21.2929L33.7071 25.2929C34.0976 25.6834 34.0976 26.3166 33.7071 26.7071L29.7071 30.7071C29.3166 31.0976 28.6834 31.0976 28.2929 30.7071C27.9024 30.3166 27.9024 29.6834 28.2929 29.2929L31.5858 26L28.2929 22.7071C27.9024 22.3166 27.9024 21.6834 28.2929 21.2929Z" fill="#3A3A3A"/>
                </g>
                <defs>
                <filter id="filter0_d_2_14750" x="0" y="0" width="62" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="7.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14750"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14750" result="shape"/>
                </filter>
                </defs>
                </svg>
            </div>
        )
    }
};