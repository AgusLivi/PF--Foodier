import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUser, getAllSeller } from '../../Redux/actions';
import CardContainerAdmin from './CardContainerAdmin/CardContainerAdmin';

const DashboardAdmin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSeller());
        dispatch(getAllUser());
    }, []);
    //hacer esto o hacer card aparte
    //comentario random
    return (
        <div>
            <h1>Bienvenido al DashBoard Admin</h1>
            <CardContainerAdmin />
        </div>
    );
}

export default DashboardAdmin;