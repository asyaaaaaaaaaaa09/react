import styles from './Pictures.module.css'
import Countdown from '../Countdown'

type Props = {}

export default function Pictures({}: Props) {
  return (
    <div> <div className={styles.cardcontainer}>

        <Countdown title="susi" text="super susi" image="https://picsum.photos/200/300" />


      </div></div>
  )
}