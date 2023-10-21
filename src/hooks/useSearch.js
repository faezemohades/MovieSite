import { useEffect, useState } from "react";
import { API_BASE } from '../data/apiConfig';
import axios from "axios";

const useSearch = (props) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isRes, setIsRes] = useState(false);

    useEffect(() => {
        let timeoutId;
        const fetchData = async () => {
            setIsFetching(true);
            const result = await axios(
                `${API_BASE}/Search?keyword=${searchQuery}&startrow=0&endrow=15`
            );
            setSearchResults(result.data);
            setIsFetching(false);
        };
        if (searchQuery !== "") {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(fetchData, 500);
        }
        else if (searchQuery === "") {
            setIsRes(false);
        }
        else {
            setSearchResults([]);
        }
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    //search input change
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
        const filteredResults = searchResults.filter((result) => {
            return e.target.value !== '' && result.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setSearchResults(filteredResults);
        setIsRes(true);
    };
    useEffect(() => {
        setSearchResults([]);
        setIsFetching(false);
        setIsRes(false);
    }, [props.close]);

    return { isFetching, isRes, handleSearchInputChange, searchResults };
}
export default useSearch;