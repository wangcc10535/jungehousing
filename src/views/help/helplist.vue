<!--
 * @Description: 
 * @Author: wangcc
 * @Date: 2022-08-23 14:41:12
 * @LastEditors: wangcc
 * @LastEditTime: 2022-08-23 14:41:13
 * @FilePath: \jungehousing\src\views\help\helplist.vue
 * @Copyright: Copyright (c) 2016~2022 by wangcc, All Rights Reserved. 
-->
<template>
  <div class="base-box">
    <breadcrumb></breadcrumb>
    <div class="_container">
      <h3>자주 묻는 질문</h3>
      <div class="content">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="회원 가입은 어떻게 하나요?" name="1">
            <div>메뉴 상단 또는 메뉴 우측에 있는 회원 가입 메뉴를 클릭하신 후 내용을 입력하신 후 가입하시면 됩니다. 회원 가입을 하면 자동으로 로그인이 되며 차후에 방문하실 때 로그인을 하시면
              됩니다. 회원 정보는 철저하게 관리되고 있으며 암호는 암호화 되어 저장되어 있기 때문에 관리자도 알 수 없습니다. 그러므로 비밀번호가 유출될 가능성은 없습니다. 비밀번호를 분실하셨을 경우에는
              비밀번호 찾기를 하셔서 초기화된 비밀번호를 이메일을 통해서 받으신 후 로그인하셔서 다시 변경해서 사용해 주세요.</div>
          </el-collapse-item>
          <el-collapse-item title="제휴하고 싶습니다." name="2">
            <div>윈윈할 수 있는 다양한 제휴를 환영합니다. 전화 또는 이메일을 통해서 제휴하시고자 하는 업무나 사업에 대해서 설명해 주세요. 적극적으로 검토하여 서로에게 도움이 되었으면 합니다.
            </div>
          </el-collapse-item>
          <el-collapse-item title="직거래와 중개거래의 차이는 무엇인가요?" name="3">
            <div>직거래는 매수자와 매도자가 중개자 없이 직접 거래하는 방식입니다. 중개거래는 공인중개사의 중개에 의해서 거래되는 방식입니다. 직거래는 중개 수수료가 발생을 하지 않지만 거래 상의 위험이
              존재하여 주의가 필요합니다. 중개거래는 공인중개사의 중개하에 거래가 이뤄지기 때문에 위험요소가 크게 감소합니다.</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'helplist',
  data() {
    return {
      activeNames: '1'
    };
  }
};
</script>

<style  lang='scss' scoped>
.content {
  padding: 20px 0;
}
</style>
