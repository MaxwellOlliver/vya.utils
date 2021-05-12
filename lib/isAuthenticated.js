const isAuthenticated = (key) => !!localStorage?.getItem(key)

export default isAuthenticated