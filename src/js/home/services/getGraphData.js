/**
 * [data description]
 * @type {Object}
 */
// _d.export = function() {
//     let ret = JSON.parse(_d.model.toJSON());
//     let nodeBoundsMap = {};
//     _d.model.nodeDataArray.map(n => {
//       const node =  _d.findNodeForKey(n.key)
//       const bounds = node.actualBounds;
//       const location = node.location;
//       bounds.x = location.x;
//       bounds.y = location.y;
//       nodeBoundsMap[n.key] = bounds;
//     });
//     ret.nodeDataArray.forEach(node => {
//       const key = node.key;
//       node.bounds = nodeBoundsMap[key];
//     });
//     return ret;
//   }




function createGrahData(gridSize) {
    const {
        random,
        max,
        min,
        floor
    } = Math;

    const size = max(3, floor(random() * gridSize));
    let ret = [];
    for (let i = 0; i < size; i++) {
        ret.push(preprocess(mock(random(), floor(random() * gridSize))))
    }
    return ret;
}

function mock(id, pos) {
    return {
        "id": id,
        "pos": pos,
        "class": "go.GraphLinksModel",
        "nodeDataArray": [{
            "key": "splitTop",
            "isGroup": true,
            "category": "group_split",
            "layerName": "node",
            "loc": "655.1773376537119 10",
            "bounds": {
                "x": 655.1773376537119,
                "y": 10,
                "width": 163.5228474983079,
                "height": 163.67851156080795,
                "Ea": true
            }
        }, {
            "key": "splitCenter",
            "isGroup": true,
            "category": "group_split",
            "layerName": "node",
            "loc": "10.000000000000009 203.678511560808",
            "bounds": {
                "x": 10.000000000000009,
                "y": 203.678511560808,
                "width": 1453.8775228057316,
                "height": 629.5533040557317,
                "Ea": true
            }
        }, {
            "key": "splitBottom",
            "isGroup": true,
            "category": "group_split_service",
            "layerName": "node",
            "loc": "726.9387614028659 863.2318156165397",
            "bounds": {
                "x": 726.9387614028658,
                "y": 863.2318156165395,
                "width": 20,
                "height": 20,
                "Ea": true
            }
        }, {
            "key": "dataCenterTop",
            "isGroup": true,
            "category": "group_split",
            "layerName": "node",
            "group": "数据中心内部",
            "loc": "33.76142374915409 248.4348571849619",
            "bounds": {
                "x": 33.76142374915409,
                "y": 248.4348571849619,
                "width": 1406.3546753074236,
                "height": 415.8747924949236,
                "Ea": true
            }
        }, {
            "key": "dataCenterBottom",
            "isGroup": true,
            "category": "group_split_service",
            "layerName": "node",
            "group": "数据中心内部",
            "loc": "562.9387614028658 694.3096496798858",
            "bounds": {
                "x": 562.9387614028658,
                "y": 694.3096496798858,
                "width": 348,
                "height": 115.16074218749998,
                "Ea": true
            }
        }, {
            "key": "互联网接入区-NAT",
            "group": "互联网接入区",
            "name": "NAT",
            "nodeIcon": "img/blueprint/logic/nat.png",
            "category": "Node_App_Template",
            "layerName": "node",
            "loc": "668.9387614028659 44.75634562415396",
            "bounds": {
                "x": 668.938761402866,
                "y": 44.756345624153965,
                "width": 56,
                "height": 95.1607421875,
                "Ea": true
            }
        }, {
            "key": "数据中心内部",
            "group": "splitCenter",
            "text": "数据中心内部",
            "isGroup": true,
            "category": "access_area_2",
            "layerName": "area",
            "loc": "23.76142374915409 238.4348571849619",
            "bounds": {
                "x": 23.76142374915409,
                "y": 238.4348571849619,
                "width": 1433.8775228057316,
                "height": 609.5533040557317,
                "Ea": true
            }
        }, {
            "key": "互联网接入区",
            "group": "splitTop",
            "text": "互联网接入区",
            "isGroup": true,
            "category": "access_area",
            "layerName": "area",
            "loc": "668.9387614028659 44.75634562415396",
            "bounds": {
                "x": 668.9387614028659,
                "y": 44.75634562415396,
                "width": 143.52284749830793,
                "height": 143.67851156080795,
                "Ea": true
            }
        }, {
            "key": "烟台中金数据中心",
            "text": "烟台中金数据中心",
            "group": "dataCenterTop",
            "isGroup": true,
            "category": "group_region",
            "layerName": "area",
            "loc": "52.52284749830809 288.1912028091159",
            "bounds": {
                "x": 52.52284749830809,
                "y": 288.1912028091159,
                "width": 508.2477417136738,
                "height": 250.71405030742378,
                "Ea": true
            }
        }, {
            "key": "烟台黄务数据中心",
            "text": "烟台黄务数据中心",
            "group": "dataCenterTop",
            "isGroup": true,
            "category": "group_region",
            "layerName": "area",
            "loc": "610.5228474983081 288.1912028091159",
            "bounds": {
                "x": 610.5228474983081,
                "y": 288.1912028091159,
                "width": 828.3546753074236,
                "height": 395.87479249492367,
                "Ea": true
            }
        }, {
            "key": "烟台中金数据中心|内网",
            "group": "烟台中金数据中心",
            "text": "内网",
            "isGroup": true,
            "category": "group_subnet",
            "layerName": "area",
            "loc": "66.28427124746209 322.94754843326984",
            "bounds": {
                "x": 66.28427124746209,
                "y": 322.94754843326984,
                "width": 470.72489421536585,
                "height": 192.19628093411583,
                "Ea": true
            }
        }, {
            "key": "烟台黄务数据中心|内网",
            "group": "烟台黄务数据中心",
            "text": "内网",
            "isGroup": true,
            "category": "group_subnet",
            "layerName": "area",
            "loc": "624.284271247462 322.9475484332699",
            "bounds": {
                "x": 624.284271247462,
                "y": 322.9475484332699,
                "width": 790.8318278091158,
                "height": 337.3570231216158,
                "Ea": true
            }
        }, {
            "key": "烟台中金数据中心|内网|业务2网_等保2区",
            "group": "烟台中金数据中心|内网",
            "text": "业务2网_等保2区",
            "isGroup": true,
            "category": "group_subnet_secure_area",
            "layerName": "area",
            "loc": "80.04569499661608 357.7038940574238",
            "bounds": {
                "x": 80.04569499661608,
                "y": 357.7038940574238,
                "width": 443.2020467170579,
                "height": 143.6785115608079,
                "Ea": true
            }
        }, {
            "key": "烟台黄务数据中心|内网|业务2网_等保2区",
            "group": "烟台黄务数据中心|内网",
            "text": "业务2网_等保2区",
            "isGroup": true,
            "category": "group_subnet_secure_area",
            "layerName": "area",
            "loc": "638.0456949966159 357.7038940574239",
            "bounds": {
                "x": 638.0456949966159,
                "y": 357.7038940574239,
                "width": 763.308980310808,
                "height": 288.8392537483079,
                "Ea": true
            }
        }, {
            "key": "b218b68b-07b4-4dae-bba3-871bfde6a849",
            "group": "烟台中金数据中心|内网|业务2网_等保2区",
            "name": "23中金",
            "nodeIcon": "img/blueprint/logic/servergroup.png",
            "category": "Node_DP_UNIT_Template",
            "layerName": "node",
            "loc": "80.04569499661608 357.7038940574238",
            "bounds": {
                "x": 80.04569499661608,
                "y": 357.7038940574238,
                "width": 67.572265625,
                "height": 95.1607421875,
                "Ea": true
            }
        }, {
            "key": "a2665e60-1149-4437-a943-c3f8479aaea2",
            "group": "烟台黄务数据中心|内网|业务2网_等保2区",
            "name": "23黄务",
            "nodeIcon": "img/blueprint/logic/servergroup.png",
            "category": "Node_DP_UNIT_Template",
            "layerName": "node",
            "loc": "972.1526285903659 502.8646362449239",
            "bounds": {
                "x": 972.1526285903658,
                "y": 502.8646362449239,
                "width": 67.572265625,
                "height": 95.1607421875,
                "Ea": true
            }
        }, {
            "key": "d04d4e75-99b1-4352-8c2e-93671abc2758",
            "group": "烟台黄务数据中心|内网|业务2网_等保2区",
            "name": "comstar资金管理系统应用节点主黄务",
            "nodeIcon": "img/blueprint/logic/servergroup.png",
            "category": "Node_DP_UNIT_Template",
            "layerName": "node",
            "loc": "638.0456949966159 502.8646362449239",
            "bounds": {
                "x": 638.0456949966159,
                "y": 502.8646362449239,
                "width": 255.7861328125,
                "height": 95.1607421875,
                "Ea": true
            }
        }, {
            "key": "d07a1cdb-26dc-4cd2-a461-7914658a781a",
            "group": "烟台中金数据中心|内网|业务2网_等保2区",
            "name": "comstar资金管理系统应用节点同城备中金",
            "nodeIcon": "img/blueprint/logic/servergroup.png",
            "category": "Node_DP_UNIT_Template",
            "layerName": "node",
            "loc": "211.93876140286605 357.7038940574238",
            "bounds": {
                "x": 211.93876140286602,
                "y": 357.7038940574238,
                "width": 283.7861328125,
                "height": 95.1607421875,
                "Ea": true
            }
        }, {
            "key": "5b1321d5-5d0d-423d-a996-10c1aca1a0c1",
            "group": "烟台黄务数据中心|内网|业务2网_等保2区",
            "name": "comstar资金管理系统应用节点备黄务",
            "nodeIcon": "img/blueprint/logic/servergroup.png",
            "category": "Node_DP_UNIT_Template",
            "layerName": "node",
            "loc": "1118.045694996616 502.8646362449239",
            "bounds": {
                "x": 1118.045694996616,
                "y": 502.8646362449239,
                "width": 255.7861328125,
                "height": 95.1607421875,
                "Ea": true
            }
        }, {
            "key": "91885bcc-2bd7-4b4a-86f5-104aa3f51c82",
            "group": "dataCenterBottom",
            "name": "comstar资金管理系统数据库",
            "nodeIcon": "img/blueprint/logic/dbservice.png",
            "category": "Node_App_Template",
            "layerName": "node",
            "loc": "562.9387614028658 694.3096496798858",
            "bounds": {
                "x": 562.9387614028658,
                "y": 694.3096496798858,
                "width": 199.7861328125,
                "height": 95.1607421875,
                "Ea": true
            }
        }, {
            "key": "4ec0e404-c66a-4f9f-9ee2-2e1128dd365f",
            "group": "dataCenterBottom",
            "name": "啊啊啊啊",
            "nodeIcon": "img/blueprint/logic/sharestorge.png",
            "category": "Node_App_Template",
            "layerName": "node",
            "loc": "810.9387614028658 694.3096496798858",
            "bounds": {
                "x": 810.938761402866,
                "y": 694.3096496798858,
                "width": 80,
                "height": 95.1607421875,
                "Ea": true
            }
        }, {
            "key": "ca6d7b1c-a956-44e6-b617-837ac111f6c7",
            "group": "互联网接入区",
            "name": "xy",
            "nodeIcon": "img/blueprint/logic/externalservice.png",
            "category": "Node_App_Template",
            "layerName": "node",
            "loc": "728.9387614028659 44.75634562415396",
            "bounds": {
                "x": 728.9387614028659,
                "y": 44.756345624153965,
                "width": 56,
                "height": 95.1607421875,
                "Ea": true
            }
        }, {
            "key": "d04d4e75-99b1-4352-8c2e-93671abc2758-north-lb",
            "group": "烟台黄务数据中心|内网|业务2网_等保2区",
            "nodeIcon": "img/blueprint/logic/loadbalance.png",
            "category": "service_template",
            "layerName": "node",
            "loc": "737.9387614028659 357.7038940574239",
            "bounds": {
                "x": 737.938761402866,
                "y": 357.7038940574239,
                "width": 56,
                "height": 95.1607421875,
                "Ea": true
            }
        }],
        "linkDataArray": [{
            "from": "d04d4e75-99b1-4352-8c2e-93671abc2758-north-lb",
            "to": "d04d4e75-99b1-4352-8c2e-93671abc2758",
            "text": "LB访问部署单元",
            "layerName": "link",
            "points": [765.9387614028659, 452.8646362449239, 765.9387614028659, 462.8646362449239, 765.9387614028659, 492.86463624492393, 765.9387614028659, 502.86463624492393]
        }, {
            "from": "5b1321d5-5d0d-423d-a996-10c1aca1a0c1",
            "to": "91885bcc-2bd7-4b4a-86f5-104aa3f51c82",
            "text": "部署单元访问数据库服务",
            "category": "dpUnitCallTemplate",
            "layerName": "link",
            "points": [1137.5673773048804, 586.025378432424, 686.8318278091158, 734.0103677327749]
        }, {
            "from": "d04d4e75-99b1-4352-8c2e-93671abc2758",
            "to": "4ec0e404-c66a-4f9f-9ee2-2e1128dd365f",
            "text": "部署单元访问共享存储服务",
            "category": "dpUnitCallTemplate",
            "layerName": "link",
            "points": [781.7361514142603, 586.0253784324238, 831.5894376649185, 698.3096496798858]
        }, {
            "from": "d07a1cdb-26dc-4cd2-a461-7914658a781a",
            "to": "4ec0e404-c66a-4f9f-9ee2-2e1128dd365f",
            "text": "部署单元访问共享存储服务",
            "category": "dpUnitCallTemplate",
            "layerName": "link",
            "points": [406.3777182910952, 440.8646362449238, 826.9387614028658, 725.6389134383655]
        }, {
            "from": "a2665e60-1149-4437-a943-c3f8479aaea2",
            "to": "ca6d7b1c-a956-44e6-b617-837ac111f6c7",
            "text": "部署单元访问外部服务",
            "category": "dpUnitCallTemplate",
            "layerName": "link",
            "points": [982.2511036491956, 506.8646362449239, 759.3410047592675, 96.75634562415397]
        }, {
            "from": "5b1321d5-5d0d-423d-a996-10c1aca1a0c1",
            "to": "4ec0e404-c66a-4f9f-9ee2-2e1128dd365f",
            "text": "部署单元访问共享存储服务",
            "category": "dpUnitCallTemplate",
            "layerName": "link",
            "points": [1172.5273607616798, 586.025378432424, 874.9387614028658, 730.2579186915116]
        }, {
            "from": "d04d4e75-99b1-4352-8c2e-93671abc2758",
            "to": "91885bcc-2bd7-4b4a-86f5-104aa3f51c82",
            "text": "部署单元访问数据库服务",
            "category": "dpUnitCallTemplate",
            "layerName": "link",
            "points": [746.7761679574609, 586.0253784324238, 686.3029976647923, 698.3096496798858]
        }, {
            "from": "d07a1cdb-26dc-4cd2-a461-7914658a781a",
            "to": "91885bcc-2bd7-4b4a-86f5-104aa3f51c82",
            "text": "部署单元访问数据库服务",
            "category": "dpUnitCallTemplate",
            "layerName": "link",
            "points": [386.494176816303, 440.8646362449238, 638.8318278091158, 715.7458844146096]
        }, {
            "from": "b218b68b-07b4-4dae-bba3-871bfde6a849",
            "to": "ca6d7b1c-a956-44e6-b617-837ac111f6c7",
            "text": "部署单元访问外部服务",
            "category": "dpUnitCallTemplate",
            "layerName": "link",
            "points": [137.83182780911608, 393.605427977972, 747.8564279327675, 96.75634562415397]
        }]
    }
}


