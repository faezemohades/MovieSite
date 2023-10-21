import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useProfileSubmit = () => {
    const [girlSelected, setGirlSelected] = useState(false);
    const [boySelected, setBoySelected] = useState(false);
    let navigate = useNavigate();

    const routeChange = () => {
        if (girlSelected) {
            localStorage.setItem("theme", "rgb(228,89,158)");
        }
        else if (boySelected) {
            localStorage.setItem("theme", "rgb(54, 183, 223)");
        }
        let path = "/";
        navigate(path);
        window.location.reload(false);
    }

    return { setGirlSelected, setBoySelected, routeChange };
}
export default useProfileSubmit;