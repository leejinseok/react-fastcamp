import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import * as counterActions from '../modules';
import Counter from '../components/Counter';

export default connect(
    (state) => ({
        number: state.get('number')
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(Counter);