const config = {
  header: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  },
  api:{
    base:'http://139.224.35.125/website/',
    queryProductPage: 'op/op_queryProductPage',
    viewProductDetail: 'op/op_viewProductDetail',
    queryCasePage:'op/op_queryCasePage',
    viewCaseDetail :'op/op_viewCaseDetail',
    queryDynamicsPage :'op/op_queryDynamicsPage',
    viewDynamicDetail :'op/op_viewDynamicDetail',
    contactUs:'op/op_contactUs'
  }
}

export default config;
