import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Layout } from './Layout';

export class Header extends React.Component {
    displayName = Layout.name;

    render() {
        return (
            <Row style={{ backgroundColor: "#222", height: "100px" }}>
                <Col sm={12}>
                    <label className='pull-right' style={{ color: "white", fontSize: "large" }}> Hello {this.props.userName} ! </label>
                </Col>
            </Row>    
        );
    }
}