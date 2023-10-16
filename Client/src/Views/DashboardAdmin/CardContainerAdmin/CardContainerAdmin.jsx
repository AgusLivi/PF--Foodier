import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, getAllSeller } from '../../../Redux/actions';


const CardContainerAdmin = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const sellers = useSelector((state) => state.sellers);
    const [userState, setUserState] = useState(false);
    const [sellerState, setSellerState] = useState(false);

    const handlerUser = () => {
        setUserState(true);
        setSellerState(false);
    };

    const handlerSeller = () => {
        setSellerState(true);
        setUserState(false)
    };

    /*ESTO SE DEBE HACER SOLO EN EL DASHBOARDADMIN, NO EN EL CARD CONTAINER
    useEffect(() => {
        dispatch(getAllUser());
        dispatch(getAllSeller());
    }, []);*/ 

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
                    />
                ))
            }
            {
                sellerState && sellers?.map((seller, index) => (
                    <CardAdmin
                        key={index}
                        name={seller.name}
                        email={seller.email}
                        location={seller.location}
                    />
                ))
            }
        </div>
    )
};

export default CardContainerAdmin;