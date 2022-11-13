# bastion-host

とりあえず EC2 立てたいときに使う。

## Envitonment variables

| Variable            | Description                               |
| ------------------- | ----------------------------------------- |
| CDK_DEFAULT_ACCOUNT | AWS account ID to which you deploy a host |
| CDK_DEFAULT_REGION  | AWS region to which you deploy a host     |

## Deploy a bastion host

```sh
make cdk/diff
make cdk/deploy
```

## Connect to a bastion host

- [(Optional) Install the Session Manager plugin for the AWS CLI - AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html#install-plugin-macos)

```sh
make aws/ssm
```
