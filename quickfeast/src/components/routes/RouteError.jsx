import { useRouteError } from 'react-router-dom';

const RouteError = () => {
  const error = useRouteError();
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Error: 😥 Something went wrong</h1>
      <h3>{error.statusText || error.message}</h3>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
};

export default RouteError;