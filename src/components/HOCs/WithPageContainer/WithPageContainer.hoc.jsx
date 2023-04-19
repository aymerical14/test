import React from "react";

import Sidebar from "../../Layouts/Sidebar/Sidebar.layout";

import { Container, ContainerContent } from "./WithPageContainer.styles";

const WithPageContainer = (WrappedComponent) => ({ ...props }) => {
  return (
    <Container>
      <Sidebar />
      <ContainerContent>
        <WrappedComponent {...props} />
      </ContainerContent>
    </Container>
  );
};

export default WithPageContainer;
