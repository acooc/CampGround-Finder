import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Grid, Image, Card, Button, Icon } from 'semantic-ui-react';

export class about extends Component {

    render() {

        return (
            <Container>
                <Grid columns={4} padded='vertically'>
                    <Grid.Column>
                    <Card>
                    
                    <Card.Content>
                    <Card.Header>Andy Cooc</Card.Header>
                    <Card.Meta>
                        <span className='date'>Developr</span>
                    </Card.Meta>
                    <Card.Description>
                       
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        
                    </a>
                    </Card.Content>
                    </Card>
                    </Grid.Column>
                    <Grid.Column>
                    <Card>
                    
                    <Card.Content>
                    <Card.Header>Nakil Jung</Card.Header>
                    <Card.Meta>
                        <span className='date'>Developer</span>
                    </Card.Meta>
                    <Card.Description>
                        
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        
                    </a>
                    </Card.Content>
                    </Card>
                    </Grid.Column>
                    <Grid.Column>
                    <Card>
                    
                    <Card.Content>
                    <Card.Header>Brian Kim</Card.Header>
                    <Card.Meta>
                        <span className='date'>Developer</span>
                    </Card.Meta>
                    <Card.Description>
                        
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        
                    </a>
                    </Card.Content>
                    </Card>
                    </Grid.Column>
                    <Grid.Column>
                    <Card>
                    
                    <Card.Content>
                    <Card.Header>Samantha West</Card.Header>
                    <Card.Meta>
                        <span className='date'>Developer</span>
                    </Card.Meta>
                    <Card.Description>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                      
                    </a>
                    </Card.Content>
                    </Card>
                    </Grid.Column>
                </Grid>
            </Container>
        )
}
}

export default about;