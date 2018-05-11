import React from 'react';
import AvatarComponent from './AvatarComponent';
import CardComponent from './CardComponent';
import ListComponent from './ListComponent';
import TabsComponent from './TabsComponent';

class Uikit extends React.Component {
  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 col-xs-12">
                <CardComponent />
            </div>
            <div className="col-md-6 col-xs-12">
                <AvatarComponent />
            </div>
            <div className="col-md-6 col-xs-12">
                <ListComponent />
            </div>
            <div className="col-md-6 col-xs-12">
                <TabsComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Uikit;