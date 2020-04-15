import React, { Component } from 'react';
import { Grid, Image, Card, Button } from 'semantic-ui-react';
import { CardView } from './../card';

export class searchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            cardPage: false,
            currentCardData: {}
        } 
    
    this.onCardClick = this.onCardClick.bind(this);
    }

    // Display campground view on users card selection
    onCardClick(data){
        this.setState({
            currentCardData: data,
            cardPage: true,
        }); 
    }

    // Refresh state for component receiving props
    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data
        });
        this.forceUpdate();
    }

    componentDidMount(){
    }

    render() {
        return (
            <>
            { this.state.cardPage === false ?
            <Grid columns={2} padded='vertically'>
                { this.state.data.map((data, index) =>
                <Grid.Column>
                    <Card 
                        key={index}
                        fluid
                        onClick={() => this.onCardClick(data)}
                        >
                        <Image src={data.imgUrl} width={200} height={150} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{data.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{data.address}</span>
                            </Card.Meta>
                            <Card.Description>
                                <b>Earliest Date: </b> {data.earliestDate.slice(0,10)} <br/>
                                <b>Latest Date: </b> {data.latestDate.slice(0,10)}
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button href={data.url} primary>{data.url}</Button>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                )}
            </Grid>
            : 
            <CardView
                cardData={this.state.currentCardData}
            />
            }
            </>
        )
    }
}

export default searchResults;