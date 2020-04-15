import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { List } from 'semantic-ui-react';

export class navigation extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg fixed-top green"><a href="/" class="navbar-brand">Campground Finder</a>
                <Container id="navbarSupportedContent" className="collapse navbar-collapse">
                    <List className="navbar-nav ml-auto align-items-start align-items-lg-center">
                        <List.Item class="nav-item"><a href="/" class="nav-link link-scroll">Home</a></List.Item>
                        <List.Item class="nav-item"><a href="/about" class="nav-link link-scroll">About Us</a></List.Item>
                    </List>
                </Container>
            </nav>
        )
    }
}

export default navigation;