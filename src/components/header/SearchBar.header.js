import axios from 'axios';
import { useEffect, useState } from 'react';
import {DebounceInput} from 'react-debounce-input';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SearchBar (){


    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    
    useEffect(()=>{
        async function getUsernameSearch(){
            if(search.username){
                try {
                    const requisition = await axios.get(`http://localhost:4000/user/${search.username}`);
                    setResult(requisition.data);
                } catch (error) {
                    console.log(error.response.data);
                };
            };
        }
        getUsernameSearch();
    },[search])
    
    // function RenderUsernameResults({user_id, picture_url, username}){
    //     return (
    //             <Link key={user_id} to={`/user/${user_id}`}>
    //                 <IconImage src={picture_url} alt={`picture at ${username}`}></IconImage>
    //                 <UsernameBox className='username'>{username}</UsernameBox>
    //             </Link>
    //         )
    // }


    function RenderUsernameResults({user_id, picture_url, username}){
        return (
                <UsernameBox key={user_id}>
                    <IconImage src={picture_url} alt={`picture at ${username}`}></IconImage>
                    <span>{username}</span>
                </UsernameBox>
            )
    }

    
    return(
        <SearchBarLayout>
            <SpaceFromSearch>
                <SearchBox>
                    <DebounceInput
                        placeholder="Search for people and friends"
                        minLength={3}
                        debounceTimeout={300}
                        onChange={event => setSearch({username: event.target.value})} 
                        value={search.username}
                    />
                </SearchBox>
                <ResultLayout> 
                    {result.map(value=>{                       
                        const {id, picture_url, username} = value

                        return(
                            <RenderUsernameResults  key={id}
                                                    user_id={id}
                                                    picture_url={picture_url}
                                                    username={username}
                        />)
                    })}
                </ResultLayout>
            </SpaceFromSearch>
        </SearchBarLayout>
    )
}

const SearchBarLayout = styled.div`

    width: 563px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SpaceFromSearch = styled.div`
    background = blue;

    input{
        width: 563px;
        height: 45px;
        background-color: #FFFFFF;

    }
`
const SearchBox = styled.div`
    background= yellow;
`
const ResultLayout = styled.div`
    background = red;
`
const UsernameBox = styled.div`
    background = green
`

const IconImage = styled.img`
    width: 53px;
    height: 53px;

    border-radius: 26.5px;
    margin: 5px;
`