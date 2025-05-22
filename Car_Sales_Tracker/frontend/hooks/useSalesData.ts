import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSalesData } from '../src/features/salesSlice';
import { useUser } from '@clerk/clerk-react';

export const useSalesData = () => {
    const dispatch = useDispatch();
    const { user } = useUser()

    const data = useSelector((state) => state.sales.data)
    const status = useSelector((state) => state.sales.status)
    const error = useSelector((state) => state.sales.error)


    useEffect(() => {
        if (user?.id) {
            dispatch(fetchUserSalesData(user.id));
        }
    }, [user?.id, dispatch])

    return {data, status, error}
}