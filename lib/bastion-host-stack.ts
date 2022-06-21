import { Stack, StackProps, aws_ec2 as ec2, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class BastionHostStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'vpc', {
      cidr: '10.0.0.0/16',
      maxAzs: 1,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'isolated',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

    const host = new ec2.BastionHostLinux(this, 'bastion-host', {
      vpc,
      subnetSelection: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
    });

    new CfnOutput(this, 'start-session-command', {
      value: `aws ssm start-session --target ${host.instanceId}`,
    });
  }
}
