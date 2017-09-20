/**
 * todo reducer
 */
import {handleActions} from 'redux-actions';
import M from 'immutable';
import uuid from 'uuid';

const initialGraphData = M.Map();
const graphData = handleActions({
	['graphData/get/success'](state, action) {
		const payload = action.payload;
		return payload; 
	}
}, initialGraphData);
 

export default graphData;

