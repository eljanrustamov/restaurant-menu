import styled from "styled-components";

export const SidebarWrappaer = styled.div`

  min-width: 250px;
  max-width: 250px;
  min-height: calc(100vh - (63px));
  position: fixed;
  left: 0;
  top: 0;

  padding: 24px 0;
  margin-top: 63px;
  
  background-color: var(--card-color);
  /* background-color: #333; */
  box-shadow: inset -2px -2px 8px 0 var(--box-shadow-light);
  transition: 500ms all;
  
  ${({ x }) => `
  transform: translateX(-${x});
  `}

  .sidebar-menu{
    margin-top: 20px;
  }

`;
