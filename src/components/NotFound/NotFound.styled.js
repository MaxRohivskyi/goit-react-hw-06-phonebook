import styled from 'styled-components';

export const NotFoundWrapper = styled.p`
  padding: 20px;
  margin: 20px;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
`;
