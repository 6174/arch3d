/**
 * App Component
 */
import React from 'react';
import M from 'immutable';
import {connect} from 'react-redux';
import Arc3d from './Arc3d';
import Menu from './Menu/index';
import Detail from './Detail';
import Header from './Header';

const App = React.createClass({
    render() {
        return (
            <div className="app-container">
                <div className="app-top">
                    <Header dispatch={this.props.dispatch}/>
                </div>
                <div className="app-center">
                    <div className="app-main">
                        <Arc3d 
                            {...this.props}
                        />
                    </div>
                    <div className="app-right-toolbar">
                        <Detail/>
                    </div>
                </div>
                <div className="app-bottom">
                   <Menu />
                </div>
            </div>
        )
    }
});

/**
 * transform store data to App props
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const mapStateToProps = (state) => {
	return {
		graphData: state.get('graphData')
	}
}

/**
 * add dispatch to 
 * @param  {[type]} dispatch [description]
 * @return {[type]}          [description]
 */
const mapDispatchToProps = (dispatch) => {
	return {
		dispatch: (type, payload) => {
			dispatch({
                type,
                payload
            });
		}
	}
}

/**
 * create redux container
 * @type {[type]}
 */
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;