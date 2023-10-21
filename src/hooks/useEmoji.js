import { useState } from "react";
import avatarPic from '../data/avatar.json';

const useEmoji= () => {
    //toggle checked between girl and boy 
    const [isGirlVisible, setIsGirlVisible] = useState(false);
    const [isBoyVisible, setIsBoyVisible] = useState(false);

    const handleGirlPress = () => {
        setIsGirlVisible((isVisible) => !isVisible);
        setIsBoyVisible(false);
    };

    const handleBoyPress = () => {
        setIsBoyVisible((isVisible) => !isVisible);
        setIsGirlVisible(false);};

    //set emoji and avatar in cookie
    const [emoji, setEmoji] = useState(avatarPic.emojis[0].image)

    return { isGirlVisible, isBoyVisible, handleGirlPress,handleBoyPress, setEmoji,emoji };
}
export default useEmoji;