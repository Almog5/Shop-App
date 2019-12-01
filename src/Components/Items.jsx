import React, { Component } from 'react';
import CItem from './CItem';



export default class Items extends Component {
  //  constructor(props) {
     //   super(props)

   // }
   
    render() {

        return (
            
            <div className="row" >


                {
                    
                    this.props.ItemsInList.map((item,index) => <CItem key={index} item={item} additems={this.props.additems} cartflag={false} />)
                }

            </div>

        );
    }
}
