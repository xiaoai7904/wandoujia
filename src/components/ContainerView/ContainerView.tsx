import { defineComponent } from "vue";
import "./ContainerView.style.less";

export default defineComponent({
  setup(_, { slots }) {
    return () => <div class="container">{slots.default?.()}</div>;
  },
});
