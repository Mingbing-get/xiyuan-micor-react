import React from 'react';
import './index.css';

import Divider from 'antd/es/divider';
import 'antd/es/divider/style/css';

class ShowDivider extends React.Component {
  // 固定写法，不需要修改 begin
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.props.updFact.change = (data) => {
      if (this.state.data === data) return;
      this.setState({
        data,
      });
    };
    this.setState({
      data: this.props.updFact.getData(),
    });
  }
  // 固定写法，不需要修改 end

  render() {
    // 根据实际业务需求渲染
    let plain = true;
    let dashed = false;
    let orientation = 'center';
    const {data} = this.state;
    if (data && data.cpdata && data.cpdata.style){
      plain = data.cpdata.style.weight==='normal';
      dashed = data.cpdata.style.type==='dashed';
      orientation = data.cpdata.style.orientation;
    }
    return (
      <Divider
        plain={plain}
        dashed={dashed}
        orientation={orientation}
      >
        {data && data.cpdata && data.cpdata.text}
      </Divider>
    );
  }
}

export default ShowDivider;