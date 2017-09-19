<template>
	<div class="home">
		<div class="header">美食圈</div>
		<div class="home-content">
			<div class="homeTab">
				<div class="homeTab-item">全部</div>
				<div class="homeTab-item">热门</div>
			</div>
			<div class="content">
				<div class="pic-wrapper">
					<v-picture></v-picture>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmacript-6">
	import picture from 'components/picture/picture';

	export default {
		components: {
			'v-picture': picture
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.home
		position: absolute
		bottom: 60px
		top: 0
		width: 100%
		overflow: hidden
		.header
			height: 56px
			width: 100%
			text-align: center
			line-height: 56px
			background: pink
		.home-content
			position: absolute
			top: 56px
			bottom: 0
			overflow: hidden
			width: 100%
			.homeTab
				display: flex
				width: 100%
				height: 40px
				line-height: 40px
				.homeTab-item
					flex: 1
					display: inline-block
					text-align: center
			.content
				position: absolute
				top: 40px
				bottom: 0
				width: 100%
				background: gray
				.pic-wrapper
					margin: 10px auto
					width: 310px
</style>