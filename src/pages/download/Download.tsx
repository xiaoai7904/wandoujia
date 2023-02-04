import { defineComponent } from "vue";
import { Image } from "vant";
import DownloadImage from "@/assets/image/download.jpg";

export default defineComponent({
  setup(props, ctx) {
    return () => (
      <div class="download">
        <Image src={DownloadImage} />
      </div>
    );
  },
});
