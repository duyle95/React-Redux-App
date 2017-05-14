import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import ContactListItem from './contact_list_item';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = { asc: "" }
  }

  renderList() {
    return this.props.contacts.map((contact) => {
      return (
        <ContactListItem
          key={contact.id}
          contact={contact} />
      );
    });
  }

  sorting(prop) {
    if(this.state.asc) {
      this.setState({asc: false});
    }
    else {
      this.setState({asc: true});
    }

    const sortObj = {
      asc: this.state.asc,
      property: prop
    }
    this.props.sortContact(sortObj);
  }

  render() {
    return (
      <table className="table contact-list">
        <thead>
          <tr>
            <th><span onClick={() => this.sorting("name")} className="col">Name &nbsp;<i className={this.state.asc ? "fa fa-arrow-up" : "fa fa-arrow-down"} aria-hidden="true"></i></span></th>
            <th><span onClick={() => this.sorting("email")} className="col">E-mail address</span></th>
            <th><span onClick={() => this.sorting("phone")} className="col">Phone number</span></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

export default connect(mapStateToProps, actions)(ContactList);
