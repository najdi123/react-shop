import React, { Component } from 'react';
import '../App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import data from '../Api/data';
import { Grid, Row, Col, Thumbnail} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div>
                    <Grid>
                        <Row>
                            {
                                data.products.map(item => (
                                    <Col xs={12} md={4} key={item.id}>
                                        <Thumbnail src={'/images/products/' + item.id + '.jpg'} href={'/Products' + item.id} >
                                            {item.name} {item.price}
                                        </Thumbnail>

                                    </Col>
                                ))
                            }
                        </Row>
                    </Grid>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
