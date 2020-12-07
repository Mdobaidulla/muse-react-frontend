
import {Card, Button} from 'semantic-ui-react'

const SongList = (props)=>{
    const songs = props.songs.map((song) =>{
        return(
            <Card key={song.id}>
                <Card.Content>
                    <Card.Header>{song.title}</Card.Header>
                    <Card.Description>{song.artist}</Card.Description>
                    <Card.Description> {song.album}</Card.Description>
                </Card.Content>
                <Card.Content>
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                </Card.Content>
            </Card>
        )
    })
    return(
        <Card.Group>
            {songs}
        </Card.Group>
    )
}

export default SongList;