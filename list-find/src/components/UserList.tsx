import { useUsers } from "../hooks/useUsers";
import SearchBar from "./SearchBar";
import UserItem from "./UseItem";

function UserList() {
  const { users, loading, setQuery, error, loadMore } = useUsers();
  return (
    <div>
      <h1>Lista de usuários</h1>
      <SearchBar onSearch={setQuery} />
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
      <button onClick={loadMore}>Carregar mais</button>
    </div>
  );
}

export default UserList;
