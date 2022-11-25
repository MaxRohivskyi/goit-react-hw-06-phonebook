import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const TitlePhonebook = styled.h1`
  margin: 10px 0 20px 0;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const TitleContacts = styled.h2`
  margin: 50px 0 20px 0;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
