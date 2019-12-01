import React, { Component } from 'react';
import Items from './Items';
import ItemsInCart from './ItemsInCart';


export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ItemsInlst: this.props.Itemslst,
            ItemInCart: this.props.ItemsInCartlist,
            cost: 0
        }
        console.log(this.props);
    }

    additems = (item) => {
        console.log(item)
        let NewCart = this.state.ItemInCart;
        NewCart.push(item);
        let Newlist = this.state.ItemsInlst.filter(x => x.id !== item.id);
        console.log("new list : "+Newlist)
        let Newcost = this.state.cost + item.price;
        this.setState ({
            ItemsInlst: Newlist,
            ItemInCart: NewCart,
            cost: Newcost
        });
        console.log(this.state.ItemInCart)
        console.log(this.state.ItemsInlst)
    }

    removeFromCart = (item) => {
        let Newlist = this.state.ItemsInlst;
        Newlist.push(item);
        let NewCart = this.state.ItemInCart.filter(x => x.id !== item.id);
        let Newcost = this.state.cost - item.price;
        this.setState ({
            ItemsInlst: Newlist,
            ItemInCart: NewCart,
            cost: Newcost
        });

    }

    render() {
        return (
            <div style={ShopStyle}>
                <div className="row">
                    <div className="col-sm-6">
                        <Items  additems={this.additems} ItemsInList={this.state.ItemsInlst} />
                    </div>
                    <div className="col-sm-6">
                        <ItemsInCart  removeFromCart={this.removeFromCart} ItemInCart={this.state.ItemInCart} totalprice={this.state.cost} />
                    </div>
                </div>
            </div>

        );

    }

}
const ShopStyle={
    padding:'50px'
}