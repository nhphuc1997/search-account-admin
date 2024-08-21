import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import provider from './admin/auth-provider.js';
import * as AdminJSTypeorm from '@adminjs/typeorm'
import AdminJS from 'adminjs'
import { TypeOrmModule } from '@nestjs/typeorm';
import componentLoader from './admin/component-loader.js';
import { Bank } from './entities/Bank.entity.js';
import { Account } from './entities/Account.entity.js';
import bankResource from './resources/bank.resource.js';
import accountResource from './resources/account.resource.js';
import transactionHistoryResource from './resources/transaction.resource.js';
import { Warning } from './entities/Warning.entity.js';
import warningResource from './resources/warning.resource.js';
import { VerifyCode } from './entities/VerifyCode.entity.js';
import verifyCodeResource from './resources/verify-code.resource.js';
import { Notification } from './entities/Notification.entity.js';
import notificationResource from './resources/warning.resource.js';
import { TransactionStatus } from './entities/TransactionStatus.entity.js';
import { TransactionGroup } from './entities/TransactionGroup.entity.js';
import { Transaction } from './entities/Transaction.entity.js';

AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
})

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DATABASE_HOST'),
        port: config.get<number>('DATABASE_PORT') || 3306,
        username: config.get<string>('DATABASE_USER'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_NAME'),
        entities: [
          Account,
          Bank,
          Notification,
          Transaction,
          TransactionGroup,
          TransactionStatus,
          VerifyCode,
          Warning
        ],
        synchronize: true,
      })
    }),
    AdminModule.createAdminAsync({
      useFactory: async () => {
        return {
          adminJsOptions: {
            componentLoader,
            rootPath: '/search/admin',
            loginPath: '/search/admin/login',
            logoutPath: '/search/admin/exit',
            resources: [
              {
                resource: Bank,
                options: bankResource
              },
              {
                resource: Account,
                options: accountResource
              },
              {
                resource: Transaction,
                options: transactionHistoryResource
              },
              {
                resource: Warning,
                options: warningResource
              },
              {
                resource: Notification,
                options: notificationResource
              },
              {
                resource: VerifyCode,
                options: verifyCodeResource
              },
              {
                resource: TransactionGroup,
              },
              {
                resource: TransactionStatus
              }
            ],
            branding: {
              companyName: 'Cổng thông tin kho bạc nhà nước Admin',
              logo: '',
            },
          },
          auth: {
            provider,
            cookiePassword: process.env.COOKIE_SECRET,
            cookieName: 'adminjs',
          },
          sessionOptions: {
            resave: true,
            saveUninitialized: true,
            secret: process.env.COOKIE_SECRET,
          }
        };
      },
    }),
  ],
})
export class AppModule { }
