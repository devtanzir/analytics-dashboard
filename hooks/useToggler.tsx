import { useState } from "react";

const useToggler = () => {
    const [isToggled, setIsToggled] = useState(false);
    const open = () => setIsToggled(true);
    const close = () => setIsToggled(false);
    const toggle = () => setIsToggled((prev) => !prev);
    return { isToggled, open, close, toggle };
};

export default useToggler;