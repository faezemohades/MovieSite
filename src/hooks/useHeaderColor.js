import { useEffect} from "react";

const useHeaderColor = () => {
    const themeColor = localStorage.getItem("theme");
    useEffect(() => {
        document.body.style.backgroundColor = themeColor;
        if (themeColor === "rgb(228,89,158)") {
            document.getElementById("nav").classList.add("girl-color");
        }
        else if (themeColor === "rgb(54, 183, 223)") {
            document.getElementById("nav").classList.add("boy-color");
        }
        else { document.getElementById("nav").classList.add("default-color"); }
    }, [themeColor]); 
  
    return { themeColor  };
}
export default useHeaderColor;