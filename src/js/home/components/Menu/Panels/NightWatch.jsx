import React from 'react';
import {Table} from 'antd';

const dataSource = [{
  title: '企业现金',
  klass: '企业现金',
  target: '交易成功率',
  instance: '第三方账户管理'
}, {
  title: '企业现金',
  klass: '企业现金',
  target: '交易量',
  instance: '第三方账户管理'
}, {
  title: '企业现金',
  klass: '企业现金',
  target: '响应时间',
  instance: '第三方账户管理'
}]

const columns = [{
  title: 'c1名称',
  dataIndex: 'title',
  key: 'title',
}, {
  title: '指标类别',
  dataIndex: 'klass',
  key: 'klass',
}, {
  title: '指标',
  dataIndex: 'target',
  key: 'target',
}, {
  title: '实例',
  dataIndex: 'instance',
  key: 'instance',
}];

const Panel = React.createClass({
	render() {
		return  (
			<div className="panel-config-info">
				<div className="panel-header">
					警告信息
          <i className="point small point-success"/>
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