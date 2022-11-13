cdk/diff:
	npx cdk diff

cdk/deploy:
	npx cdk deploy

cdk/destroy:
	npx cdk destroy

aws/ssm:
	aws ssm start-session --target \
		`aws ec2 describe-instances \
			--filters "Name=instance-state-name,Values=running" \
			--query "Reservations[].Instances[].InstanceId" \
			--output text`
