<template>
    <div class="masonry">
        <template v-for="i in data">
            <img ref="imgs" class="item" :url="i.img" height="100%" width="100%" :key="i.id"/>
        </template>
    </div>
</template>

<script>
import data from "../data.json";
export default {
  mounted(){
    Array.from(this.$refs.imgs).forEach(function(img, index) {
        let src = img.getAttribute('url');
        let image = new Image();
        image.src = src;
        let width = img.width;
        image.onload = function() {
            let w = image.width;
            let h = image.height;
            let height = Math.max(h * width / w);
            img.src = src;
            img.style.gridRowEnd = `span ${~~(height/10)}`;
        }
    });
  },
  data() {
    return {
      data
    };
  }
};
</script>

<style lang="scss" scoped>
.masonry{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; // 分为3列
    column-gap:5px; // 列间距5px
    grid-auto-rows: 10px; 
    .item{
        grid-row-start: auto;
        min-height: 50px;
    }
}
</style>