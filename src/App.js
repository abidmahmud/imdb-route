import Movies from './component/movies.component';
import Navbar from './component/navbar.component';
import { Redirect, Switch, Route } from "react-router-dom";
import SignUp from './component/sign-up.component';
import LogIn from './component/log-in.component';
import Home from './component/home.component';
import NotFound from './component/not-found.component';
import CreateMovie from './component/create-movie.component';

const App = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route path="/movies" render={(props) => <Movies  {...props} />} />
                <Route path="/sign-up" render={(props) => <SignUp  {...props} />} />
                <Route path="/log-in" render={(props) => <LogIn  {...props} />} />
                <Route path="/create-movie" render={(props) => <CreateMovie  {...props} />} />
                <Route path="/not-found" component={NotFound} />
                <Route exact path="/" render={(props) => <Home  {...props} />} />
                <Redirect to="/not-found" />
            </Switch>
        </>
    );
}

export default App;