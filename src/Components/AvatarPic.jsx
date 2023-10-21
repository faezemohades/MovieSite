import React from 'react';

function AvatarPic() {
    const avatar = localStorage.getItem("avatar");
    return (
        <img src={avatar} alt="آواتار" className="logo" />
    )
}
export default AvatarPic