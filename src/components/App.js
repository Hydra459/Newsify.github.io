import React from 'react';
import '../css/styles.css';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewsifyAbout from './NewsifyAbout';
import NewsifyMain from './NewsifyMain';
import NewsifyShow from './NewsifyShow';

class App extends React.Component {
    render() {
        return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                <Route path="/" exact component={NewsifyMain}/>
                <Route path="/Newsify/About" exact component={NewsifyAbout}/>
                <Route path="/Newsify/:id" exact component={NewsifyShow} />
                </Switch>
            </BrowserRouter>
        </div>
        )
    }
}

export default App;