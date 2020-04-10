import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapGetters('adduser', ['getuserdetails']),
}

export const authMethods = mapActions('adduser', [
  'saveuserdetails',
  
])
