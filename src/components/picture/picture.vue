<template>
	<div class="picture">
		<div class="title-wrapper">
			<div class="head">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505646472343&di=eb3c45d85bb7ee79e2a6a9ba6e0db9aa&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D980195554%2C1006930630%26fm%3D214%26gp%3D0.jpg" width="45" height="45">
			</div>
			<div class="location">
				<h1 class="userName">Alice</h1>
				<i class="icon-location"></i>
				<span class="locationPlace">China</span>
			</div>
			<div class="time">45minutes ago</div>
		</div>
		<div class="photo-wrapper">
			<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505647789307&di=cb0390de38179eb35aa70263939e4f03&imgtype=0&src=http%3A%2F%2Ffile27.mafengwo.net%2FM00%2F70%2F1A%2FwKgB6lPaT_uAZnVRABECotmnmZM18.jpeg" width="100%" height="214">
		</div>
		<div class="desc-wrapper">
			<h1 class="title">城西的韩国料理</h1>
			<p class="desc">朋友特别想吃烤肉 想着他家的现烤烤肉味道还不错 就来吃了
结果没有预约点不了😂 有点伤心 本来想去别的地方再吃烤肉的 朋友懒得走就继续点了</p>
		</div>
	</div>
</template>

<script type="text/ecmacript-6">
	export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.picture
		width: 310px
		border: 1px solid green
		border-radius: 5px
		overflow: hidden
		.title-wrapper
			position: relative
			padding: 15px
			width: 100%
			height: 74px
			background: #fff
			box-sizing: border-box
			.head
				display: inline-block
				width: 45px
				height: 45px
				border-radius: 50%
				overflow: hidden
				vertical-align: top
			.location
				display: inline-block
				margin-left: 10px
				vertical-align: top
				font-size: 0
				.userName
					margin-top: 10px
					margin-bottom: 5px
					font-size: 12px
					font-weight: 700
					color: #333
				.icon-location
					font-size: 10px
					color: #dedede
				.locationPlace
					font-size: 10px
					color: #dedede
			.time
				position: absolute
				right: 15px
				top: 25px
				font-size: 10px
				color: #dedede
		.photo-wrapper
			width: 100%
			height: 214px
		.desc-wrapper
			width: 100%
			background: #fff
			padding: 15px
			box-sizing: border-box
			.title
				margin-bottom: 15px
				font-size: 12px
				font-weight: 700
				color: #333
			.desc
				font-size: 10px
				color: #dedede
</style>