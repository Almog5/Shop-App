import React, { Component } from 'react';


export default class CItem extends Component {
  //  constructor(props) {
   //    super(props)
  // }

    render() {
        if (this.props.cartflag)
            return (
                <div className="row" style={ItemCartStyle}>
                    <div className="col-12">
                        <h2>{this.props.item.name}</h2>
                        <h3>price: {this.props.item.price} euro</h3>
                        <button  onClick= {() => this.props.removeFromCart(this.props.item)}>delete</button>
                    </div>
                </div>
            );
        else return (
            //<div className="row">
                    <div className="col-6" style={ItemsStyle}>
                        <img src={this.props.item.image} alt={this.props.name}/>
                        <p>{this.props.item.name}</p>
                        <p>price: {this.props.item.price} euro</p>
                        <button  onClick= {() => this.props.additems(this.props.item)}>add</button>
                    </div>
                //</div>
        );
    }
}

const ItemsStyle={
    padding:'10px',
    border:'2px solid #333',   
}
const ItemCartStyle={
    padding:'10px',
    border:'2px solid #333',
    width:'50%',
    margin :'auto',
    textAlign:'center'
}