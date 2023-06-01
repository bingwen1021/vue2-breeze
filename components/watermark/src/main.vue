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
    textBaseline: {
      type: String,
      default: "Middle",
    },
    textAlign: {
      type: String,
      default: "left",
    },
    fontSize: {
      type: Number,
      default: 12,
    },
    fontColor: {
      type: String,
      default: "rgba(0,0,0,0.2)",
    },
    lineSpace: {
      type: Number,
      default: 1.2,
    },
    canWidth: {
      type: Number,
      default: 195,
    },
    canHeight: {
      type: Number,
      default: 100,
    },
    adjustScale: {
      type: Number,
      default: 0.8,
    },
  },
  methods: {
    renderWatermark() {
      let can = document.createElement("canvas");
      can.width = this.canWidth;
      can.height = this.canHeight;
      let cans = can.getContext("2d");
      cans.rotate((-20 * Math.PI) / 180);
      cans.font = `${this.fontSize}px Microsoft JhengHei`;
      cans.textBaseline = this.textBaseline;
      cans.textAlign = this.textAlign;
      cans.fillStyle = this.fontColor;
      this.textList.forEach((text, index) => {
        cans.fillText(
          text,
          0,
          this.adjustScale * can.height + index * this.lineSpace * this.fontSize
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