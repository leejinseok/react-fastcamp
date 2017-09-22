import React, { Component } from 'react';

class Counter extends Component {

    componentDidMount() {
        // 컴포넌트가 처음 마운트 될 때 현재 number 를 postId 로 사용하여 포스트 내용을 불러옵니다.
        const { number, PostActions } = this.props;
        PostActions.getPost(number);
    }


    componentWillReceiveProps(nextProps) {
        const { PostActions } = this.props;

        // 현재 number 와 새로 받을 number 가 다를 경우에 요청을 시도합니다.
        if(this.props.number !== nextProps.number) {
            PostActions.getPost(nextProps.number);
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;
        return(
            <div>
                {number}
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                {
                    error ? <h1> 에러발생 </h1> 
                    : (
                        <div>
                            <h1>{post.title}</h1>
                            <h1>{post.body}</h1>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Counter;