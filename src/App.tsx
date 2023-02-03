import { defineComponent } from "vue";
import { BaseRouterView } from "@/components/BaseRouterView";
export default defineComponent({
  setup() {
    console.log(111)
    return () => <BaseRouterView />;
  },
});
