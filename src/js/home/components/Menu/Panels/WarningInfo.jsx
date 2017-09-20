import React from 'react';
import {Table} from 'antd';

const dataSource = [{
  key: '1',
  name: 'xxxx故障',
  age: "23 黄务",
  address: '2016-8-23'
}, {
  key: '2',
  name: 'xxxx故障',
  age: "北京",
  address: '2016-8-23'
}];

const columns = [{
  title: '描述',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '节点',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '时间',
  dataIndex: 'address',
  key: 'address',
}];

const Panel = React.createClass({
	render() {
		return  (
			<div className="panel-config-info">
				<div className="panel-header">
					警告信息
          <i className="point small point-warning"/>
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