import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import Counter from '../components/Counter';

import * as counterActions from '../modules/counter';
import * as postActions from '../modules/post';

export default connect(
    (state) => {
        return {
            number: state.counter.get('number'),
            post: state.post.data,
            loading: state.post.pending,
            error: state.post.error
        }
    },
    (dispatch) => {
        return {
            CounterActions: bindActionCreators(counterActions, dispatch),
            PostActions: bindActionCreators(postActions, dispatch)
        }
    }
)(Counter);