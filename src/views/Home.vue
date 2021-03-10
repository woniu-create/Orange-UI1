<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Orange UI</h1>
        <h2>基于Vue3.0的UI框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-dengpao"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$color: #60c3e2;
$border-radius: 4px;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(217, 238, 246, 1) 0%,
    rgba(186, 237, 252, 1) 100%
  );
  border-bottom-left-radius: 50% 40px;
  clip-path: ellipse(80% 60% at 50% 40%);
  /* background: linear-gradient(145deg, rgba(241,230,225,1) 0%, rgba(239,214,202,1) 100%); */
  /* background: linear-gradient(145deg, rgba(242,225,218,1) 0%, rgba(220,199,190,1) 100%); */
  /* background: linear-gradient(145deg, rgba(173,216,230,1) 0%, rgba(160,204,218,1) 100%); */
  /* background: linear-gradient(145deg, rgba(219,246,253,1) 0%, rgba(179,236,252,1) 100%); */
}
.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    >ul {
      >li {
       width:50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul {
      >li {
        width: 33.3333%
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  color: #39778c;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 20px 0;
    a {
      margin: 0 8px;
      background: $color;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      color: white;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
