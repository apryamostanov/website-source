## Introduction

> ***...The Bobbin revolves infinitely...*** \
***...A revolution in Java logging...***

`Bobbin` is a high-performance `Groovy` `Slf4j`-compatible logger designed for multi-threaded applications (especially those with persistent threads like batch, stream and messaging applications).

`Bobbin` leverages the concept of `Logback`/`Log4j2` sifting appenders while providing much more easier configuration using native `Groovy`/`Java` scripting expressions.

> ❇ Bobbin is available in `JCenter` repository.

## Maven

> ❗ Note that there is no `<type>pom</type>`

> ❇ [Example Maven project with Bobbin](https://github.com/INFINITE-TECHNOLOGY/BOBBIN_MAVEN_EXAMPLE)

```xml
...
<repositories>
    <repository>
        <id>jcenter</id>
        <name>jcenter</name>
        <url>https://jcenter.bintray.com</url>
    </repository>
</repositories>
...
<dependency>
    <groupId>io.i-t</groupId>
    <artifactId>bobbin</artifactId>
    <version>4.1.0</version>
</dependency>
...
```

## Gradle

```groovy
dependencies {
    compile "org.codehaus.groovy:groovy-all:2.5.4"
    compile "io.i-t:bobbin:4.1.0"
}
```

## Try it now!

Just simply run the below code in Groovy (2.5.4+) console:

```groovy
@Grab('io.i-t:bobbin:4.1.0')
@Grab('org.slf4j:slf4j-api:1.7.25')
import groovy.util.logging.Slf4j

@Slf4j
class TryMe {
    
    void tryMe() {
        log.info("Welcome to the revolution in Java Logging.")
    }

}

new TryMe().tryMe()
```

Output:

```
2019-03-15 15:19:14:337|info|Thread-3|TryMe|Welcome to the revolution in Java Logging.
```

## Documentation
* [Bobbin Documentation](https://github.com/INFINITE-TECHNOLOGY/BOBBIN/wiki)


## Sample configuration

Bobbin.yml

```yaml
destinations:
  - name: io.infinite.bobbin.config.ConsoleDestinationConfig
    levels: [warn, error, info]
  - name: io.infinite.bobbin.config.FileDestinationConfig
    packages: [io.infinite]
    fileName: ("./LOGS/INFINITE/${className}/${level}/${className}_${level}_${date}.log")
  - name: io.infinite.bobbin.config.FileDestinationConfig
    fileName: ("./LOGS/PACKAGES/${className}/${level}/${className}_${level}_${date}.log")
    format: dateTime + '|' + level + '|' + threadName + '|' + className + '|' + message + '\n'
```