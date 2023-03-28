import React, { FC, ReactNode, useState } from "react";
import { ThemeProvider } from "@mui/material";

import theme from "@/config/theme";
import { ColorMenuContext } from "./context";

interface Props {
  children: ReactNode;
}

const MUIProvider: FC<Props> = ({ children }) => {
  const [colorMenu, setColorMenu] = useState("primary");
  return (
    <ColorMenuContext.Provider value={{ colorMenu, setColorMenu }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorMenuContext.Provider>
  );
};

export default MUIProvider;
