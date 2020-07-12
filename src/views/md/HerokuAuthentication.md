Greetings Dear Readers!

Let's say our Java application is deployed on Heroku platform and needs to connect to another server using `client certificate authentication`.

In this article we will show how to securely deploy the Client `keystore` files using `environment variables`.

> Storing passwords and secret data in `environment variables` is a common approach for `cloud-native` applications and is one of principles of [The Twelve-Factor App](https://12factor.net/config).

Normally `private keys` are stored in password-protected keystore files such as `.p12` or `jks` on a file system.

However the problem becomes evident when it comes to deploying such files into the `cloud`:
- Even password-protected `private keys` should not be checked in the `VCS`
- Same applies to Docker images or any other shared artifacts

> ❇ Fortunately it is easy for Java applications to fix this!

Here is the process:

1. Security officer exports the `private key` file as a `Base64` encoded string
2. Security officer logs into the `cloud management console` (e.g. Heroku Dashboard)
3. Security officer imports the `Base64` encoded string into `environment variable`
4. As an automatic deployment step, the same `environment variable` storing the `Base64` encoded string is decoded and written as a binary file
5. Credentials of this file are passed to the application during startup

> Now only people having the access to `cloud management console` have access to the `private key`.

Let's apply this solution in practice:
- Language: `Java`
- Platform: `Heroku`
- Build system: `Gradle`
- Keystore: `P12`

## Export the .p12 file

Simply follow steps from this nice article using the built-in tools of your OS:
- [Exporting file into Base64 using Command Line (Windows, Linux)](https://www.igorkromin.net/index.php/2017/04/26/base64-encode-or-decode-on-the-command-line-without-installing-extra-tools-on-linux-windows-or-macos/)

> ❗ Never use online tools for your private keys.

## Import into Heroku

- Login into `Heroku`
- Go to `Settings` of your application
- Press "Reveal the config vars"
- Add the following variables:
    - `keyStoreFileName` - any file name of your choice, e.g. "private_key.p12"
    - `keyStoreBase64` - paste the `Base64` string exported in the previous step
    - `keyStorePassword` - the password previously used with the `.p12` file
    - `keyStoreType` - in our case `pkcs12`
    - `trustStoreType` - `jks`

## Write .p12 file using Gradle task

It is as simple as pasting the following task into your `build.gradle` and setting it to run before `stage` task:

```groovy
task initKeyStore() {
    doLast {
        println("Creating keystore file from environment variables.")
        String keyStoreFileName = System.getenv("keyStoreFileName")
        if (keyStoreFileName != null) {
            String keyStoreBase64 = System.getenv("keyStoreBase64")
            new File(keyStoreFileName).withOutputStream {
                it.write(Base64.decoder.decode(keyStoreBase64))
            }
        }
    }
}
stage.dependsOn(initKeyStore)
```

## Pass credentials in Heroku procfile

Heroku `procfile` does not support multi-line commands.

Therefore we recommend to create a shell script with our input - `runApp.sh`.

runApp.sh:

```
java \
 -Dserver.port=$PORT \
...
 -Djavax.net.ssl.keyStoreType=$keyStoreType \
 -Djavax.net.ssl.trustStoreType=$trustStoreType \
 -Djavax.net.ssl.keyStore=$keyStoreFileName \
 -Djavax.net.ssl.keyStorePassword=$keyStorePassword \
 $JAVA_OPTS \
...
```

Don't forget to add `execute` permission using `GIT` and to push the commit:

```
git update-index --chmod=+x runApp.sh
git commit -m 'Add execute permissions to runApp.sh'
git push origin master
```

## Conclusion

- Now every time you deploy `Heroku` application, `Gradle` automatically creates a `P12` keystore file based on the `environment variable`.
- The `procfile` then passes keystore credentials to the application.
- `Private key` becomes accessible to the application and can be used for `Client certificate authentication`.
- No code changes are required in the application.

Thank you for your attention!