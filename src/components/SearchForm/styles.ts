import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`

export const SearchFormHeader = styled.header`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  
  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchFormInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['blue']};
    box-shadow: none;
  }
`
