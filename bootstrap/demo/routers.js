/*
 * 当某个路由组件过大的时候，建议使用分包的方式，具体操作如下
1.天才第一步，创建一个一步组件
let routersDefault = resolve =>{
	require.ensure([],function(){
		resolve(require('./routers/default/main.vue'))
	},'routersDefault(这个是之后打包出来的名称)')
}
2.调用异步组件和直接引用组件没有差别
component:routersDefault
 * */

module.exports = [
	{
		path:"/",
		redirect: '/index'
	},
	{
		path: '/index',
		//component: require('./index.vue'),
	}
]