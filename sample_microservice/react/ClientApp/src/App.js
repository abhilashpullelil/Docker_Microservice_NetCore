import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { connect} from 'react-redux';

export default class App extends Component {
    displayName = App.name

    constructor(props) {
        super(props);
        this.state = { userName: "Guest" };
    }

      render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} userName={this.state.userName} />
                <Route path='/counter' component={Counter} userName={this.state.userName}/>
                <Route path='/fetchdata' component={FetchData} userName={this.state.userName}/>
            </Layout>
        );
      }
}
