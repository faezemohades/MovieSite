import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_BASE_config } from "../data/apiConfig";

const useFetchAnimation = () => {
    const [loading, setLoading] = useState(true);
    const [VideoItems, setVideoItems] = useState();
    const [notFound, setNotFound] = useState(false);
    const [isResponse, setIsResponse] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        axios.get(`${API_BASE_config}/Cinema?startrow=0&endrow=20`)
            .then((response) => {
                setVideoItems(response.data);
                setIsResponse(true);
            }).catch((error) => {
                setNotFound(true);
            }).finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (isResponse) {
            navigate('/');
        }
    }, [isResponse]);

    useEffect(() => {
        if (notFound) {
            navigate('/404');
        }
    }, [notFound]);
  
    return { loading, VideoItems };
}
export default useFetchAnimation;