import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutesModule } from '../routes/routes.module'

const imports = [
  BrowserModule,
  RoutesModule,
  HttpClientModule,
  BrowserAnimationsModule,
  CommonModule,
  UserModule
];

export { imports };