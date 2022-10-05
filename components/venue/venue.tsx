import { DATE, TIME } from '@lib/constants';
import styleUtils from '../utils.module.css';
import styles from './venue.module.css';

export default function Venue() {
  return (
    <div className={styles.wrapper}>
      <p>You can attend Ory Summit in person in one of Europe's emerging tech hubs - Munich! 🎉</p>
      <p>
        If you want to attend the event in-person, please{' '}
        <a href="https://share-eu1.hsforms.com/1JJOxdq5jQ9qSwS2ZrCAYfQextgn">fill out this form.</a>
      </p>
      <p>
        The event is hosted at the Ory Europe Headquarters in the "House of Communication" in
        Munichs trendy Werksviertel right next to the Ostbahnhof (Munich East) train station.
      </p>
      <p>
        The local infection protection laws apply{' '}
        <a href="https://www.munich.travel/en/topics/events-in-munich/covid-current-information-about-your-visit-to-munich">
          - more information here
        </a>
        .
      </p>
      <div className={styles.info}>
        <ul>
          <li>House of Communication</li>
          <li>August-Everding-Straße 25</li>
          <li>81671 Munich Germany</li>
        </ul>
      </div>

      <p>
        <ul>
          <li>
            <a href="https://www.google.com/maps/place/August-Everding-Stra%C3%9Fe+25,+81671+M%C3%BCnchen/">
              Location on Google Maps
            </a>
          </li>
          <li>5-minute walk from Munich East train station</li>
          <li>8 minutes by underground tram/S-Bahn train from Munich Central Station </li>
          <li>approx. 30 minutes by S-Bahn (city commuter train) from Munich Airport </li>
          <li>2 minutes by car from the Mittlerer Ring ring road </li>
        </ul>
      </p>
      <div className={styles.imggrid}>
        <div>
          <img
            className={styles.contentimg}
            src="./office1.png"
            alt="House of Communication building"
          />
        </div>
        <div>
          <img
            className={styles.contentimg}
            src="./office2.png"
            alt="House of Communication building"
          />
        </div>
      </div>
      <p>
        For all inquiries, please contact: <a href="mailto:office@ory.sh">office@ory.sh</a>
      </p>
    </div>
  );
}
