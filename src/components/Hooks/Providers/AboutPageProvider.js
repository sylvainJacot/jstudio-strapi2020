import React, {createContext, Component} from "react";


export const AboutPageContext = createContext({
    isActive : false,
    name : "",
});

class AboutPageProvider extends Component {
    state = {
        isActive : false,
        name : "PizzaYolo",
    };

    render() {
        return (
        <AboutPageContext.Provider value={this.state}>
            {this.props.children}
        </AboutPageContext.Provider>
        )
    }
}

export default AboutPageProvider;