var ProductItem = React.createClass({

  render: function () {
    return (
      <div className="lifterCard">
        <div className="lifterImgContainer">
          <img className="img-scaled-wh lifterImg" src={this.props.img}/>
        </div>
        <div className="lifterName">{this.props.name}</div>
        <div className="lifterPosition">{this.props.position}</div>
      </div>
    );
  }
});

var ProductList = React.createClass({

  render: function () {
    var products = this.props.products.map(function (product, index) {
      return (
        <ProductItem
          key={index}
          name={product.name}
          position={product.position}
          img={product.img}
        />
      );
    });
    
    return (
      <div>
        {products}
      </div>
    );
  }
});

var products = [
  { name: "Heather Lockwood", position: "Coach", img: "assets/img/heather.png" },
  { name: "Wynnie Young", position: "Coach", img: "assets/img/wynnie.jpg" },
  { name: "Joshua Yu", position: "Coach", img: "assets/img/joshua.jpg" },
  { name: "Connor O'Neal", position: "President", img: "assets/img/connor.png" },
  { name: "Carter Ly", position: "Secretary", img: "assets/img/carter.png" },
  { name: "Hamza Ahmed", position: "Social Chair", img: "assets/img/hamza.png" },
  { name: "David Hwang", position: "Treasurer", img: "assets/img/david.jpeg" },
  { name: "Sam Ciocys", position: "Lifter", img: "assets/img/sam.jpg" },
  { name: "Sam Ciocys", position: "Lifter", img: "assets/img/sam.jpg" }
];

ReactDOM.render(<ProductList products={products} />, document.getElementById('team'));