import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUser, getAllSeller } from '../../Redux/actions';
import CardContainerAdmin from './CardContainerAdmin/CardContainerAdmin';

const DashboardAdmin = () => {
    const dispatch = useDispatch();

    /*useEffect(() => {
        dispatch(getAllSeller());
        dispatch(getAllUser());
    }, []);*/
    //hacer esto o hacer card aparte
    return (
        <div>
            <h1>ola soy el dash</h1>
            <CardContainerAdmin />
        </div>
    );
}

export default DashboardAdmin;