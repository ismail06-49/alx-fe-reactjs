import { useEffect, useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {

    const [search, setSearch] = useState('');
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getData() {
            if (!search) return; // Don't fetch if search is empty
            setLoading(true);
            setError(false);
            try {
                const data = await fetchUserData(search);
                setUser (data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getData();
    },[search])

    return (
        <div>
            <form className=" w-3/4 mt-5 mx-auto">
                <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can&apos;t find the user</p>}
            {user && (
                <div className="flex flex-col w-1/4 mx-auto mt-4 bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <h2 className="text-lg text-center font-bold text-gray-800 dark:text-white">{user.name}</h2>
                    <img className="mx-auto" src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
                    <a className="mt-3 text-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            )}
        </div>
    )
}