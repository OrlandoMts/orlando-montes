import React, {useState} from "react";

const useInitialState = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const visibilityMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    return {
        visibilityMenu,
        toggleMenu,
    };

}

export default useInitialState;