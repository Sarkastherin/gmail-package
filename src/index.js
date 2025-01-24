class Email {
    static async getEmail() {
      try {
        let response = await gapi.client.gmail.users.getProfile({
          userId: "me",
        });
        return response.result.emailAddress;
      } catch (e) {
        console.log(e);
      }
    }
  }
  export default Email