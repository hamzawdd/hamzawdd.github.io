var ContactItem = React.createClass({
  render: function () {
    return (
        <div className="followItem">
          <i className={this.props.icon + " followIcon"}></i>
          <div className="followIconName">
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
      <div className="followList">
        {contactItems}
      </div>
    );
  }
});

var contactItems = [
  { name: "barbellatberkeley", icon: "fa fa-instagram" },
  { name: "Barbell at Berkeley", icon: "fa fa-facebook" }
];

ReactDOM.render(<ContactList contactItems={contactItems} />, document.getElementById('follow'));