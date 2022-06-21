# bastion-host

とりあえず EC2 立てたいときに使う。

## Envitonment variables

| Variable            | Description                               |
| ------------------- | ----------------------------------------- |
| CDK_DEFAULT_ACCOUNT | AWS account ID to which you deploy a host |
| CDK_DEFAULT_REGION  | AWS region to which you deploy a host     |

## Deploy a bastion host

```sh
npm install
npx cdk diff
npx cdk deploy
```

## Connect to a bastion host

- [(Optional) Install the Session Manager plugin for the AWS CLI - AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html#install-plugin-macos)

```sh
aws ssm start-session --target ${instance_id}
```

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
