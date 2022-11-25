import styled from 'styled-components';
import { MdCall } from 'react-icons/md';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 50%;

  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  background-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 1px 1px 3px ${p => p.theme.colors.muted};
`;
export const InputField = styled.input`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  width: 400px;
  padding: 10px 20px;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};

  box-shadow: 1px 1px 3px ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  outline: none;
`;
export const Label = styled.label`
  margin-bottom: 5px;

  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Error = styled.p`
  margin-bottom: 30px;

  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const BtnSubmitForm = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 8px 16px;
  margin: 20px 0 15px 0;

  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};

  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  &:hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
    background-color: ${p => p.theme.colors.primary};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
    box-shadow: 2px 2px 5px ${p => p.theme.colors.muted};
  }
`;

export const AddIcon = styled(MdCall)`
  margin-left: 10px;
`;
