import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/styles/reset.css";
import "../assets/styles/style.css";

import UsersPage from "./users/users.page";

function App() {
    return (
        <BrowserRouter>
            <>WEE</>
            <Routes path="/user/:id" element={UsersPage}/>
        </BrowserRouter>
    );
}

export default App;
