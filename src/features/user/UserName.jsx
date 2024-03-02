import { useSelector } from 'react-redux';

function UserName() {
  const UserName = useSelector((state) => state.user.username);
  if (!UserName) return null;
  return (
    <div className="hidden text-xl font-semibold italic text-white lg:block">
      <span className="text-2xl">&#9863;</span> {UserName}
    </div>
  );
}

export default UserName;
