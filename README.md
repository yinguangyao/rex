## rex
基于redux和mobx思想的状态管理库 —— rex
## 设计思想
在使用了mobx之后，我深深爱上了mobx那种面向对象创建store的思想，对redux的view -> dispatch -> action -> reducer -> store -> view深恶痛绝，就开始思考如果用class来创建store，使用action来包裹action函数，底层隐式调用dispatch使用action会怎么样？    
于是，rex就诞生了。    
![http://static.zybuluo.com/gyyin/1e8y23mco147djdcyt306618/image_1d8ncob8d1hki1gtmma21ol21hh99.png][1]
## state、action
装饰器state用来包裹需要监听的状态，而action则是包裹改变state的函数，在外部调用action包裹方法的时候，内部会自动调用dispatch函数，以确保通知view层状态发生了变化。    
如果不用state包裹的属性，那么就会当做一个私有属性来处理，不会出现在store中。
## BaseStore
BaseStore是一个基础类，在BaseStore中封装了很多私有函数，用于处理一些底层的逻辑。创建store的时候一定要继承这个基础的BaseStore类。
## 使用方法
```javascript
// 如何创建一个store
import {
    action,
    state,
    BaseStore
} from 'rex';
class Counter extends BaseStore {
    @state count = 0;
    @action
    increase() {
        this.count += 1;
    }
    @action
    decrease() {
        this.count -= 1;
    }
}
const counter = Counter.createStore();
export default counter;

// 如何结合react-redux使用
ReactDOM.render(
  <Provider store={counter}>
    <App />
  </Provider>,
  document.getElementById('app')
)

export default connect(state => ({ 
    count: state.count,
    increase: state.increase,
    decrease: state.decrease
}))(props => 
  <div>
    <button onClick={() => props.increase()}>+</button>
    {props.count}
    <button onClick={() => props.decrease()}>-</button>
  </div>
)
```
## 未完
等有时间了就继续把代码实现给补上。

[1]: http://static.zybuluo.com/gyyin/1e8y23mco147djdcyt306618/image_1d8ncob8d1hki1gtmma21ol21hh99.png
