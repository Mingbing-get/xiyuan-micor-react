import React from 'react';
import './index.css';

import Select from 'antd/es/select';
import 'antd/es/select/style/css';
import Input from 'antd/es/input';
import 'antd/es/input/style/css';

const { Option } = Select;

class EdtDivider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style:{},
            text:'',
            index: 0, // 必须保留
            edtData: {}, // 必须保留
        }
    }

    // 固定写法，不需要修改 begin
    componentDidMount(){
      // 响应改变
      this.props.updFact.change = ({data, index}) => {
        this.propsChange(data);
        this.setState({
          index: index || 0,
          edtData: data
        });
      };
      // 初始化
      const {data, index} = this.props.updFact.getData();
      this.propsChange(data);
      this.setState({
        index: index || 0,
        edtData: data
      });
    };
    // 修改data让界面跟随反应
    updateData = (newdata)=>{
      this.props.updateData &&
      this.props.updateData(this.state.index, {
          ...this.state.edtData,
          ...newdata
      });
    };
    // 固定写法，不需要修改 end

    // 根据实际的需要修改，data为相应后的值
    propsChange(data){
      if (data && data.cpdata){
        this.setState({
            style: data.cpdata.style || {},
            text: data.cpdata.text || ''
        });
      }
    }

    // 以下方法根据业务需求执行增删修改
    //修改文本
    updateText = (e)=>{
        this.setState({
            text:e.target.value
        });
        this.updateData({cpdata:{...this.state.edtData.cpdata ,text:e.target.value}});
    };
    //修改样式
    updateStyle = (style)=>{
        this.updateData({cpdata:{...this.state.edtData.cpdata ,style}});
    };
    updateType = (e)=>{
        let style = {...this.state.style, type:e};
        this.setState({
            style
        });
        this.updateStyle(style);
    };
    updateOrientation = (e)=>{
        let style = {...this.state.style, orientation:e};
        this.setState({
            style
        });
        this.updateStyle(style);
    };
    updateWeight = (e)=>{
        let style = {...this.state.style, weight:e};
        this.setState({
            style
        });
        this.updateStyle(style);
    };

    render() {
        return (
            <div className='divider-edt-box'>
                <Input.Group compact>
                    <Select
                        value={this.state.style.type || 'solid'}
                        onChange={this.updateType}
                    >
                        <Option key='solid'>实线</Option>
                        <Option key='dashed'>虚线</Option>
                    </Select>
                    <Select
                        value={this.state.style.orientation || 'center'}
                        onChange={this.updateOrientation}
                    >
                        <Option key='center'>居中</Option>
                        <Option key='left'>左对齐</Option>
                        <Option key='right'>右对齐</Option>
                    </Select>
                    <Select
                        value={this.state.style.weight || 'normal'}
                        onChange={this.updateWeight}
                    >
                        <Option key='normal'>普通</Option>
                        <Option key='bold'>加粗</Option>
                    </Select>
                    <Input
                        placeholder='请输入文本'
                        value={this.state.text}
                        onChange={this.updateText}
                    />
                </Input.Group>
            </div>
        );
    }
}

export default EdtDivider;