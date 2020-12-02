import React, { Component } from 'react';
import { Row, Col, Card, Timeline } from 'antd';
import Example from '../Assets/Example.png';
import CustomLayout from '../Containers/Layout';
import CustomFooter from '../Containers/Footer';

class Home extends Component {
    render(){
        return(
            <div>
            <CustomLayout />
            <br />
            <center><h1>Pyramid</h1></center>
            <Row>
            <Col xl={12} xs={20}>
                <center><img alt="Example" src={Example} width="270px"></img></center>
            </Col>
            <Col xl={12} xs={20}>
                <br />
                <h2>Steps</h2>
                <Timeline>
                    <Timeline.Item>Enter name of players</Timeline.Item>
                    <Timeline.Item>Enter pyramid height</Timeline.Item>
                    <Timeline.Item>Start Drinking and Playing</Timeline.Item>
                </Timeline>
                < br />
                <h2>Rules</h2>
                <Card bordered={false}>
                    <p>2 cards are randomly assigned per player</p>
                    <p>Game difficulty depends on the height of the pyramid</p>
                </Card>
                
            </Col>
            </Row>
            <br />
            <br />
            <CustomFooter />
            </div>
        );
    }
}

export default Home;