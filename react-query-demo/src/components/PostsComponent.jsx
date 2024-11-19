import { useQuery } from 'react-query';

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

export default function PostsComponent() {
    const { data, error, isLoading, isError, refetch } = useQuery('fetchData', fetchData, {
        cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
        staleTime: 1000 * 60, // Data is considered fresh for 1 minute
        refetchOnWindowFocus: true, // Refetch data when the window is focused
        keepPreviousData: true // Keep previous data while fetching new data
    });

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) {
        console.log('error:', error);
        return <div>Error loading data</div>;
    }

    // Render the fetched data
    return (
        <div className='fetchPosts'>
            <button onClick={refetch}>Refetch Data</button>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}