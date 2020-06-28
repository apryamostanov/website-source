# Mission

Infinite TECH is a non-profit based, non-commercial open-source software foundation established in 2018.

Our mission is to streamline Web and Mobile app development by standardizing and systemizing the primary infrastructure 
components:

* Logging
* Code automation and transformation
* Messaging
* User login & API Security
* HATEOAS (HAL) Frontend SDK

In addition to that we are proud to be [Bronze Sponsor](https://opencollective.com/infinite-technology) of
[Apache Groovy](https://groovy-lang.org/) [Open Collective](https://opencollective.com/friends-of-groovy).

# Services

Our cloud-native services are deployed on highly reliable Heroku/AWS infrastructure.

## COBOL to XML Online

Online COBOL data file converter.

Convert COBOL data file online to XML using copybook.

* [Convert COBOL to XML](./Cobol)

## Re-encode

Convert file from any character encoding to any other character encoding.

* [Re-encode a file](./Re-encode)

## Ascend

`Ascend` is a [SECaaS](https://en.wikipedia.org/wiki/Security_as_a_service) (Security as a Service) platform focused 
on Web Access Control.

* [See more](./Ascend/)

# Products

Our projects are hosted in [Bintray Maven Repository](https://bintray.com/infinite-technology/io.i-t) 
and are publicly available via [Bintray JCenter](https://bintray.com/bintray/jcenter).

Our projects form the `Infinite Project Stack`, synergistically supplementing each other into a functional vertical
raising from lower-level components (compile-time AST transformations) to enterprise solutions (Messaging, 
Service Transformation Layer, API Security).

## Supplies

Misc commons/utilities/tools, specifically notable for `Marker` functionality, automatically showing line numbers of code 
during runtime.

* [See more](./Supplies/)


## Bobbin

Revolutionary high-performance Groovy/Java Slf4j logger.

`Bobbin` is a high-performance Groovy Slf4j-compatible logger designed for multi-threaded applications (especially those
 with persistent threads like batch and messaging applications).

`Bobbin` leverages the concept of Logback/Log4j2 sifting appenders while providing much more easier configuration using
 native Groovy/Java scripting expressions.

* [See more](./Bobbin/)

## Carburetor

Parameterized Groovy AST method Transformer.

`Carburetor` provides a foundation for other libraries to automatically generate Groovy Semantic handling code based on 
`Carburetor` configuration and inject it into User code during the Compilation stage resulting in a possibility to 
intercept and interact with application run-time events including their corresponding compile-time metadata 
(class name, method name, line start, line end, column start, column end, ASTNode class name).

* [See more](./Carburetor/)

## BlackBox

Logging code automation solution.

`BlackBox` is a solution to automatically generate Groovy Semantic logging code and inject it into User code during the 
Compilation stage resulting in a possibility to produce and review exhaustive application runtime data in a form of log
 files with structure based on simplified Groovy AST class model.

* [See more](./BlackBox/)

## HTTP

Java/Groovy HTTP Client library.

This HTTP Client library supports the following connection features:

- HTTP (plaintext)
- HTTPS
- HTTPS without server certificate validations (i.e. self-signed certificates)
- Basic Authorization
- AWS Signature v4
- Proxy
- Connection timeout
- Read timeout
- Detailed logging (via BlackBox)

* [See more](./HTTP/)

## Pigeon

An end-user server application (HTTP Message Broker) designed for distribution of text messages in HTTP format.

`Pigeon` is capable to:

* Enqueue a text message from external source using REST API or direct insert into Pigeon DB by the external app
* Convert it into one or more HTTP messages with a specified body/query string parameters using appropriate `Plugins` (plugins can be developed by end-users using Groovy script)
* Dispatch the resulting messages ansynchronously to one or more recipients (URLs) using a variety of HTTP connection and authentication mechanisms (such as AWS v4 signature)
* If needed retry sending the message several times

* [See more](./Pigeon/)

## David

A Polyglot Telegram Chat Bot.

David is based on [AbilityBot](https://github.com/rubenlagus/TelegramBots) adding support of Plugins written in Groovy Script.

David helps to speed-up the development and enrollment of Telegram chat bots by taking care of the essential routines.

* [See more](./David/)