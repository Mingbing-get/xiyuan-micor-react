module.exports = {
  webpack: (config) => {
    config.output.library = 'EtCyfgVeFpmypBes'; //将此处修改为后台获取到的随即key
    config.output.libraryTarget = 'umd';
    config.output.publicPath = '/public/micor/EtCyfgVeFpmypBes/edt'; //将此处修改为后台获取到的随即key
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      return config;
    };
  },
};
