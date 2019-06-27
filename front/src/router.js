
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

// function AppRouter() {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/login">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/register">Register</Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 <Route exact path="/login" exact component={Login} />
//                 <Route exact path="/register" component={Register} />
//             </div>
//         </Router>
//     );
// }

const routing = (
    <Router>
        <div>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    </Router>
)
export default routing;
