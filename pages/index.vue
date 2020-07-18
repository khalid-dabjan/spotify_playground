<script>
import qs from 'qs'

export default {
  methods: {
    login () {
      const params = {
        response_type: 'code',
        client_id: 'b35fc8e2256240018d0e472dd9cd1c30',
        redirect_uri: 'https://khalid-dabjan.github.io/spotify_playground/cb/',
        scope: 'user-follow-modify',
        state: 'e21392da45dbf4',
        code_challenge: this.generateCodeChallenge(this.generateCodeVerifier()),
        code_challenge_method: 'S256'
      }

      location.href = `https://accounts.spotify.com/authorize?${qs.stringify(params)}`
    },
    generateCodeVerifier () {
      return this.generateRandomString(128)
    },
    generateRandomString (length) {
      let text = ''
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text
    },
    generateCodeChallenge (codeVerifier) {
      // eslint-disable-next-line no-undef
      return this.base64URL(CryptoJS.SHA256(codeVerifier))
    },
    base64URL (string) {
      // eslint-disable-next-line no-undef
      return string.toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    }
  }
}
</script>
<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-center h-screen">
      <button class="flex bg-green py-2 px-4 rounded-full items-center hover:bg-green-dark" @click="login">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-12 mr-4">
          <path d="m12 24c6.624 0 12-5.376 12-12s-5.376-12-12-12-12 5.376-12 12 5.376 12 12 12zm4.872-6.344v.001c-.807 0-3.356-2.828-10.52-1.36-.189.049-.436.126-.576.126-.915 0-1.09-1.369-.106-1.578 3.963-.875 8.013-.798 11.467 1.268.824.526.474 1.543-.265 1.543zm1.303-3.173c-.113-.03-.08.069-.597-.203-3.025-1.79-7.533-2.512-11.545-1.423-.232.063-.358.126-.576.126-1.071 0-1.355-1.611-.188-1.94 4.716-1.325 9.775-.552 13.297 1.543.392.232.547.533.547.953-.005.522-.411.944-.938.944zm-13.627-7.485c4.523-1.324 11.368-.906 15.624 1.578 1.091.629.662 2.22-.498 2.22l-.001-.001c-.252 0-.407-.063-.625-.189-3.443-2.056-9.604-2.549-13.59-1.436-.175.048-.393.125-.625.125-.639 0-1.127-.499-1.127-1.142 0-.657.407-1.029.842-1.155z" />
        </svg>
        <span class="font-bold">Login With Spotify</span>
      </button>
    </div>
  </div>
</template>
