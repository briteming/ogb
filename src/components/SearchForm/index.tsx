import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormInput,
} from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <p>Publicações</p>
        <span>6 publicações</span>
      </SearchFormHeader>
      <SearchFormInput type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
}
