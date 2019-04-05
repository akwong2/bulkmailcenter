import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

function Index() {
    return <h2>Home</h2>
}

function Mail() {
    return <h2>Mail</h2>
}

class BulkMailCenter extends Component {
    render() {
        return(
            <div>
                <h1>BulkMailCenter</h1>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/mail">Mailing Services</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Index} />
                <Route path="/mail" exact component={Mail} />
            </div>
        );
    }
}

export default BulkMailCenter;
