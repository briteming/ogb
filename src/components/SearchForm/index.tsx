import { useContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { SearchContext } from "../../contexts/SearchContext";
import {
  SearchFormContainer,
  SearchFormHeader,
  SearchFormInput,
} from "./styles";

export function SearchForm() {
  const [search, setSearch] = useState("");
  const { issues, fetchIssues } = useContext(SearchContext);

  const [debouncedSearch] = useDebounce(search, 1000);

  useEffect(() => {
    fetchIssues(debouncedSearch);
  }, [debouncedSearch, fetchIssues]);

  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <p>Publicações</p>
        <span>{issues.length} publicações</span>
      </SearchFormHeader>
      <SearchFormInput
        type="text"
        placeholder="Buscar conteúdo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchFormContainer>
  );
}
