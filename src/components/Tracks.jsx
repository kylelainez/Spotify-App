import React from 'react'
import { Item } from 'semantic-ui-react'

export default function Tracks({artist, title, uri, albumUrl, selectTrack}) {
    return (
            <Item onClick={() => selectTrack(uri)} style ={{cursor:'pointer', backgroundColor: 'white', padding: '5px'}}>
                <Item.Image src={albumUrl} size='tiny'/>
                <Item.Content>
                    <Item.Header>{title}</Item.Header>
                    <Item.Meta>{artist.map((art, idx) => 
                        idx === artist.length - 1
                            ? art.name 
                            : art.name + ", "
                    )}</Item.Meta>
                </Item.Content>
            </Item>
    )
}
