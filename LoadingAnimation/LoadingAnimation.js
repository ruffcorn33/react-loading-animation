import React, {Component} from "react";
import './LoadingAnimation.css';
// import sweeper from "../../images/sweeper.gif";
let AnimationFile;

class LoadingAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message,
        };
        AnimationFile = this.props.image;
    }
    
    render() {
        return (
                <div id="loading-message">
                    <img src={AnimationFile}alt="loading" />
                    <hr />
                    {this.props.message}
                </div>
        );
    }
}

export default LoadingAnimation;