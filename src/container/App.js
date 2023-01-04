import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/styles/reset.css";
import "../assets/styles/style.css";

import UsersPage from "./users/users.page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <>WEE</>
                <Route path="/user/:id" element={UsersPage}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
