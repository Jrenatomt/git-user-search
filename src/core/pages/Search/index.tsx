import React, { useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import SearchLoader from './components/Loader';
import Button from '../../components/Button';
import { User } from '../../types/User';
import './styles.scss';

const BASE_URL = 'https://api.github.com/users'


const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        axios.get(`${BASE_URL}/${search}`)
            .then(response => setUserData(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <div className="search-content">
                    <h1 className="search-text-title">Encontre um perfil Github</h1>
                    <input
                        value={search}
                        type="text"
                        className="search-input"
                        onChange={handleOnChange}
                        placeholder="Usuário Github"
                    />
                    <Button text="Encontrar" />
                </div>
            </form>
            { isLoading ? <SearchLoader /> : !userData ? <></> : <UserCard user={userData} />}
        </div >
    );
};

export default Search;