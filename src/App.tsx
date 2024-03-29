import { useEffect } from 'react';
import './App.css';
import useFetchListData from './hooks/useFetchListData';

export default function App() {
  const [data, loading, error] = useFetchListData();

  // Log data length to the console when data changes
  useEffect(() => {
    console.log('Data length:', data.length);
  }, [data]);

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Data Loaded Successfully</h1>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{/* Render your data items here */}</li>
            ))}
          </ul>
        </>
      )}
      {error && <p>Error: {error.message}</p>}
    </main>
  );
}
