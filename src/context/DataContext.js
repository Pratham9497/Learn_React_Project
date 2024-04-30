import { createContext, useState, useEffect } from 'react'
import useAxiosFetch from '../hooks/useAxiosFetch'

import { useNavigate } from 'react-router-dom'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState([])
    const navigate = useNavigate()

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/items')

    useEffect(() => {
        setPosts(data)
    }, [data]);

    useEffect(() => {
        const filteredPosts = posts.filter(post => 
        post.body.toLowerCase().includes(search.toLowerCase())
        || post.title.toLowerCase().includes(search.toLowerCase())
        )
        setSearchResults(filteredPosts.reverse())
    }, [posts, search])

    return (
        <DataContext.Provider
            value={{
                search, setSearch, posts, setPosts, 
                fetchError, isLoading, 
                searchResults, navigate
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext