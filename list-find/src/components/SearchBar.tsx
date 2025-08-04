function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <input
      type="text"
      placeholder="Pesquisar"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
