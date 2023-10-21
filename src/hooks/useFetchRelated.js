import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from '../data/apiConfig';

const useFetchRelated = (item) => {

    const [related, setRelated] = useState({ data: [] });

    useEffect(() => {
        axios.get(`${API_BASE}/GetVideoByChannelID?channelid=${item.channelID}&startrow=1&endrow=5`)
            .then((response) => {
                setRelated(response.data);
            })
    }, []);

    return { related };
}
export default useFetchRelated;