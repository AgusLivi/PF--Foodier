import React from 'react';
import { useSelector } from "react-redux";
import FavCard from '../FavCard/FavCard';
import styles from './FavsContainer.module.css'; // Importa los estilos CSS

const FavsContainer = () => {
    const { user } = useSelector((state) => state.allFavoritesSeller);

    return (
        <div className={styles.container}>
            {
                user && (
                    <h1>Hola! {user.name}, tus favoritos son:</h1>
                )
            }
            {
                user && (
                    <div className={styles.imagerow}>
                        {user.Sellers.map((seller, index) => {
                            return (
                                <div className={styles.FavCard} key={index}>
                                    <FavCard
                                        name={seller.name}
                                        image={seller.image}
                                        sellerId={seller.seller_ID}
                                    />
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default FavsContainer;

