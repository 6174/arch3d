import React from 'react';
import {Table} from 'antd';

const Panel = React.createClass({
	render() {
		return  (
			<div className="panel-config-info">
				<div className="panel-header">
					应急预案
				</div>
				<br/>
        <p> 预案1： xxxxxx.jpg </p>
        <p> 预案2： xxxxxx.jpg </p>
			</div>
		)
	}
})

export default Panel;