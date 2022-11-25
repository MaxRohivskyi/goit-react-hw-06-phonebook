import styled from 'styled-components';
import { MdDeleteOutline } from 'react-icons/md';

export const ContactListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  margin: 0 0 5px 0;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 8px 16px;
  margin: 0 0 15px 0;
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
    background-color: ${p => p.theme.colors.accent};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 2px 2px 5px ${p => p.theme.colors.muted};
  }
`;

export const DeleteIcon = styled(MdDeleteOutline)`
  margin: 0;
`;
