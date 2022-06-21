#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BastionHostStack } from '../lib/bastion-host-stack';

const app = new cdk.App();
new BastionHostStack(app, 'BastionHostStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
