import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

class TabsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'a',
        };
    }
    
    handleChange = (value) => {
        this.setState({
          value: value,
        });
    };
    render() {
        return (
            <div className="Tabs">
                <h1>Tabs</h1>
                <MuiThemeProvider>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <Tab label="Tab A" value="a">
                        <div>
                            <h2 style={styles.headline}>Controllable Tab A</h2>
                            <p>
                            Tabs are also controllable if you want to programmatically pass them their values.
                            This allows for more functionality in Tabs such as not
                            having any Tab selected or assigning them different values.
                            </p>
                        </div>
                        </Tab>
                        <Tab label="Tab B" value="b">
                        <div>
                            <h2 style={styles.headline}>Controllable Tab B</h2>
                            <p>
                            This is another example of a controllable tab. Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                            </p>
                        </div>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <Tabs>
                        <Tab icon={<ActionHome />} />
                        <Tab icon={<ActionFlightTakeoff />} />
                        <Tab icon={<ActionFavorite />} />
                    </Tabs>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default TabsComponent;