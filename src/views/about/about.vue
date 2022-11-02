<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 15:13:46
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-11-02 15:34:56
 * @FilePath: \jungehousing\src\views\about\about.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <h3>{{ $t('message.aboutUs') }}</h3>
      <video-player style="width: 100%;height: 675px;"  class="video-player vjs-custom-skin"
        ref="videoPlayer" :playsinline="true" :options="playerOptions">
      </video-player>
      <div class="content" v-html="aboutUs.dictValue">
      </div>
    </div>
  </div>
</template>

<script>
import { getDicts } from '@/api/http';
export default {
  name: 'about',
  data() {
    return {
      aboutUs: {},
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false,  // 如果为true,浏览器准备好时开始回放
        muted: false,     // 默认情况下将会消除任何音频。
        loop: false,      // 是否视频一结束就重新开始。
        preload: 'auto',  // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9',  // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true,  // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",  // 类型
          src: ''             // url地址
        }],
        poster: '',  // 封面地址
        notSupportedMessage: '暂无视频或视频无法播放，请稍后再试',  // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,           // 当前时间和持续时间的分隔符
          durationDisplay: true,       // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true       // 是否显示全屏按钮
        }
      },
    };
  },
  created() {
    this.getAboutus();
    this.getVideo();
  },
  methods: {
    getAboutus() {
      getDicts('aboutus').then((res) => {
        if (res.code == 200) {
          this.aboutUs = res.data[0];
        }
      });
    },
    getVideo() {
      getDicts('about_video').then((res) =>{
        if (res.code == 200) {
          this.playerOptions.sources[0].src =  res.data[0].dictValue;
        }
      })
    }
  }
};
</script>

<style  lang='scss' scoped>
.content {
  padding: 20px 0;
}
</style>
