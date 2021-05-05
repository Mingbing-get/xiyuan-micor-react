import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/statistic/edt';

function UpdProps({ data, index }) {
  this.index = index || this.index;
  this.data = data;
}
UpdProps.prototype.setData = function ({ data, index }) {
  this.index = index || this.index;
  this.data = data;
  this.change && this.change({ data: this.data, index: this.index });
};
UpdProps.prototype.getData = function () {
  return { data: this.data, index: this.index };
};

let updFact = new UpdProps({});

function render(props) {
  const { container } = props;
  updFact.setData({ data: props.data, index: props.index });
  ReactDOM.render(
    <App updFact={updFact} updateData={props.updateData} />,
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

export async function update(props) {
  updFact.setData({ data: props.data, index: props.index });
}