function preprocess(d) {
    const translate = [0, 0];
    const scaleFactor = 2;
    let data = d;
    data.nodeDataArray.forEach(function(node) {
        node.bounds = transformBounds(node.bounds);
    });
    data.linkDataArray.forEach(function(link) {
        const linkPoints = link.points;
        let points = [];
        for (let i = 0, l = link.points.length; i < l; i += 2) {
            points.push([linkPoints[i], linkPoints[i + 1]]);
        }
        points = points.map((point) => {
            return transform(point);
        });
        link.points = points;
    });

    function transformBounds(b) {
        let bound = Object.assign({}, b);
        let point = transform([bound.x, bound.y]);
        bound.x = point[0];
        bound.y = point[1];
        bound.width /= scaleFactor;
        bound.height /= scaleFactor;
        return bound;
    }

    function transform(point) {
        let npoint = [point[0], point[1]];
        npoint[0] /= scaleFactor;
        npoint[1] /= scaleFactor;
        return npoint;
    }
    return data;
}

function createNodeHash(data) {
    let hash = {};
    data.graphs.forEach(graph => {
        graph.nodeDataArray.forEach(node => {
            if (node.layerName === 'node') {
                hash[node.key] = node;
            }
        })
    }); 
    return hash;
}

function createConnect(data) {
    const graphs = data.graphs;
    let layerConnects = [];
    for (let i = 0; i < graphs.length - 1; i++) {
        layerConnects = layerConnects.concat(createConnectBetweenTwoLayer(graphs[i], graphs[i + 1]));
    }

    return layerConnects;
    function createConnectBetweenTwoLayer(layer1, layer2) {
        let ret = [];
        const layer1Nodes = layer1.nodeDataArray.filter(filter);
        const layer2Nodes = layer2.nodeDataArray.filter(filter);

        for (let i = 0; i < layer1Nodes.length; i ++) {
            if (randomChoose(20)) {
                for (let j = 0; j < layer2Nodes.length; j++) {
                    if (randomChoose(120)) {
                        ret.push({
                            from: layer1Nodes[i],
                            to: layer2Nodes[j]
                        });
                    }
                }
            }
        }
        return ret;

        function filter(node) {
            return node.layerName === 'node' && !node.isGroup;
        }

        function randomChoose(p) {
            let r = Math.random() * 100;
            return p > r;
        }
    }
}

function getGraphData() {
    let data = {};
    data.graphs = createGrahData(8);
    data.nodeHash = createNodeHash(data);
    data.layerConnects = createConnect(data);
    data.meta = {
        gridSize: [3, 3]
    }
    return new Promise(function(resolve) {
        return resolve(data);
    });
}

export default getGraphData;