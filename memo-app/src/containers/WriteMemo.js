import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import { InputPlaceholder, WhiteBox } from 'components/WriteMemo';
import { InputSet, SaveButton } from 'components/Shared';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from 'modules/ui';

class WriteMemo extends Component {
    handleFocus = () => {
        const { focused, UIActions } = this.props;

        // 포커스 된 상태가 아닐 때만 실행합니다.
        if(!focused) {
            UIActions.focusInput();
        }
    }

    handleClickOutside() {
        const { UIActions, focused } = this.props;

        if(focused) { // 포커스가 되어 있지 않을때만 실행한다
            UIActions.blurInput();
        }
    }


    render() {
        const { handleFocus } = this;
        const { focused, title, body } = this.props;

        return (
            focused ? /* 포커스 된 상태 */ ( 
                <WhiteBox>
                    <InputSet/>
                    <SaveButton/>
                </WhiteBox>
            ) : /* 포커스 풀린 상태 */  ( 
                <WhiteBox onClick={handleFocus}>
                    <InputPlaceholder/>
                </WhiteBox>
            )
        );
    }
}

export default connect(
    (state) => ({
        focused: state.ui.getIn(['write', 'focused']),
        title: state.ui.getIn(['write', 'title']),
        body: state.ui.getIn(['write', 'body'])
    }),
    (dispatch) => ({
        UIActions: bindActionCreators(uiActions, dispatch)
    })
)(enhanceWithClickOutside(WriteMemo));