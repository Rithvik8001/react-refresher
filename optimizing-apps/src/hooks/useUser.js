import { useState, useEffect } from "react";

export const useUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const url =
        "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      try {
        setLoading(true);
        const data = await fetch(url, options);
        const response = await data.json();

        if (response.success && response.data) {
          setUsers(response.data.data);
          setError(null);
        } else {
          setError("Failed to fetch users");
          setUsers([]);
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching users");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
