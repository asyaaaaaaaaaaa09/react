import Pictures from './Pictures'
import styles from './Content.module.css'

type Props = {}

export default function Content({}: Props) {
  return (
    <div className={styles.container}>
        <div>Menu</div>
        <Pictures />
    </div>
  )
}