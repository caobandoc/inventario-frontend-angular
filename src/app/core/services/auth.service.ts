import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {RegisterDto} from "../dto/registerDto";
import {Observable} from "rxjs";
import {RegisterRequestDto} from "../dto/registerRequestDto";
import {LoginRequestDto} from "../dto/loginRequestDto";

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url: string = `${apiUrl}/auth`;

  constructor(
    private http: HttpClient
  ) {}

  public register(registerDto: RegisterRequestDto) : Observable<RegisterDto>{
    return this.http.post<RegisterDto>(`${this.url}/register`, registerDto);
  }

  public login(loginDto: LoginRequestDto) : Observable<RegisterDto>{
    return this.http.post<RegisterDto>(`${this.url}/login`, loginDto);
  }
}
