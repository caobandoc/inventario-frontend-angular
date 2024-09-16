import {Injectable} from '@angular/core';
import {environment} from "../../../environment/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const {apiUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly url: string = `${apiUrl}/auth`;

  constructor(
    private http: HttpClient
  ) {
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public removeToken() {
    localStorage.removeItem('token');
  }

  public getClaimToken(claim: string) {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const jwtPayload = JSON.parse(window.atob(base64));
    return jwtPayload[claim];
  }

  public validateToken(token: string): Observable<any> {
    return this.http.post<boolean>(`${this.url}/validate?token=${token}`, null);
  }

}
