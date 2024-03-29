import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

// Define the custom hook
const useFetchListData = <T extends unknown>(): [T[], boolean, Error | null] => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedData = await prisma.list.findMany();
        setData(fetchedData as T[]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Clean up the Prisma client
    return () => {
      prisma.$disconnect();
    };
  }, []);

  return [data, loading, error];
};

export default useFetchListData;