export default {
  methods: {
    store (key, value = null) {
      if (value === null) {
        return localStorage.getItem(this.keyWrapper(key))
      }
      return localStorage.setItem(this.keyWrapper(key), value)
    },

    clearFromStore (key) {
      localStorage.removeItem(this.keyWrapper(key))
    },
    keyWrapper (key) {
      return key
    }
  }
}
