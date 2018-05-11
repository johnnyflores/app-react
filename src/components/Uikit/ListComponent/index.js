import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class ListComponent extends React.Component {
    render() {
        return (
            <div className="List">
                <h1>List</h1>
                <MuiThemeProvider>
                    <List>
                    <Subheader>Recent chats</Subheader>
                        <ListItem
                            primaryText="Brendan Lim"
                            leftAvatar={<Avatar src="http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg" />}
                            rightIcon={<CommunicationChatBubble />}
                        />
                        <ListItem
                            primaryText="Eric Hoffman"
                            leftAvatar={<Avatar src="http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg" />}
                            rightIcon={<CommunicationChatBubble />}
                        />
                        <ListItem
                            primaryText="Grace Ng"
                            leftAvatar={<Avatar src="http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg" />}
                            rightIcon={<CommunicationChatBubble />}
                        />
                        <ListItem
                            primaryText="Kerem Suer"
                            leftAvatar={<Avatar src="http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg" />}
                            rightIcon={<CommunicationChatBubble />}
                        />
                        <ListItem
                            primaryText="Raquel Parrado"
                            leftAvatar={<Avatar src="http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg" />}
                            rightIcon={<CommunicationChatBubble />}
                        />
                    </List>                
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <List>
                    <Subheader>Previous chats</Subheader>
                        <ListItem
                            primaryText="Chelsea Otakan"
                            leftAvatar={<Avatar src="http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg" />}
                        />
                        <ListItem
                            primaryText="James Anderson"
                            leftAvatar={<Avatar src="http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg" />}
                        />
                    </List>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default ListComponent;