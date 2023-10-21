import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from '../data/apiConfig';

const useFetchMovieListing = () => {

    const [posts, setCPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const fetchChannelDetail = (setCPosts, posts) => {
        axios.get(`${API_BASE}/GetHomePageChannelsWithVideo?_page=${page}&_limit=10`)
            .then((response) => {
                //console.log(response.data.channels);
                setCPosts([...posts, ...response.data.channels]);
                setPage(page + 1);
                //console.log(page);
            }).finally(() => setLoading(false));
    }
    useEffect(() => {
        fetchChannelDetail(setCPosts, posts);
    }, []);

    return { loading, posts, fetchChannelDetail, setCPosts };
}
export default useFetchMovieListing;