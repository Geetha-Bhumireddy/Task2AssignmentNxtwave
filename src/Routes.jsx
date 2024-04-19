import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import DesktopSeventyFive from "pages/DesktopSeventyFive";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <DesktopSeventyFive /> },
    { path: "*", element: <NotFound /> },
    
  ]);

  return element;
};

export default ProjectRoutes;
