import React from 'react';
import {Table} from 'antd';

const dataSource = [];

const columns = [{
  title: '变更单编号',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '标题',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '描述',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '级别',
  dataIndex: 'level',
  key: 'level',
}];

const Panel = React.createClass({
	render() {
		return  (
			<div className="panel-change">
				<div className="panel-header">
					变更工单
				</div>
				<br/>
				<Table 
					dataSource={dataSource} 
					columns={columns} 
					size="small"
					pagination={false}
				/>
			</div>
		)
	}
})

export default Panel;