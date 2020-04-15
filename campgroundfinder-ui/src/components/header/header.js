import React, { Component } from 'react';
import { SearchBar } from './../searchBar';
import { Container } from 'semantic-ui-react';


export class header extends Component {

    render() {
        return (
            <section id="hero" class="hero hero-home bg-gray">
                <Container id ="hero" className="container hero hero-home bg-grey">
                    <Container className="row d-flex">
                    <Container className="col-lg-6 text order-2 order-lg-1">
                        <h2>Find your perfect</h2>
                        <h1>Campground.</h1>
                        <p class="hero-text">Search through thousands of campgrounds based on location, activities, resutrants, parks and more to plan the perfect experiance.</p>
                        <SearchBar></SearchBar>
                    </Container>
                    </Container>
                </Container>
            </section>
        )
    }
}

export default header;