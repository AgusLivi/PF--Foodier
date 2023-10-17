import React from "react";
import { useDispatch } from "react-redux";
import { 
    banSeller, 
    banUser, 
    enableSeller, 
    enableUser, 
    getAllUser, 
    getAllSeller, 
    deleteSellerAdmin, 
    deleteUserAdmin } from "../../../Redux/actions";

const CardAdmin = ({ name, email, location, address, user_ID, seller_ID, deleted }) => {

    const dispatch = useDispatch();

    const handlerEnable = () => {
        if (user_ID) {
            deleted && dispatch(enableUser(user_ID));
            dispatch(getAllUser());
        }
        if (seller_ID) {
            deleted && dispatch(enableSeller(seller_ID));
            dispatch(getAllSeller());
        }
    };

    const handlerDisabled = () => {
        if (user_ID) {
            !deleted && dispatch(banUser(user_ID));
            dispatch(getAllUser());
        }
        if (seller_ID) {
            !deleted && dispatch(banSeller(seller_ID));
            dispatch(getAllSeller());
        }
    };

    const hanlderDelete = () => {
        if (user_ID) {
            dispatch(deleteUserAdmin(user_ID));
            dispatch(getAllUser());
        }
        if (seller_ID) {
            dispatch(deleteSellerAdmin(seller_ID));
            dispatch(getAllSeller());
        }
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{location}</p>
            <p>{address}</p>
            {
                deleted ? (
                    <p>desabled</p>
                ) : (
                    <p>enabled</p>
                )
            }
            <button onClick={handlerEnable}>
                Habilitar
            </button>

            <button onClick={handlerDisabled}>
                Deshabilitar
            </button>

            <button onClick={hanlderDelete}>
                Eliminar
            </button>
        </div>
    );
};

export default CardAdmin;