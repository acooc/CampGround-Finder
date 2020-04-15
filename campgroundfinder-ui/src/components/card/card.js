import React, { Component } from 'react';
import { Image, Card, Grid, Icon } from 'semantic-ui-react';

import mapImage from './GoogleMapTA.jpg';
import Map from '../map/map'


export class cardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.cardData,
            moreInfo: false
        }

        this.moreInfo = this.moreInfo.bind(this);
    }

    moreInfo() {
        this.setState({
            moreInfo: true
        });
    }
    
    render() {
        return (
            <Card fluid>
                <Grid columns={2}  padded='vertically'>
                { this.state.moreInfo === false ?
                <Grid.Column>
                <Map
                    lat = { this.state.data.lat }
                    lng = { this.state.data._long }
                    />
            </Grid.Column>
            :
            <Grid.Column>
                <Image src={this.state.data.imgUrl} width="100%" wrapped ui={false} style={{ marginLeft: "15px"}}/>
            </Grid.Column>
                }
                { this.state.moreInfo === false ?
                <Grid.Column>
                    <br/>

                    <b><Icon name='map' size='large' /> Camp Name</b><br/>
                    {this.state.data.name}<br/><br/>

                    <b>Camp Address</b><br/>
                    {this.state.data.address}<br/><br/>

                    <b>Earliest Opening Date</b><br/>
                    {this.state.data.earliestDate.slice(0,10)}<br/><br/>

                    <b>Camp Total Sites</b><br/>
                    {this.state.data.total_sites}<br/><br/>

                    <b>Activites</b><br/>
                    {this.state.data.activities}<br/><br/>

                    <b>Camp Website</b><br/>
                    <a href={this.state.data.url}>{this.state.data.url}</a><br/><br/>

                    <button onClick={this.moreInfo} class="ui primary button">View more info</button>

                </Grid.Column>
                :
                <Grid.Column>
                <b/>
                
                <Grid columns={2}  padded='vertically'>
                <Grid.Column>
                
                <b>Camp Name</b><br/>
                {this.state.data.name}<br/><br/>

                <b>Camp Address</b><br/>
                {this.state.data.address}<br/><br/>

                <b>Earliest Opening Date</b><br/>
                {this.state.data.earliestDate.slice(0,10)}<br/><br/>

                <b>Latest Opening Date</b><br/>
                {this.state.data.latestDate.slice(0,10)}<br/><br/>

                <b>Camp Total Sites</b><br/>
                {this.state.data.total_sites}<br/><br/>

                <b>Full Season</b><br/>
                {this.state.data.full_season  ? "Yes" : "No"}<br/><br/>

                <b>Overnight Site</b><br/>
                {this.state.data.overnight_site  ? "Yes" : "No"}<br/><br/>

                <b>Roofed Lodging</b><br/>
                {this.state.data.roofed_lodging  ? "Yes" : "No"}<br/><br/>

                <b>Tenting Availible</b><br/>
                {this.state.data.tenting_availible  ? "Yes" : "No"}<br/><br/>

                <b>Total Sites</b><br/>
                {this.state.data.total_sites}<br/><br/>

                <b>Overnight Sites</b><br/>
                {this.state.data.overnight_sites}<br/><br/>

                <b>Seasonal Sites</b><br/>
                {this.state.data.seasonal_sites}<br/><br/>

                <b>Laundromat</b><br/>
                {this.state.data.laundromat  ? "Yes" : "No"}<br/><br/>

                <b>Pet Friendly</b><br/>
                {this.state.data.pet_friendly  ? "Yes" : "No"}<br/><br/>

                <b>Planned Activities</b><br/>
                {this.state.data.planned_activities ? "Yes" : "No"}<br/><br/>

                <b>Playground</b><br/>
                {this.state.data.playground ? "Yes" : "No"}<br/><br/>

                <b>Propane</b><br/>
                {this.state.data.propane ? "Yes" : "No"}<br/><br/>

                <b>Lake River Beach</b><br/>
                {this.state.data.lake_river_beach ? "Yes" : "No"}<br/><br/>

                <b>Propane</b><br/>
                {this.state.data.propane ? "Yes" : "No"}<br/><br/>

                <b>Toilets/Showers</b><br/>
                {this.state.data.toilets_showers ? "Yes" : "No"}<br/><br/>

                </Grid.Column>

                <Grid.Column>
                
                <b>Max Amperage</b><br/>
                {this.state.data.max_amperage}<br/><br/>

                <b>Electrical Water Sewer</b><br/>
                {this.state.data.electrical_water_sewer}<br/><br/>

                <b>Electrical Water</b><br/>
                {this.state.data.electrical_water}<br/><br/>

                <b>Electrical</b><br/>
                {this.state.data.electrical}<br/><br/>

                <b>No Services</b><br/>
                {this.state.data.no_services}<br/><br/>

                <b>Max Length of RV</b><br/>
                {this.state.data.max_length_of_rv}<br/><br/>

                <b>Accessible Facilities</b><br/>
                {this.state.data.accessible_facilities  ? "Yes" : "No"}<br/><br/>

                <b>Boating</b><br/>
                {this.state.data.boating  ? "Yes" : "No"}<br/><br/>

                <b>Cable TV</b><br/>
                {this.state.data.cabel_tv  ? "Yes" : "No"}<br/><br/>

                <b>Dumping</b><br/>
                {this.state.data.dumping  ? "Yes" : "No"}<br/><br/>

                <b>Group Camping</b><br/>
                {this.state.data.group_camping  ? "Yes" : "No"}<br/><br/>

                <b>Hot Tub</b><br/>
                {this.state.data.hot_tub  ? "Yes" : "No"}}<br/><br/>

                <b>Credit/Debit </b><br/>
                {this.state.data.credit_debit_cards  ? "Yes" : "No"}<br/><br/>

                <b>Hot Spot</b><br/>
                {this.state.data.hotspot  ? "Yes" : "No"}<br/><br/>

                <b>Wifi at Site</b><br/>
                {this.state.data.wifi_at_site  ? "Yes" : "No"}<br/><br/>

                <b>Pull Through Sites</b><br/>
                {this.state.data.pull_thru_sites ? "Yes" : "No"}<br/><br/>

                <b>Rec Hall</b><br/>
                {this.state.data.rec_hell ? "Yes" : "No"}<br/><br/>

                <b>Store</b><br/>
                {this.state.data.store ? "Yes" : "No"}<br/><br/>

                <b>Indoor Pool</b><br/>
                {this.state.data.indoor_pool ? "Yes" : "No"}<br/><br/>

                <b>Toilet Pit</b><br/>
                {this.state.data.toilet_pit_outside ? "Yes" : "No"}<br/><br/>

                <b>Outdoor Pool</b><br/>
                {this.state.data.outdoor_pool ? "Yes" : "No"}<br/><br/>

                </Grid.Column>

                
                </Grid>
                </Grid.Column>
                }
            </Grid>
            </Card>
        )
    }
}

export default cardView;