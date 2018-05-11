import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardComponent extends React.Component {
  render() {
    return (
        <div className="Cartita">
            <h1>Card</h1>
            <MuiThemeProvider>
                <Card>
                    <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg"
                    />
                    <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                    <img src="http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg" alt="" />
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        </div>
    );
  }
}

export default CardComponent;