



class AuthService {


  public getProfile(): Promise<any> {
    return fetch('http://localhost:3333/api/auth/profile').then((res) => res.json());
  }

}

export const authService = new AuthService();