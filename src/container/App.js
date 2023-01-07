import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import View from "../components/screens/View";

import Signin from "../components/pages/SignIn.page";
import Signup from "../components/pages/SignUp.page";
import Timeline from "../components/pages/Timeline.page";
import Hashtags from "../components/pages/Hashtags.page";
import UserPage from "../components/pages/User.page";

import "../assets/styles/reset.css";
import "../assets/styles/style.css";

function App() {
    return (
        <Router>
            <View>
                <Routes>
                    <Route path="/" element={<Signin />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/hashtag/:hashtag" element={<Hashtags />} />
                    <Route path="/user/:id" element={<UserPage />} />
                </Routes>
            </View>
        </Router>
    );
}

export default App;
