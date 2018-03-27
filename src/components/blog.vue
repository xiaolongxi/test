<template>
	<div class="container">
		<vHeader></vHeader>
		<div>{{msg}}</div>
	</div>
</template>
<script>
import vHeader from './header.vue'
export default {
	components:{
		vHeader,
	},
	data () {
		return {
			msg:"hello,world"
		}
	}
}
</script>
<style lang='stylus'>
	* 
	  padding: 0
	  margin: 0
</style>