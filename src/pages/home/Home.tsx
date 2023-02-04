import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import {
  NavBar,
  Image,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Button,
  Field,
} from "vant";
import ContainerView from "@/components/ContainerView";
import { Utils } from "@/common";
import "./Home.style.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    const download = (url: string) => {
      window.gtag('event', 'download', {'event_name': 'click_download'})
      if (Utils.isWechat()) {
        router.push({ name: "download" });
        return;
      }

      window.open(url);
    };
    return () => (
      <div class="home">
        <NavBar
          fixed
          safe-area-inset-top
          v-slots={{
            title: () => (
              <div class="flex-between">
                <Image class="home-nav-img" src={window.dataJson.logo} />
                <Field placeholder="搜索" />
              </div>
            ),
          }}
        />
        <ContainerView>
          <Tabs ellipsis={false}>
            {window.dataJson.pageData.map((item: any, index: number) => (
              <Tab title={item.tabName}>
                <div class="home-banner">
                  <Swipe autoplay={5000} indicator-color="white">
                    {item.data.banner.map(
                      (bannerItem: any, bannerIndex: number) => (
                        <SwipeItem key={bannerIndex}>
                          <Image src={bannerItem} />
                        </SwipeItem>
                      )
                    )}
                  </Swipe>
                </div>
                {item.data.list.map((dataItem: any) => (
                  <div class="home-tabs">
                    <h1 class="home-tabs-title">{dataItem.title}</h1>
                    <div class="home-tab-swipe">
                      <Swipe loop={false} width={90} indicator-color="white">
                        {dataItem.list.map(
                          (listItem: any, listIndex: number) => (
                            <SwipeItem key={listIndex}>
                              <Image src={listItem.icon} />
                              <p class="label">{listItem.name}</p>
                              <Button
                                type="primary"
                                onClick={() => download(listItem.downloadUrl)}
                              >
                                查看
                              </Button>
                            </SwipeItem>
                          )
                        )}
                      </Swipe>
                    </div>
                  </div>
                ))}

                <div class="home-footer">
                  <Image src={item.footerUrl} />
                </div>
              </Tab>
            ))}
          </Tabs>
        </ContainerView>
      </div>
    );
  },
});
