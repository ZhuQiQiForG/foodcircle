<template>
    <div id="app">
        <router-view></router-view>
        <div class="tab">
            <div class="tab-item">
                <router-link to="/home">
                    <i class="icon-home"></i>
                    <span>主页</span>
                </router-link>
            </div>
            <div class="tab-item">
                <router-link to="/explore">
                    <i class="icon-compass2"></i>
                    <span>探索</span>
                </router-link>
            </div>
            <div class="tab-item">
                <router-link to="/user">
                    <i class="icon-user"></i>
                    <span>我</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
        display: flex
        position: fixed
        bottom: 0
        left: 0
        width: 100%
        height: 60px
        background: #dedede
        .tab-item
            display: inline-block
            flex: 1
            text-align: center
            i
                display: block
                margin-top: 8px
                font-size: 28px
            span
                font-size: 14px
</style>
