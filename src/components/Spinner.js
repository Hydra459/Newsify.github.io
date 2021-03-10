import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Spinner = () => {
    return(
        <Segment>
      <Dimmer active inverted>
        <Loader size='large' className="spinner">Loading</Loader>
        
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
    )
}

export default Spinner; 