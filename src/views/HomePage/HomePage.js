import React, { Component } from 'react';
import { Jumbotron } from '../../components';
import image from '../../assets/img/bg.png';
import { Footer } from '../../components';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron key="Jumbotron" image={image} />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
