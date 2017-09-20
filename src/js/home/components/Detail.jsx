import React from 'react';
import { Button, Icon } from 'antd';

const Detail = React.createClass({
	render() {
		return (
			<div className="panel-detail">
				<div className="toggle">
                    <Icon type="forward"/>
                </div>
                <br/>
                <div className="panel-detail">
                	<div className="meta">
                		<h3 style={{marginTop: 5}}> 基本信息 </h3> 
	                    <p>名称：23 黄务</p>
	                    <p>类型：节点类型 </p>
	                    <p>描述：23 黄务系统详细描述 </p>
	                    <p>节点状态：正常 </p>
	                </div>
	                <div className="relations">
	                	<h3>节点关系</h3>
	                	<p>它指向的节点</p>
	                	<ul>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                	</ul>
	                	<p>指向它的节点</p>
	                	<ul>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                		<li> 节点1 <Icon type="right"/></li>
	                	</ul>
	                </div>
                </div>
			</div>
		)
	}
})

export default Detail;