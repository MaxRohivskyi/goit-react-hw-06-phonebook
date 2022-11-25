import styled from 'styled-components';

export const FilterWrapper = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px;
  padding: 24px 300px;
  margin: 10px 0 20px 0;

  background-color: ${p => p.theme.colors.accent};
  box-shadow: 2px 2px 5px ${p => p.theme.colors.muted};
`;

export const FilterLabel = styled.label`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-left: 38%;
`;

export const FilterInput = styled.input`
  display: inline-block;
  padding: 0 10px;
  width: 100%;
  height: 32px;
  margin: 0;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};

  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 5px ${p => p.theme.colors.muted};
  border: none;
  outline: none;
  &::placeholder {
    font: inherit;
  }
`;
