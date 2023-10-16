import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, getAllSeller } from '../../Redux/actions';


const DashboardAdmin = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const sellers = useSelector((state) => state.sellers)

    useEffect(() => {
        dispatch(getAllSeller())
        dispatch(getAllUser())
    }, [])
    //hacer esto o hacer card aparte
    return (
        <div>
            <h1>ola soy el dash</h1>
        </div>
    );
}

export default DashboardAdmin;