import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

// Data
import items from '../data/menu';

const Menu = (props) => (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    {
        items && items.map(
            (item, key) => <MenuItem key={key} primaryText={<Link to={item.url}>{item.title}</Link>} />
        )
    }
    </IconMenu>
);

Menu.muiName = 'IconMenu';

class Header extends React.Component {
  render() {
    return (
        <div className="Header">
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="App React"
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        iconElementRight={<Menu />}
                    />
                </div>
            </MuiThemeProvider>
        </div>
    );
  }
}

export default Header;