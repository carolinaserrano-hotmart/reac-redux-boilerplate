import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Hello, there</h1>
            </div>
        );
    }
}

export default hot(module)(App);
