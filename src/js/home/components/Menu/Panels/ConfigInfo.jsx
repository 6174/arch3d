import React from 'react';
import {Table} from 'antd';


const dataSource = [{
  status: '生产',
  institution: '公司及机构系统',
  name: '企业现金',
  part: '开放系统应用支持'
}];


const columns = [{
  title: '状态',
  dataIndex: 'status',
  key: 'status',
}, {
  title: '所属单位',
  dataIndex: 'institution',
  key: 'institution',
}, {
  title: '系统名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '部门名称',
  dataIndex: 'part',
  key: 'part'
}];

const ConfigInfo = React.createClass({
	render() {
		return  (
			<div className="panel-config-info">
				<div className="panel-header">
					配置信息
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

export default ConfigInfo;