import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSalesData } from '../src/features/salesSlice';
import { useUser, useAuth } from '@clerk/clerk-react';

export const useSalesData = () => {
    const dispatch = useDispatch();
    const { user } = useUser();
    const { getToken } = useAuth();

    const data = useSelector((state) => state.sales.data);
    const status = useSelector((state) => state.sales.status);
    const error = useSelector((state) => state.sales.error);

    useEffect(() => {
        const fetchData = async () => {
            if (user?.id) {
                const token = await getToken();
                dispatch(fetchUserSalesData({ id: user.id, token }));
            }
        };
        fetchData();
    }, [user?.id, dispatch, getToken]);

    return { data, status, error };
}
