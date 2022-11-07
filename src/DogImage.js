import React from 'react';
import {fetchDogImages} from "./apiStore";

class DogImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {dogUrl: ""};
    }

    async updateDog() {
        const dogImage = await fetchDogImages();
        this.setState({dogUrl: dogImage});
    }

    render() {
        const {dogUrl} = this.state;
        return <div>
            <img src={dogUrl} alt={dogUrl} style={{height: '30rem', width: 'auto', borderRadius: '8px'}}/>
            <br/>
            <button onClick={() => {this.updateDog()}} style={
                {margin:'10px', height: '40px', backgroundColor: '#EA4C89', color: '#FFFFFF', cursor: 'pointer', borderRadius: '8px'}
            }>החלפת כלב</button>
        </div>
    }
}

export default DogImage;

//

//