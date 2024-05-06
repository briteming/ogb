import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormInput,
} from "./styles";

export function SearchForm() {
  const { issues } = useContext(SearchContext);
  
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <p>Publicações</p>
        <span>{issues.length} publicações</span>
      </SearchFormHeader>
      <SearchFormInput type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
}
