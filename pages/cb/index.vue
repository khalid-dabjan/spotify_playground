<script>
import axios from 'axios'
import qs from 'qs'
import ls from '../../mixins/localStorage'
import codeChallenge from '../../mixins/codeChallenge.js'

export default {
  mixins: [ls, codeChallenge],
  created () {
    if (this.$route.query.code) {
      const verifier = this.store('verifier')
      const requestBody = {
        client_id: process.env.spotify_client_id,
        grant_type: 'authorization_code',
        code: this.$route.query.code,
        redirect_uri: process.env.cb_url,
        code_verifier: verifier
      }

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axios.post('https://accounts.spotify.com/api/token', qs.stringify(requestBody), config).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
<template>
  <div class="container mx-auto">
    Welcome
  </div>
</template>
