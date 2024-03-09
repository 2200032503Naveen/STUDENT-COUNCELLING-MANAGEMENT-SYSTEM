export default function NavReducer(state="Login",action) {
    switch(action.type){
        case "Registration":
            return "Registration"
        case "Login":
            return "Login"
        case "Show":
            return "Show"
        case "Book":
            return "Book"
        case "Update":
            console.log("Inside update")
            return "Update"
        default:
            return "Login"  
                  
    }
}
// import React from 'react';
// import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import Login from './Login';
// import Registration from './Registration';
// import Show from './Show';
// import Book from './Book';
// import Update from './Update';

// const App = ({ currentPage }) => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/Login" component={Login} />
//         <Route path="/Registration" component={Registration} />
//         <Route path="/Show" component={Show} />
//         <Route path="/Book" component={Book} />
//         <Route path="/Update" component={Update} />
//         <Redirect from="/" to="/Login" />
//       </Switch>
//     </Router>
//   );
// };

// const mapStateToProps = (state) => ({
//   currentPage: state, // Assuming your reducer returns the current page as its state
// });

// export default connect(mapStateToProps)(App);
