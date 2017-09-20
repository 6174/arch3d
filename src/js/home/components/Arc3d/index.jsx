import React from 'react';
import ReactDOM from 'react-dom';
import Arc3dTHREE from './Arc3dTHREE';

let arc3dThree = new Arc3dTHREE();

const Arc3d = React.createClass({
    shouldComponentUpdate(nextProps) {
        // if (this.props === nextProps) {
        //     return false;
        // }
        return true;
    },
    componentDidUpdate(prevProps, prevState) {
        this.updateArc3d();
    },
    componentDidMount() {
        this.updateArc3d();
    },
    updateArc3d() {
        arc3dThree.mount({
            graphData: this.props.graphData,
            $container: ReactDOM.findDOMNode(this)
        });
    },
    render() {
        return (
            <div className="arc3d-react-wrapper">
                
            </div>
        )
    }
});

export default Arc3d;