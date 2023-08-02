import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthenticationService {
  static async call(login) {
    const response = await fetch(`${config.adresseIp}/auth/signin`, {
      method: "POST",
      body: JSON.stringify(login),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      return await response.json();
    }
    return undefined;
  }

  static async login(username, password) {
    const response = await this.call({ username, password });
    if (response !== undefined) {
      await AsyncStorage.setItem("jwt", response.jwt);
      await AsyncStorage.setItem("expiration", response.expiration);
      await AsyncStorage.setItem("user", JSON.stringify(response.user));
      await AsyncStorage.setItem("reloaded", "false");
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuthenticated());
      }, 1000);
    });
  }

  static async isAuthenticated() {
    const expiration = await AsyncStorage.getItem("expiration");
    const jwt = await AsyncStorage.getItem("jwt");

    if (
      expiration !== null &&
      Date.parse(expiration) > Date.now() &&
      jwt != null
    ) {
      return true;
    } else {
      await AsyncStorage.removeItem("jwt");
      await AsyncStorage.removeItem("expiration");
      await AsyncStorage.removeItem("user");

      if ((await AsyncStorage.getItem("reloaded")) !== "true") {
        await AsyncStorage.setItem("reloaded", "true");
      }

      return false;
    }
  }

  static async getJwt() {
    await this.isAuthenticated();
    return await AsyncStorage.getItem("jwt");
  }

  static async logout() {
    await AsyncStorage.removeItem("jwt");
    await AsyncStorage.removeItem("expiration");
    await AsyncStorage.removeItem("user");
  }
}

export default AuthenticationService;
