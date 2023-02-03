import { defineComponent, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { NavBar } from "vant";
import headStyle from "./headNav.module.less";

// 加了个参数, 依次 参数back默认回到上一页, 加backPath路由指定到某路由,emit('click-right') 自定义

export default defineComponent({
  name: "NavBar",
  props: {
    style: {
      type: String,
      default: "",
    },
    /**
     * 左侧返回是否显示
     */
    isBack: {
      type: Boolean,
      default: true,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * 右边内容
     */
    right: {
      type: String,
      default: "",
    },
    /**
     * 固定置顶
     */
    fiexd: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否返回上一页
     */
    back: {
      type: Boolean,
      default: true,
    },
    /**
     * 返回的路由
     */
    backPath: {
      type: String,
      default: "",
    },
  },
  emits: ["click-left"],
  setup(props, { slots, emit }) {
    const router = useRouter();

    const onClickLeft = () => {
      if (props.backPath) {
        router.push(props.backPath);
        return;
      }
      emit("click-left");
    };

    return () => (
      <NavBar
        fixed
        safe-area-inset-top
        title={props.title}
        v-slots={{
          left: () =>
            props.isBack ? (
              <img
                class={headStyle.topHeaderBack}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFsSURBVHgB7duBTcJQFIXhP07gCGcDHYERHIER3ABGcANWcANG0A0YAZ0A+wIYxd5eUlqV1/MlNyFNSsKfl6a8tGBmZmZmZjYpauYe+0HNrJvZHWZzOGbsQ5Qgu5NZY2Gc40ya6I6zYcJEd5wySyZKOE5IOE5IOE5IOE5IOE5IOE5IOE5IOE5IOE5IOE5IOE5IOE5IXB7ntplZMw9UuFF2aRydfEf5XM2264Jh43yNdPXEOHGOI67cnPHiVBHoifYftjrj3CzOnwa6YRh3wfFnus3456tjqEBv9NP3vF8zVKD34Pgj3V4PU7058fVjkZwrJnCRLne/W8aLJCqwpHsV9I1UxY1iUVbRC8NGKquyqic8RH49ySIV5Y/qnH306ohhIlVNOFJKOFJKOFJKOFJKOFJKOFJKOFJKOFJKOFJKOFJKOFJK5JGyncnqie5IW8yvIpxDtEdaYZ/E90hr/DpUq7LVKszMzMzMzOrzAc5NpNnqQnlVAAAAAElFTkSuQmCC"
                alt="back"
                onClick={() => (props.back ? router.go(-1) : onClickLeft())}
              />
            ) : null,
        }}
      />
    );
  },
});
