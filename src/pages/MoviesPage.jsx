import { useState } from 'react';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const onSubmit = event => {
    event.preventDefault();
    setSearchQuery(event.target.elements.query.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MoviesPage;
