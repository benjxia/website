import { useEffect } from "react";
import { COLORS } from "../colors";

function useThemeColors() {
    useEffect(() => {
      // Allows COLORS.PRIMARY and COLORS.SECONDARY to be visible as --colors-secondary variable within included css files
      const root = document.documentElement;
      root.style.setProperty('--colors-primary', COLORS.PRIMARY);
      root.style.setProperty('--colors-secondary', COLORS.SECONDARY);
    }, []);
}

export default useThemeColors;
