var ContactItem = React.createClass({
  render: function () {
    return (
        <div className="contactItem">
          <i className={this.props.icon + " contactIcon"}></i>
          <div className="contactIconName">
            {this.props.name}
          </div>
        </div>
    );
  }
});

var ContactList = React.createClass({
  render: function () {
    var contactItems = this.props.contactItems.map(function (contactItem, index) {
      return (
        <ContactItem
          key={index}
          name={contactItem.name}
          icon={contactItem.icon}
        />
      );
    });
    
    return (
      <div className="contactList">
        {contactItems}
      </div>
    );
  }
});

var contactItems = [
  { name: "barbellatberkeley", icon: "fa fa-instagram" },
  { name: "Barbell at Berkeley", icon: "fa fa-facebook" }
];

ReactDOM.render(<ContactList contactItems={contactItems} />, document.getElementById('contact'));