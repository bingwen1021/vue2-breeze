<template>
  <div ref="contain" class="contain">
    <slot></slot>
  </div>
</template>

<script>
let targetNode = null;
let div = null;
let observer = null;
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "watermark",
  props: {
    textList: {
      type: Array,
      default: () => ["hellobreeze"],
    },
    styleConfig: {
      type: Object,
      default: () => ({
        textAlign: "left",
        fontSize: 12,
        fontColor: "rgba(0,0,0,0.15)",
        canWidth: 195,
        canHeight: 100,
      }),
    },
  },
  methods: {
    renderWatermark() {
      let can = document.createElement("canvas");
      can.width = this.styleConfig.canWidth;
      can.height = this.styleConfig.canHeight;
      let cans = can.getContext("2d");
      cans.rotate((-20 * Math.PI) / 180);
      cans.font = `${this.styleConfig.fontSize}px Microsoft JhengHei`;
      cans.textBaseline = "Middle";
      cans.textAlign = this.styleConfig.textAlign;
      cans.fillStyle = this.styleConfig.fontColor;
      this.textList.forEach((text, index) => {
        cans.fillText(
          text,
          0,
          (4 * can.height) / 5 + index * 1.5 * this.styleConfig.fontSize
        );
      });
      const url = can.toDataURL("image/png");

      // 如果targetNode有div
      if (targetNode.contains(div)) {
        targetNode.removeChild(div);
      }

      div = document.createElement("div");
      div.style.pointerEvents = "none";
      div.style.top = "0px";
      div.style.left = "0px";
      div.style.position = "absolute";
      div.style.zIndex = "100000";
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.background = `url(${url}) left top repeat`;

      targetNode.appendChild(div);
    },
  },
  mounted() {
    targetNode = this.$refs.contain;
    this.renderWatermark();
    const that = this;
    const callback = function (mutationsList) {
      // console.log(mutationsList, "mutationsList");
      for (let mutation of mutationsList) {
        if (mutation.removedNodes) {
          for (let node of mutation.removedNodes) {
            // console.log(node === div);
            if (node === div) {
              that.renderWatermark();
              return;
            }
          }
        }
        if (mutation.type === "attributes") {
          that.renderWatermark();
          return;
        }
      }
    };
    // 创建一个观察器实例并传入回调函数
    observer = new MutationObserver(callback);
    observer.observe(targetNode, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  },
  destroyed() {
    // 停止观察
    observer.disconnect();
    div = null;
  },
};
</script>

<style lang="scss" scoped>
.contain {
  position: relative;
}
</style>