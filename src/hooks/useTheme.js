import {useState } from "react";

const useTheme = () => {
    const [dp, setDp] = useState(true);

    //handle girl or boy selected for theme
    const [girlSelected, setGirlSelected] = useState(false);
    const [boySelected, setBoySelected] = useState(false);
    const [avatarSelected, setAvatarSelected] = useState(false);
  
    // theme handler
    const themeHandler = () => {
        if (avatarSelected && !girlSelected) {
             window.location.reload(false);
            setDp(false);
        }
        else if (!avatarSelected && girlSelected) {
            localStorage.setItem("theme", "rgb(228,89,158)");
             window.location.reload(false);
            setDp(false);
        }
        else if (girlSelected) {
            localStorage.setItem("theme", "rgb(228,89,158)");
            document.getElementById("nav").classList.add("girl-color");
            window.location.reload(false);
            setDp(false);
        }
        if (avatarSelected && !boySelected) {
             window.location.reload(false);
            setDp(false);
            //set default cover image
        }
        else if (!avatarSelected && boySelected) {
            localStorage.setItem("theme", "rgb(54, 183, 223)");
             window.location.reload(false);
            setDp(false);
        }
        else if (boySelected) {
            localStorage.setItem("theme", "rgb(54, 183, 223)");
            document.getElementById("nav").classList.add("boy-color");
            window.location.reload(false);
            setDp(false);
        }
    }
    return { setGirlSelected, setBoySelected, setAvatarSelected, themeHandler, dp };
}
export default useTheme;