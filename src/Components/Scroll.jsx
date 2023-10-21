 import icon from '../assets/image/GIFUP.gif';
import useScroll from "../hooks/useScroll";

function Scroll() {
    const { showButton, scrollToTop }=useScroll()
    return (
        <>
        { showButton && (
         <img src={icon} width="60px" onClick={scrollToTop} alt="scroll" className="back-to-top" />
        )}  
        </>
);
}

export default Scroll;