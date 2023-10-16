import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, getAllSeller } from '../../Redux/actions';


const CardContainerAdmin = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const sellers = useSelector((state) => state.sellers)

    useEffect(() => {
        dispatch(getAllUser())
        dispatch(getAllSeller())
    }, [])

    return(
        <div>
            {
                users?.map((user, index) => (
                    <CardAdmin 
                    key={index}
                    name={user.name}
                    email={user.email}
                    location={user.location} 
                    />
                ))
            }
        </div>
    )
}