// Mocking auth to bypass Google Sign-in loops for local development
export const auth = async () => {
  return {
    user: {
      id: "demo-user-id",
      name: "C&C Admin",
      email: "info@cconline.com",
      image: null
    },
    expires: new Date(Date.now() + 3600 * 1000).toISOString(),
  }
}

export const signIn = async () => {}
export const signOut = async () => {}
export const handlers = { GET: () => {}, POST: () => {} }
