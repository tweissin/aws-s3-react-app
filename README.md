Create an s3 bucket (i.e. aws-s3-react-app-trw)
Change samconfig.toml to reference this bucket

```shell
sam build
sam deploy
npm run build
node deploy.js
```

References:
* https://aws.plainenglish.io/deploy-react-web-app-on-aws-s3-and-cloudfront-using-cloudformation-via-aws-sam-cli-409aa479063d

