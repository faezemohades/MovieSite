import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_BASE } from "../data/apiConfig";

const useFetchCarousel = () => {
    const [slideShow, setSlideShow] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isResponse, setIsResponse] = useState(false);
    const navigate = useNavigate();

    const fetchData = async () => {
        await axios.get(`${API_BASE}/GetSliders`)
            .then((response) => {
                setSlideShow(response.data);
                setIsResponse(true);
            })
            .catch((error) => {
                setNotFound(true);
            });
    }

    useEffect(() => {
        fetchData();
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

    return { slideShow};
}
export default useFetchCarousel;