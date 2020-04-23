import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "c6d5d229-8fe2-4259-9723-6e0f9acaec24"
  }
});

export const authMeAPI = {
  authMe() {
    return instance.get('auth/me')
      .then(response => {
        return response.data;
      })
  }
}

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 30) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  }
}

export const followAPI = {
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  }
}

export const unfollowAPI = {
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  }
}

export const ProfileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
              .then(response => {
                return response.data;
              })
  },
  getStatus(userId) {
    return instance.get(`profile/status`+ userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  }
}

