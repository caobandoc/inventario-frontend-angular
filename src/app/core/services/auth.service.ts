import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {RegisterDto} from "../dto/registerDto";
import {Observable, tap} from "rxjs";
import {RegisterRequestDto} from "../dto/registerRequestDto";
import {LoginRequestDto} from "../dto/loginRequestDto";
import {TokenService} from "./token.service";
import {LoginDto} from "../dto/loginDto";

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url: string = `${apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  public register(registerDto: RegisterRequestDto) : Observable<RegisterDto>{
    return this.http.post<RegisterDto>(`${this.url}/register`, registerDto);
  }

  public login(loginDto: LoginRequestDto) : Observable<LoginDto>{
    return this.http.post<LoginDto>(`${this.url}/login`, loginDto)
      .pipe(
        tap((loginDto: LoginDto) => {
          this.tokenService.setToken(loginDto.token);
        })
      );
  }
}
