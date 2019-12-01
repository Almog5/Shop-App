import React, { Component } from 'react';
import CItem from './CItem';


export default class ItemInCart extends Component {
  //  constructor(props) {
  //      super(props)
  //  }



    render() {

        return (
            <div>
                <h1>Bag</h1>
                {
                    this.props.ItemInCart.map((item, index) => <CItem key={index} item={item} removeFromCart={this.props.removeFromCart} cartflag={true} />)

                }
                <h1>Total price: {this.props.totalprice}</h1>
            </div>

        );
    }
}