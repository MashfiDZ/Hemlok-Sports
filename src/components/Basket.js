import React, { Component } from 'react'
import util from '../util';
export default class Basket extends Component {
  render() {
    const {cartItems} = this.props;
    return (
      <div className="alert alert-info">
        {cartItems.length===0? "Basket Is Empty" : <div> You have {cartItems.length} products in the basket.</div>}
        <br></br>
        {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    X{item.count} = {item.price * item.count}
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                    <br />
                                </li>))
                            }
                        </ul>
                        <b>Total: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}</b>
                        <br></br><br></br>
                        <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary">checkout</button>
                    </div>
                }
      </div>
    )
  }
}
