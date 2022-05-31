<template>
  <div class="streambox">
    <div class="contents_wrap">
      <div class="display_wrap"></div>
      <div class="time_wrap">
        <div id="t">
          <div id="time">
            <span id="hour"></span>
            <span id="colon">:</span>
            <span id="min"></span>
            <span id="colon_2">:</span>
            <span id="sec"></span>
          </div>
          <div id="date"><span> / 　</span></div>
        </div>
      </div>
      <div class="slide_wrap">
        <client-only>
          <div class="thumbnail_area">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(slide, index) in contents" :key="index">
                <img :src="slide.thumbnail.url" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="text_area">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(slide, index) in contents" :key="index">
              <div class="uppper_area">
                <div class="category">{{ slide.category }}</div>
                <div class="title">{{ slide.title }}</div>
              </div>
              <div class="bottom_area">
                <p class="description">{{ slide.description }}</p>
              </div>
              </swiper-slide>
            </swiper>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  async asyncData({ $axios }) {
    let [slide] = await Promise.all([
      $axios.$get(
        "/api_mc_nekozukime/v1/schedule?depth=2&filters=is_live%5Bequals%5Dtrue"
      ),
    ]);

    return slide;
  },
  mounted() {
    const day = function () {
      const dt = dayjs(new Date());
      document.querySelector("#time #hour").innerHTML = dt.format("HH");
      document.querySelector("#time #min").innerHTML = dt.format("mm");
      document.querySelector("#time #sec").innerHTML = dt.format("ss");
      document.querySelector("#date").innerHTML = dt.format("MM/DD ddd");
    };
    setInterval(day, 1000);
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 15000,
          disableOnInteraction: false,
        },
        allowTouchMove: false,
        slidesPerView: 1,
        loop: true,
      },
    };
  },
};
</script>