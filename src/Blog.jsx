import React from 'react';
import Article from './Article';
import * as BarFoo from './components/FooBar';
import Hoge from './components/Hoge';

const Blog = ()=>{

    

    // componentDidMount(){
    //     document.getElementById('counter').addEventListener('click',this.countUp)
    // }

    // componentDidUpdate(){
    //     if(this.state.count >=10){
    //         this.setState({
    //             count: 0
    //         })
    //     }
    // }

    // componentWillUnmount(){
    //     document.getElementById('counter').removeEventListener('click',this.countUp)
    // }

// 公開状態を反転させる関数
// 現在のカウントにプラス１する関数
    // countUp =() =>{
    //     this.setState({
    //         count:this.state.count + 1
    //     })
    // }
        return(
            
            <div>
                <Article 
                title={"React test"}
                // count={this.state.count}
                />
                <BarFoo.Foo/>
                <BarFoo.Bar/>
                <Hoge/>
            </div>
        
        )
        }

export default Blog;