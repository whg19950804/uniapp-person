<template>
	<view class="nav-tab">
		<scroll-view scroll-x="true" class="nav-scroll" show-scrollbar='false'>
			<view class="nav-scroll-box">
				<view v-for="(item, index) in navList" :key="index" class="nav-scroll-box-item"
					:class="activeIndex==index?'active':''"
					@click="clickTab(item,index)"
				>{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="nav-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "navlist",
		data() {
			return {
				navList: [],
				activeIndex: 0
			};
		},
		created() {
			this.getLabel()
		},
		methods: {
			getLabel() {
				this.$api.get_list('get_tab_lable').then((res) => {
					this.navList = res.data
				})
			},
			clickTab(item, index) {
				this.activeIndex = index
				this.$emit('changeTab', {
					data: item,
					index
				})
			}
		}
	}
</script>

<style lang="scss">
	.nav-tab {
		width: 100%;
		border-bottom: 1px solid #333;
		background-color: #fff;
		box-sizing: border-box;
		display: flex;

		.nav-scroll-box {
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			height: 40px;

			.nav-scroll-box-item {
				padding: 0 10px;
				flex: 0 0 auto;
				color: #333;
				font-size: 14px;
				// flex-shrink: 0;
				&.active{
					color: $mk-base-color;
				}
			}
		}

		.nav-icons {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 45px;
			position: relative;

			&::after {
				position: absolute;
				content: '';
				width: 1px;
				top: 12px;
				bottom: 12px;
				left: 0;
				background-color: #ddd;
			}
		}
	}
</style>
