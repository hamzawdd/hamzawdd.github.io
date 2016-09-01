var ContactItem = React.createClass({
  render: function () {
    return (
      <a target="_blank" href={this.props.link}>
        <div className="followItem">
          <i className={this.props.icon + " followIcon"}></i>
          <div className="followIconName">
            {this.props.name}
          </div>
        </div>
      </a>
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
          link={contactItem.link}
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
  { name: "barbellatberkeley", icon: "fa fa-instagram", link: "https://instagram.com/berkeleybarbellclub" },
  { name: "Barbell at Berkeley", icon: "fa fa-facebook", link: "https://www.facebook.com/groups/537417056451110/" }
];

ReactDOM.render(<ContactList contactItems={contactItems} />, document.getElementById('follow'));