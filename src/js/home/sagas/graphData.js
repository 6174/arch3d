import { takeLatest, takeEvery} from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { message } from 'antd';

import getGraphDataService from '../services/getGraphData';

function* getGraphData() {
  try {
    const graphData = yield call(getGraphDataService);
    if (graphData) {
      yield put({
        type: 'graphData/get/success',
        payload: graphData,
      });
    }
  } catch (err) {
    message.error(err);
    yield put({
     type: 'graphData/get/failed',
     err,
    });
  }
}

function* watchGraphDataGet() {
  yield takeEvery('graphData/get', getGraphData)
}

export default function* () {
  yield fork(watchGraphDataGet);
  yield put({
    type: 'graphData/get',
  });
}
