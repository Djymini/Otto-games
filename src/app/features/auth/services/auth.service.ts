import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { firstValueFrom } from 'rxjs';
import { UserModel } from '../models/user.model';
import { AuthResponseModel } from '../models/auth-response.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private currentUserSignal = signal<UserModel | null>(null);
  private isAuthenticatedSignal = signal<boolean>(false);

  currentUser = computed(() => this.currentUserSignal());
  isAuthenticated = computed(() => this.isAuthenticatedSignal());

  async login(credential: LoginDto): Promise<void> {
    let response: AuthResponseModel;
    response = await firstValueFrom(this.http.post<AuthResponseModel>(environment.apiUrl+"/auth/login", credential));
    this.handleSuccessfulLogin(response);
    console.log('Hello ' + this.currentUser()?.username);
  }

  async logout(): Promise<void> {
    this.handleLogout();
  }

  private handleSuccessfulLogin(response: AuthResponseModel): void {
    localStorage.setItem('token', response.token);
    this.currentUserSignal.set(response);
    this.isAuthenticatedSignal.set(true);
  }

  private handleLogout(): void {
    localStorage.removeItem('token');
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
  }
}
