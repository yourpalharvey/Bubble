import Head from 'next/head'
import { Background } from '../../components/background'
import styles from '../../styles/HostedEvents.module.css'
import { Navbar } from '../../components/navbar'
import {SquareBubble, TallBubble, WideBubble, FullBubble} from '../../components/bubbles'
import { HomeTopContainer } from '../../containers/bubbleContainer'
import { HostedEventsContainer } from '../../containers/eventsContainer'

export default function HostedEvents() {
    return (
        <Background>
            <Navbar />

            <Head>
                <title>Hosted Events | Bubble</title>
                <meta name='description' content='Watch upcoming Events' />
                <link rel='icon' href='/logo.png' />
            </Head>

            <div className={styles.container}>
            
                <HostedEventsContainer>

                    <FullBubble
                        text="Phoebe Bridgers"
                        venue="Cardiff Motorpoint Arena"
                        date="26th July 2022"
                        time="19:00 - 21:00"
                        image="/phoebeBridges.png"
                        url="joinbubble/1"
                    />

                </HostedEventsContainer>

            
            </div>
        </Background>
    )
}