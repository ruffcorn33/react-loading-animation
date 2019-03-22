# react-loading-animation

Displays an animated gif when loading

## Usage

    import LoadingAnimation from "../components/LoadingAnimation";


    import animated-gif from "../images/animated-gif.gif";


    {!this.state.loading?
    do something
    :
    <LoadingAnimation image={animated-gif} message={translate.Loading} />
    }