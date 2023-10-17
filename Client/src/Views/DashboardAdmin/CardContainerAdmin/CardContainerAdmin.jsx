import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardAdmin from '../CardAdmin/CardAdmin';

const CardContainerAdmin = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const sellers = useSelector((state) => state.sellers);
    const [userState, setUserState] = useState(false);
    const [sellerState, setSellerState] = useState(false);

    console.log('users: ', users);
    console.log('sellers: ', sellers);

    const handlerUser = () => {
        setUserState(true);
        setSellerState(false);
    };

    const handlerSeller = () => {
        setSellerState(true);
        setUserState(false)
    };
    

    return (
        <div>
            <button disabled={userState} onClick={handlerUser}>
                Usuarios
            </button>

            <button disabled={sellerState} onClick={handlerSeller}>
                Vendedores
            </button>

            {
                userState && (
                    <h1>USERS</h1>
                )
            }
            {
                sellerState && (
                    <h1>SELLERS</h1>
                )
            }

            { 
                userState && users?.map((user, index) => (
                    <CardAdmin
                        key={index}
                        name={user.name}
                        email={user.email}
                        location={user.location}
                        user_ID={user.user_ID}
                        deleted={user.deleted}
                    />
                ))
            }
            {
                sellerState && sellers?.map((seller, index) => (
                    <CardAdmin
                        key={index}
                        name={seller.name}
                        email={seller.email}
                        address={seller.address}
                        seller_ID={seller.seller_ID}
                        deleted={seller.deleted}
                    />
                ))
            }
        </div>
    )
};

export default CardContainerAdmin;