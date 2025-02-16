/* eslint-disable */
// @ts-nocheck

/**
 * 这是特定模板
 *
 * 不让 vite-plugin-autogeneration-import-file 生成 GlobalComponents。
 *
 * 生成效果冗余，不好用。
 */

/* prettier-ignore */
// declare module "vue" {
// 	export interface GlobalComponents {
// 		//code
// 	}
// }

/* prettier-ignore */
declare global {
	type GoodsHotInstance = InstanceType<typeof import("../src/components/GoodsHot.vue")["default"]>;
  type GoodsImageInstance = InstanceType<typeof import("../src/components/GoodsImage.vue")["default"]>;
  type GoodsItemInstance = InstanceType<typeof import("../src/components/GoodsItem.vue")["default"]>;
  type GoodsSkuInstance = InstanceType<typeof import("../src/components/GoodsSku.vue")["default"]>;
  type LayoutCartInstance = InstanceType<typeof import("../src/components/layout/cart.vue")["default"]>;
  type LayoutFixedInstance = InstanceType<typeof import("../src/components/layout/fixed.vue")["default"]>;
  type LayoutFooterInstance = InstanceType<typeof import("../src/components/layout/footer.vue")["default"]>;
  type LayoutHeaderInstance = InstanceType<typeof import("../src/components/layout/header.vue")["default"]>;
  type LayoutNavInstance = InstanceType<typeof import("../src/components/layout/nav.vue")["default"]>;
  //typeCode
}

/* prettier-ignore */
export {};
