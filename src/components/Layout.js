import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu /><br /><br /><br /><br />
        <div style={{marginLeft: '4%', marginRight: '4%'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
