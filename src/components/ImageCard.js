import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 }

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        // need to do otherwise React will attempt to get property on an element that hasn't been loaded yet.
        this.imageRef.current.addEventListener('load', this.setSpans) 
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState( {spans} )
    }

    render() {
        const { description, urls } = this.props.image; //destructure
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    alt={description} 
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;