var ProductItem = React.createClass({

  render: function () {
    return (
      <div className="lifterCard">
        <div className="lifterImgContainer">
          <img className="img-scaled-wh lifterImg" src="assets/img/edward.jpg"/>
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
  { name: "Heather Lockwood", position: "Coach" },
  { name: "Wynnie Young", position: "Coach" },
  { name: "Joshua Yu", position: "Coach" },
  { name: "Connor O'Neal", position: "President" },
  { name: "Carter Ly", position: "Secretary" },
  { name: "Hamza Ahmed", position: "Social Chair" },
  { name: "David Hwang", position: "Treasurer" },
  { name: "Sam Ciocys", position: "Lifter" }
];

ReactDOM.render(<ProductList products={products} />, document.getElementById('team'));