import styles from './FavCard'

const FavCard = ({ name, image }) => {

    return (
        <div>
            {
                image ? (
                    <img className={styles.image} src={image} />
                ) : (
                    
                    <img className={styles.image} src='https://www.creativefabrica.com/wp-content/uploads/2020/03/09/Simple-Fork-Plate-Icon-Restaurant-Logo-Graphics-3446203-1-580x348.jpg' />
                )
            }
            <h3>{name}</h3>
        </div>
    )
}

export default FavCard;