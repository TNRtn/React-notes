import React from 'react';

function List() {
  const users = [
    { id: 1, name: 'TNR', age: 22 },
    { id: 2, name: 'Vijay', age: 21 },
    { id: 3, name: 'Ravi', age: 23 }
  ];

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
