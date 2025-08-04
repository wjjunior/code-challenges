import type { User } from "../types/User";

function UserItem({ user }: { user: User }) {
  return (
    <div>
      <strong>{user.name}</strong> - {user.email}
    </div>
  );
}

export default UserItem;
