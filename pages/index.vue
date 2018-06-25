<template>
  <section class="container">
    <div>
      <app-logo />
      <ul>
        <li v-for="e in data" :key="e.notice_id">
          {{ e.title }}<br />
          {{ e.contents }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo'

export default {
  components: {
    AppLogo
  },
  async asyncData(context) {
    const response = await context.$axios.get(
      'https://tver.jp/info/notice.json'
    )
    return {
      data: response.data.data
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
