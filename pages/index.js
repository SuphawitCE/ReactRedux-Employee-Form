import React from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';
import MainForm from './mainForm';


class App extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        // Destructuring incrementCounter, decrementCounter
        const { incrementCounter, decrementCounter, counter } = this.props;
        return (
            <div className="counter-page">
                <MainForm  />
                {/*
                <button onClick={incrementCounter}>Increment</button>
                <button onClick={decrementCounter}>Decrement</button>
                <h1>{counter}</h1> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value
    
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
