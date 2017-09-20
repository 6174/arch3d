import React from 'react';
import { Button, Icon, Popover, Select} from 'antd';
const Option = Select.Option

// <Popover 
//  	content={this.renderContent()} 
//  	trigger="click">
//  	<span>P2P 联合存管系统 <Icon type="down"/></span> 
// </Popover>
// renderContent() {
// 	return (
// 	  <div>
// 	    <p>内容</p>
// 	    <p>内容</p>
// 	  </div>
// 	)
// }

const Header = React.createClass({
	render() {
		return (
			<div className="ant-row">
                <div className="ant-col ant-col-2">
                    <a className="logo"> <Icon type="cloud-o"/>3D 架构图</a>
                </div>
                <div className="ant-col ant-col-22 title">
                	<Select showSearch
					    style={{ width: 200 }}
					    placeholder="请选择应用系统"
					    optionFilterProp="children"
					    notFoundContent="无法找到"
					    defaultValue="p2p"
					    onChange={this.handleChange}
					  >
					    <Option value="it">IT综合管理系统</Option>
					    <Option value="p2p">P2P联合存管系统</Option>
					    <Option value="p2p2">P2P资金存管系统</Option>
					</Select>
                </div>
            </div>
		)
	},
	handleChange(value) {
		this.props.dispatch('graphData/get', {
			id: value
		});
	}
})

export default Header;