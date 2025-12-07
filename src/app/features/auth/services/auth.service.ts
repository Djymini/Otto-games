import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { firstValueFrom } from 'rxjs';
import { UserModel } from '../models/user.model';
import { AuthResponseModel } from '../models/auth-response.model';

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
    if (credential.email === 'admin@test.com') {
      response = await firstValueFrom(this.http.get<AuthResponseModel>('data/user-admin.json'));
    } else {
      response = await firstValueFrom(this.http.get<AuthResponseModel>('data/user-lambda.json'));
    }
    this.handleSuccessfulLogin(response);
  }

  async logout(): Promise<void> {
    //await firstValueFrom(this.http.post('/api/auth/logout', {}));
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
