import React, {Component} from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateSongForm extends Component{
    constructor(props){
        super(props);

        this.state={
            title:'',
            artist:'',
            album:''
        }
    }
    handleChange=(e) =>{
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render(){
        return(
            <Segment>
                <Form onSubmit={(e) =>{
                    this.props.addSong(e,this.state)
                    this.setState({title:'',artist:'', album:''})
                }}>
                    <Label>Titile:</Label>
                    <Form.Input type='text' 
                    name='title' 
                    value={this.state.title}
                     onChange={this.handleChange} required/>
                    <Label>Artist:</Label>
                    <Form.Input type='text' 
                    name='artist' 
                    value={this.state.artist}
                     onChange={this.handleChange} required/>
                    <Label>Album:</Label>
                    <Form.Input type='text' 
                    name='album' 
                    value={this.state.album}
                     onChange={this.handleChange} required/>
                     <Button type="Submit">Add Song</Button>
                </Form>
            </Segment>
        )
    }

}
export default CreateSongForm;