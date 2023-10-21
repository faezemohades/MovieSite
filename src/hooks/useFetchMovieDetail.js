import { useEffect, useState } from "react";
import { API_BASE } from '../data/apiConfig';
import axios from "axios";

const useFetchMovieDetail = (id) => {
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [movieItems, setMovieItems] = useState();
    const [errMsg, setErrMsg] = useState();

    //fetch movieDetail api
    useEffect(() => {
        setLoading(true);
        if (!id) {
            setNotFound(true);
            setLoading(false);
        } else {
            axios
                .get(
                    `${API_BASE}/GetVideoTest?videoname=${id}`
                )
                .then((response) => {
                    setMovieItems(response.data);
                    setNotFound(false);
                    setLoading(false);
                })
                .catch((error) => {
                    setErrMsg(error);
                    setNotFound(true);
                    setLoading(false);
                });
        }
    }, [id]);
    
    return { loading, movieItems, notFound, errMsg };
}
export default useFetchMovieDetail;