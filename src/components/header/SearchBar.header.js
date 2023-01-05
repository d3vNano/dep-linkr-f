import { useState } from 'react';
import {DebounceInput} from 'react-debounce-input';
import styled from 'styled-components';

export default function SearchBar (){

//    exemplo
//    const promisse = {
//        users: [{
//                    username: "João A",
//                    id:21
//                },{
//                    username: "João B",
//                    id:25
//                },{
//                    username: "João A",
//                    id:29
//            }]
//    }

    const [username, setUsername] = useState("");
    
//    console.log(username)

    return(
        <SearchBarLayout>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                onChange={event => setUsername({username: event.target.value})} 
            />
        </SearchBarLayout>
    )
}

const SearchBarLayout = styled.div`

    input{
        width: 563px;
        height: 45px;
        background: #FFFFFF;
        border-radius: 8px;
    }
`