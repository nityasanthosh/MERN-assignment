export default function UserCard({ name, email }) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    );
  }
  