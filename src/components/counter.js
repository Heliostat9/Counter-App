import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as  actions from '../actions';

const Counter = ({counter, plus, minus, reset}) => {
    return (
        <React.Fragment>
            <div id="counter">{counter}</div>
            <div className="buttons"> 
                <button onClick={plus} className="btn plus" ><img src="./plus.svg" alt="plus"/></button>
                <button onClick={minus} className="btn minus" ><img src="./minus.svg" alt="minus"/></button>
                <button onClick={reset} className="btn reset" ><img src="./reload.svg" alt="reset"/></button>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);