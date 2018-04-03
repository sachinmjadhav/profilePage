import React, { Component } from 'react';
import { Jumbotron } from '../../components';
import image from '../../assets/img/bg.png';
import Footer from '../Footer/Footer';

class HomePage extends Component {
    render() {
        return (
            [
                <Jumbotron key="Jumbotron" image={image} >
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                </Jumbotron>,
                <div key="test">
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <h1>Test</h1><br />
                    <Footer />
                </div>
            ]
        );
    }
}

export default HomePage;
