import styles from './tracks.module.scss'

const Tracks = ({ items }) => {
    return <ul className={styles.tracks}>
        {items.map((item, index) => {
            //const { title, artist } = item;
            return <li 
                key={index}
                className={styles.trackItem}
                >
                <h3>{item.title}</h3>
                <h4>{item.artist}</h4>
            </li>
        })}
    </ul>
}
export default Tracks;