import { useEffect, useState } from "react";
import { API_BASE } from '../data/apiConfig';
import axios from "axios";

const useFetchChannelDetail = (id) => {
   
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [chanelItems, setChanelItems] = useState();

    //fetch api channel detail
    useEffect(() => {
        setLoading(true);
        if (!id) {
            setNotFound(true);
            setLoading(false);
        } else {
            axios
                .get(`${API_BASE}/getvideobychannelid?channelid=${id}&startrow=0&endrow=100`)
                .then((response) => {
                    setChanelItems(response.data);
                    setNotFound(false);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setNotFound(true);
                    setLoading(false);
                });
        }
    }, [id]);

    return { loading, chanelItems, notFound };
}
export default useFetchChannelDetail;