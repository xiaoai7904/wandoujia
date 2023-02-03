import { defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Tabbar, TabbarItem } from "vant";
import { useI18n } from "vue-i18n";
import { RouterNameEnum } from "@/common";
import { BaseRouterView } from "../BaseRouterView";
// import homeIcon from "@/assets/image/sy1.png";
// import positionIcon from "@/assets/image/ls1.png";
// import purchaseIcon from "@/assets/image/pd1.png";
// import customerServerIcon from "@/assets/image/kf1.png";
// import myIcon from "@/assets/image/wd1.png";
import "./LayoutView.style.less";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const activeIndex = [
      RouterNameEnum.HOME,
      RouterNameEnum.INVEST,
      RouterNameEnum.MY,
      RouterNameEnum.ABOUT,
      RouterNameEnum.SERVICE,
    ];
    const activeTab = ref(activeIndex.indexOf(route.name as RouterNameEnum));

    watch(
      () => route?.path,
      (newValue) => {
        activeTab.value = activeIndex.indexOf(route.name as RouterNameEnum);
      }
    );
    return () => (
      <div>
        <BaseRouterView />
        <Tabbar v-model={activeTab.value}>
          <TabbarItem to="/" icon="wap-home-o">
            <span>{t("common.home" /**首页 */)}</span>
          </TabbarItem>
          <TabbarItem to="/invest" icon="chart-trending-o">
            <span>{t("common.invest" /**我要投资 */)}</span>
          </TabbarItem>
          <TabbarItem to="/my" icon="user-o">
            <span>{t("common.userCenter" /**个人中心 */)}</span>
          </TabbarItem>
          <TabbarItem to="/about" icon="diamond-o">
            <span>{t("common.about" /**关于我们 */)}</span>
          </TabbarItem>
          <TabbarItem to="/server" icon="service-o">
            <span>{t("common.customer" /**客服 */)}</span>
          </TabbarItem>
        </Tabbar>
      </div>
    );
  },
});
