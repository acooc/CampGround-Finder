import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { SearchResults } from './../searchResults';
import { Button, Form } from 'semantic-ui-react';
import DatePicker from "react-datepicker";

import accomidationsData from "./accomidations.json";
import activitiesData from "./activities.json";
import dummyData from './dummyData.json';

import "react-datepicker/dist/react-datepicker.css";
  
export class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dummyData,
            filteredData: [],
            cardView: false,
            activities: activitiesData,
            accomidations: accomidationsData,
            zipCode: props.zipcode,
            page: 0,
            max: 10,

            activityOptions: this.mapValues(activitiesData),
            accomidationOptions: this.mapValues(accomidationsData),
            
            formData: {
                location: '',
                accomidations: [],
                activities: [],
                date: new Date()
            }
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Map json values to key/values pairs usable for form fields
    mapValues(data) {
        let valuesMapped = data.map((value, index) => {
            return { key: index, text: value, value: value }
        });
        return valuesMapped;
    }
    
    // Handle user form input change
    handleChange(value, name) {
        let formDataCopy = this.state.formData;
        formDataCopy[name] = value;
        
        this.setState({
            formData: formDataCopy
        });
    }

    // Handle user form submission
    handleSubmit(event) {
        this.setState({
            cardView: false
        });
        this.filterSearch();
        event.preventDefault();
    }

    // Filter users search within form
    filterSearch() {
        let tempData = [];
        this.setState({
            filteredData: tempData
        });

        // IF form is empty an zipCode is not null
        if (this.state.zipCode && this.state.formData['location'] === '') {
            let postalCode = (this.state.zipCode.replace(" ", "")).toUpperCase();

            for(let data of this.state.data){
                let code = data['postalCode'].replace(" ", "");
                if(code.includes(postalCode)){
                    tempData.push(data);
                }
            }
        } else {
            let postalCode = (this.state.formData.location.replace(" ", "")).toUpperCase();
            
            // Filter by Location
            for(let data of this.state.data){
                let code = data['postalCode'].replace(" ", "");
                // Check for postal code
                if(code.includes(postalCode)){
                    tempData.push(data);
                }
            }
            
            // Filter by Activities
            if(this.state.formData.activities.length > 1){
                tempData = []
                for(let data of this.state.filteredData){
                    let activities = data.activities.split(',');
                    
                    for(let a of this.state.formData.activities){
                        if(activities.includes(a)){
                            tempData.push(data);
                        }
                    }
                }
            }
        }
        
        this.setState({
            filteredData: tempData
        });
    }

    componentDidMount(){
        this.filterSearch();
    }

    render() {
        return (
            <>
            { this.state.cardView === false ?
            <Container>
                <br/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input
                            name="location"
                            label="Location"
                            placeholder='Location' 
                            value={this.state.formData.location}
                            onChange={(e, data) => this.handleChange(data.value, data.name)}
                        />
                        <Form.Dropdown
                            name="accomidations"
                            options={this.state.accomidationOptions}
                            label="Accommodations"
                            placeholder='Select accomidations...'
                            fluid
                            search
                            selection
                            multiple
                            value={this.state.formData.accomidations}
                            onChange={(e, data) => this.handleChange(data.value, data.name)}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Dropdown
                            name="activities"
                            options={this.state.activityOptions}
                            label="Activities"
                            placeholder='Select activities...'
                            fluid
                            search
                            selection
                            multiple
                            value={this.state.formData.activities}
                            onChange={(e, data) => this.handleChange(data.value, data.name)}
                        />
                        <Form.Field>
                        <label>Date</label>
                        <DatePicker
                            name="date"
                            label="Date"
                            formatDate={date => date.toLocaleDateString("en-US", this.state.formData.date)}
                            parseDate={str => new Date(str)}
                            value={this.state.formData.date}
                            selected={this.state.formData.date}
                            onChange={(e, data) => this.handleChange(e, 'date')}
                        />      
                        </Form.Field>  
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>
                <br/>
                { this.state.data ?
                    <SearchResults 
                        data={this.state.filteredData}
                        cardView={this.state.cardView}
                    />
                : null }
            </Container>
            : null }
            </>
        )
    }
}

export default search;