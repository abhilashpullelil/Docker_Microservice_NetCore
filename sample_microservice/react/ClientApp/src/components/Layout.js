import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Header } from './Header';

export class Layout extends Component {
  displayName = Layout.name

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={3}>
            <NavMenu />
          </Col>
                <Col sm={9}>
                    <Header userName={'Hi'} />
                    {this.props.children}
                    <Row style={{ backgroundColor: "#222", color: "white", textAlign: "center", bottom: "0px" }}>
                        <Col sm={12}>
                            <h5> Footer - {'Hi'} </h5>
                        </Col>
                    </Row>
                </Col>
        </Row>
      </Grid>
    );
  }
}
