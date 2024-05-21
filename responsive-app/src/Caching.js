import React from 'react';
import { useQuery } from 'react-query';

function fetchData() {
  return fetch('http://localhost:3001/careers')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      return response.json();
    });
}

function Caching() {
  const { data, isLoading, isFetching, isStale, error } = useQuery('todos', fetchData);

  if (isLoading) return 'Loading...';
  if (error) return 'An error occurred: ' + error.message;

  return (
    <div>
      <h2>Data caching using useQuery react hook</h2>
      <p>{isFetching ? 'Fetching data...' : (isStale ? 'Fetching fresh data...' : 'Data is up to date')}</p>
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Caching;
