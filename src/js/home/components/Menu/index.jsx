import React from 'react';
import Panels from './Panels';
import {Icon} from 'antd';

const Menu = React.createClass({
	getInitialState() {
		return {
			currentPanel: 'ViewConfig'
		}
	},

	render() {
		const Panel = Panels[this.state.currentPanel];
		return  (
			<div>
				<div className="app-bottom-plugin-container">
					<div className="toggle down">
	                    <Icon type="forward"/>
	                </div>
	                <Panel/>
	            </div>
	            <div className="app-bottom-plugin-list">
	                <ul>
	                    {this.renderMenuList()}
	                </ul>
	            </div>
            </div>
		)
	},
	renderMenuList() {
		let list = [{
			label: '视图配置',
			panel: 'ViewConfig'
		}, {
			label: '配置信息',
			panel: 'ConfigInfo'
		}, {
			label: '警告信息',
			panel: 'WarningInfo'
		}, {
			label: '监控信息',
			panel: 'NightWatch'
		}, {
			label: '故障工单',
			panel: 'Issues'
		}, {
			label: '变更工单',
			panel: 'Change'
		}, {
			label: '应急预案',
			panel: 'Emergency'
		}];

		const currentPanel = this.state.currentPanel;

		return list.map(it => {
			let className = '';
			if (currentPanel === it.panel) {
				className = 'active';
			}
			return (
				<li 
					key={`panel-${it.label}`}
					className={className}
					onClick={this.switchPanel.bind(null, it.panel)}
				>	
					{it.label}
				</li>
			)
		})
	},
	switchPanel(panel) {
		this.setState({
			currentPanel: panel
		});
	}
});



export default Menu;