import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/statistic/show';

function UpdProps(data) {
  this.data = data;
}
UpdProps.prototype.setData = function (data) {
  this.data = data;
  this.change && this.change(this.data);
};
UpdProps.prototype.getData = function () {
  return this.data;
};

let updFact = new UpdProps();

function render(props) {
  const { container } = props;
  updFact.setData(props.data);
  ReactDOM.render(
    <App updFact={updFact} />,
    container
      ? container.querySelector('#micor')
      : document.querySelector('#micor')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {}

export async function mount(props) {
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#micor')
      : document.querySelector('#micor')
  );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  updFact.setData(props.data);
}
