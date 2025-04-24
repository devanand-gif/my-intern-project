import { useEffect, useState } from "react"; // Imports necessary React hooks

/**
 * Custom React Hook to handle asynchronous operations.
 * Manages the state of the operation (loading, data, error).
 *
 * @param {Function} asyncFunction - The asynchronous function to be executed.
 * @param {boolean} [immediate=true] - If true, the async function is executed immediately on component mount.
 * @returns {{data: any, loading: boolean, error: Error | null}} - An object containing the result data, loading state, and any error.
 */
export const useAsync = (asyncFunction, immediate = true) => {
  // State to store the data returned by the async function
  const [data, setData] = useState(null);
  // State to track the loading status of the async function
  const [loading, setLoading] = useState(immediate);
  // State to store any error that occurs during the async function execution
  const [error, setError] = useState(null);

  // Function to execute the asynchronous operation
  const execute = async () => {
    setLoading(true); // Set loading to true before execution
    setError(null); // Reset error state
    try {
      const response = await asyncFunction(); // Execute the provided async function
      setData(response); // Store the successful response data
    } catch (err) {
      setError(err); // Store any caught error
    } finally {
      setLoading(false); // Set loading to false after execution completes (success or error)
    }
  };

  // Effect hook to execute the async function immediately if specified
  useEffect(() => {
    if (immediate) {
      execute(); // Call the execute function
    }
    // The empty dependency array ensures this effect runs only once on mount
  }, [immediate, asyncFunction]); // Added immediate and asyncFunction as dependencies for completeness, though 'immediate' is usually static and 'asyncFunction' should be stable

  // Returns the current data, loading state, and error
  return { data, loading, error, execute }; // Also return execute to allow manual triggering
};