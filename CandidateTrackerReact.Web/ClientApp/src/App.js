import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import Home from "./Pages/Home";
import Pending from "./Pages/Pending";
import Confirmed from "./Pages/Confirmed";
import Refused from "./Pages/Refused";
import AddCandidate from "./Pages/AddCandidate";
import { CandidatesContextComponent } from './CandidatesCountContext';
import Details from './Components/Details';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <CandidatesContextComponent>
                <Layout>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/addcandidate' component={AddCandidate} />
                    <Route exact path='/pending' component={Pending} />
                    <Route exact path='/refused' component={Refused} />
                    <Route exact path='/components/details/:id' component={Details} />
                    <Route exact path='/confirmed' component={Confirmed} />
                    {/*<Route exact path='/admin' component={AdminPage} />*/}
                    {/*<Route exact path='/viewblog/:id' component={ViewBlogPage} />*/}
                </Layout>
            </CandidatesContextComponent>
        );
    }
}