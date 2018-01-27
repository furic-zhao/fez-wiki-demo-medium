/* ==================================
 * @ 2017 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {
  useInject: {
    bower: {
      js: [{
        target: "a-vendor-jquery-bootstrap.js",
        contain: ["**/jquery.js", "**/bootstrap.js"]
      }, {
        target: "vendor-dataTables.js",
        contain: ["**/jquery.dataTables.js", "**/dataTables.bootstrap.js", "**/dataTables.responsive.js", "**/responsive.bootstrap.js", "**/dataTables.fixedColumns.js", "**/dataTables.fixedHeader.js"]
      }, {
        target: "vendor-moment-echarts.js",
        contain: ["moment/**/moment.js", "moment/**/zh-cn.js", "**/echarts.js"]
      }],
      css: [{
        target: "vendor-bootstrap-font-dataTables-bt.css",
        contain: ["**/bootstrap.css", "**/font-awesome.css", "**/dataTables.bootstrap.css", "**/responsive.bootstrap.css", "**/fixedColumns.bootstrap.css", "**/fixedHeader.bootstrap.css"]
      }]
    }
  }
}
