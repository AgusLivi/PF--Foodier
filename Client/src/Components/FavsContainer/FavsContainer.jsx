import React from 'react';
import { useSelector } from "react-redux";
import FavCard from '../FavCard/FavCard';

const FavsContainer = () => {
    const { user } = useSelector((state) => state.allFavoritesSeller);
    console.log('user: ', user);

    return (
        <div>
            {
                user && (
                    <h1>Hola! {user.name}, tus favoritos son:</h1>
                )
            }
            {
                user && user.Sellers.map((seller, index) => {
                    return (
                        <FavCard
                            key={index}
                            name={seller.name}
                            image={seller.image}
                        />
                    )
                })
            }
        </div>
    )
}

export default FavsContainer;