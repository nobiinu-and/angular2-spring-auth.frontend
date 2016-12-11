import { Component } from '@angular/core';
import { AuthService, UserService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-member-only',
  templateUrl: 'member-only.component.html',
  styleUrls: ['member-only.component.css'],
})

export class MemberOnlyComponent {
  userId: string;
  error: any = null;
  users: any = null;
  user: any = null;

  constructor(private authService: AuthService, private userService: UserService) {}

  showUsers() {
    this.clearError();
    this.users = null;
    this.userService.findAll()
      .subscribe(
        result => {
          this.users = result;
        },
        error => {
          this.handleError(error);
        }
      );
  }

  showUser() {
    this.clearError();
    this.user = null;
    this.userService.get(this.userId)
      .subscribe(
        result => {
          this.user = result;
        },
        error => {
          this.handleError(error);
        }
      );
  }

  logout() {
    this.clearError();
    this.authService.logout()
      .subscribe(
        result => {
          this.user = result;
        },
        error => {
          this.handleError(error);
        }
      );
  }

  clearError() {
    this.error = null;
  }

  hasError() {
    return this.error !== null;
  }

  handleError(error: any) {
    this.error = {};
    this.error.status = error.status;
    if (error.status === 401) {
      this.error.description = {};
      this.error.description.message = 'ログインし直してください';
    } else {
      this.error.description = error.json();
    }
  }
}