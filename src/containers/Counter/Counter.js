import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.prop} />
                <CounterControl label="Increment" clicked= { this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 4" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prop: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch ({ type: 'INCREMENT', value: 1, name: 'bunny' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD' }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);