import { useEffect, useState } from "react";
import type { User } from "../types/User";

const PAGE_SIZE = 5;

const users: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Usuário ${i + 1}`,
  email: `user${i + 1}@mail.com`,
}));

export function useUsers() {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      const start = 0;
      const end = PAGE_SIZE * page;

      const filtered = users
        .filter(
          (user) =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase())
        )
        .slice(start, end);

      setFilteredUsers(filtered);
      setLoading(false);
    } catch {
      setError("Erro ao carregar usuários.");
      setLoading(false);
    }
  }, [query, page]);

  return {
    users: filteredUsers,
    loading,
    error,
    setQuery,
    loadMore: () => setPage((prev) => prev + 1),
  };
}
