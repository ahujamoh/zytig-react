import React, { Component, PropTypes } from 'react';
import { Panel, Button } from 'react-bootstrap';

const title = 'Panel';

const dogPicture = require('../../../../common/images/dog.jpg');

class PanelsPage extends Component {

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.setTitle(title);
  }
  render() {
    return (
      <div className="animate">
        <div className="row">
          <div className="col-md-6">
            <Panel
              header={<span>Primary title</span>}
              bsStyle="primary"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <Button bsStyle="primary" className="btn-rounded pull-right">Click here!</Button>
            </Panel>

            <Panel
              header={<span>Danger Panel</span>}
              bsStyle="danger"
            >
              <h4>Lorem Ipsum</h4>
              <img
                className="img-responsive img-thumbnail pull-right"
                src={dogPicture} alt=""
              />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Panel>

            <Panel
              header={<span>Header</span>}
              bsStyle="success"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Panel>
          </div>

          <div className="col-md-6">
            <Panel
              header={<span>Hello World!</span>}
              bsStyle="info"
            >
              <blockquote>
                Start by doing what's necessary; then do what's possible; and suddenly
                you are doing the impossible. <small> Francis of Assisi </small>
              </blockquote>
              <blockquote className="pull-right">
                Start by doing what's necessary; then do what's possible; and suddenly
                you are doing the impossible. <small> Francis of Assisi </small>
              </blockquote>
            </Panel>

            <Panel
              header={<span>Warning</span>}
              bsStyle="warning"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Panel>

            <Panel
              header={<span>Default Header</span>}
              bsStyle="default"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}
export default PanelsPage;
