var SponsorItem = React.createClass({

  render: function () {
    return (
      <div className="sponsorCard">
        <div className="sponsorName">{this.props.name}</div>
          <div className="sponsorImgContainer">
            <a target="_blank" href={this.props.link}>
              <img className="img-scaled-wh" id={this.props.id} src={this.props.path}/>
            </a>
          </div>
      </div>
    );
  }
});

var SponsorList = React.createClass({

  render: function () {
    var sponsors = this.props.sponsors.map(function (sponsor, index) {
      return (
        <SponsorItem
          key={index}
          name={sponsor.name}
          id={sponsor.id}
          path={sponsor.path}
          link={sponsor.link}
        />
      );
    });
    
    return (
      <div>
        {sponsors}
      </div>
    );
  }
});

var sponsors = [
  { name: "Slingshot", id: "slingshot", path: "assets/img/slingshot.jpg", link: "http://howmuchyabench.net" },
  { name: "Citadel Nutrition", id: "citadel", path: "assets/img/citadel.jpg", link: "http://citadelnutrition.com" }
];

ReactDOM.render(<SponsorList sponsors={sponsors} />, document.getElementById('sponsors'));