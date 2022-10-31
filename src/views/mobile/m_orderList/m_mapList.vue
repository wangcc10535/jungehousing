<!--
 * @Author: wangcc 1053578651@qq.com
 * @Date: 2022-09-26 21:07:59
 * @LastEditors: wangcc 1053578651@qq.com
 * @LastEditTime: 2022-10-31 22:19:56
 * @FilePath: \jungehousing\src\views\mobile\m_orderList\m_mapList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <navDrawer></navDrawer>
        <div id="map" style="width: 100%; height: 92vh; position: relative">
            <el-button type="primary" round class="btn-pos" @click="jumpList">{{ $t("message.lookMapList") }}
            </el-button>
        </div>
    </div>
</template>
<script>
import { searchRoom } from '@/api/http';
export default {
    name: '',
    data() {
        return {
            map: null,
            marker: null,
            searchFrom: {},
            houseList: []
        }
    },
    created() {
        if (JSON.stringify(this.$route.query) != '{}') {
            this.searchFrom = this.$route.query;
        }
        this.getList();
    },
    mounted() {
    },
    methods: {
        // 获取房产列表
        getList() {
            searchRoom({ ...this.searchFrom, status: '1' }).then((res) => {
                if (res.code == 200) {
                    res.rows.forEach(item => {
                        item.addressName = item.city.split(',').splice(0, 2).join("")
                        item.addressDong = item.city.split(',').splice(2).join(''),
                            this.houseList.push(item)
                    })
                    this.initMap();
                }

            });
        },
        jumpList() {
            this.$router.push({
                name: 'm_list',
                query: this.searchFrom
            });
        },
        initMap() {
            var mapOptions = {
                center: new naver.maps.LatLng(37.3595704, 127.105399),
                zoom: 9,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: naver.maps.MapTypeControlStyle.DROPDOWN
                },
                zoomControl: true,
                zoomControlOptions: {
                    position: naver.maps.Position.LEFT_BOTTOM,
                    style: naver.maps.ZoomControlStyle.SMALL
                }
            };
            this.map = new naver.maps.Map('map', mapOptions);
            this.onLoad(this.map);
        },
        onLoad(map) {
            let _this = this;
            var markers = [],
                data = this.houseList;
            var htmlMarker2 = {
                content: '<div class="marker-box-html"></div>',
                size: N.Size(40, 40),
                anchor: N.Point(20, 20)
            };
            var obj = this.getEleNums(data);
            const cache = [];
            for (const t of data) {
                // 检查缓存中是否已经存在
                if (cache.find(c => c.addressDong === t.addressDong)) {
                    // 已经存在说明以前记录过，现在这个就是多余的，直接忽略
                    continue;
                }
                t.numberR = obj[t.addressDong]
                // 不存在就说明以前没遇到过，把它记录下来
                cache.push(t);
            }
            cache.forEach((item, index) => {
                let latlng = new naver.maps.LatLng(item.lat, item.lon);
                let number = item.numberR;
                let address = item.city.split(',').splice(2).join('');
                var htmlMarker1 = {
                    content:
                        '<div class="marker-box"><span class="num">' +
                        number +
                        '</span><font class="marker-name">' +
                        address +
                        '</font></div>',
                    size: N.Size(40, 40),
                    anchor: N.Point(20, 20)
                };
                _this.marker = new naver.maps.Marker({
                    position: latlng,
                    draggable: false,
                    icon: htmlMarker1
                });
                naver.maps.Event.addListener(_this.marker, 'click', function (e) {
                    //点击marker获取商品列表
                    // _this.searchFrom.city = item.city
                    _this.$router.push({
                        name: 'm_list',
                        query: {
                            city: item.city
                        }
                    });
                });
                markers.push(_this.marker);

            })
            var markerClustering = new MarkerClustering({
                minClusterSize: 16, // 控制聚点数量从几个开始
                maxZoom: 16, // 最大层级
                map: map,
                markers: markers, // 标记点数组
                disableClickZoom: false, // 是否可拖动标记点
                gridSize: 120,
                icons: [htmlMarker2], //  聚合点样式
                indexGenerator: [10, 100, 200, 500, 1000],
                stylingFunction: function (clusterMarker, count) {
                    $(clusterMarker.getElement()).find('div.marker-box-html').text(count);
                }
            });
        },
        getEleNums(data) {
            var map = {}
            for (let i = 0; i < data.length; i++) {
                var key = data[i];
                let cityName = key.city.split(',').splice(2).join('')
                if (map[cityName]) {
                    map[cityName] += 1
                } else {
                    map[cityName] = 1
                }
            }
            return map
        },
    }
};
</script>
<style scoped lang='scss'>
@import url('@/assets/css/order.css');

::v-deep .index-beader {
    margin-bottom: 0;
}

.btn-pos {
    position: absolute;
    bottom: 3rem;
    left: 35%;
    z-index: 999;
}
</style>