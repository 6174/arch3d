import React from 'react';
import {Checkbox, Icon} from 'antd';

const Panel = React.createClass({
	render() {
		return  (
			<div className="panel-view-setting">
				<div className="ant-row">
					<div className="ant-col ant-col-6 controls">
						<ul>
							<li> 
								<Checkbox>
									显示层间连线
								</Checkbox>
							</li>
							<li> 
								<Checkbox>
									显示警告节点
								</Checkbox>
							</li>
						</ul>
					</div>
					<div className="ant-col ant-col-18 list">
						<ul>
							<li>2d 图层列表</li>
							<li className="ant-row list-item">
								<div className="ant-col ant-col-4 list-item-img">
									<img src="/assets/img/layer1.png"/>
								</div>
								<div className="ant-col ant-col-20 list-item-detail">
									逻辑架构图
								</div>
								<Icon type="right"/>
							</li>
							<li className="ant-row list-item">
								<div className="ant-col ant-col-4 list-item-img">
									<img src="/assets/img/layer1.png"/>
								</div>
								<div className="ant-col ant-col-20 list-item-detail">
									部署架构图
								</div>
								<Icon type="right"/>
							</li>
							<li className="ant-row list-item">
								<div className="ant-col ant-col-4 list-item-img">
									<img src="/assets/img/layer1.png"/>
								</div>
								<div className="ant-col ant-col-20 list-item-detail">
									网路架构图
								</div>
								<Icon type="right"/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
});

export default Panel;