import styles from './Header.module.css'
 
type Props = {}
 
export default function Header ({ }: Props) {
    return (
        <div className={styles.container}>
            <h1>Test Heading</h1>
            <div>Logo</div>
        </div>
    )
}