export default {
  methods: {
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
