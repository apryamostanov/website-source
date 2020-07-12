Greetings Dear Readers!

Today we will demonstrate an amazing example of how <router-link to="/Bobbin">Bobbin</router-link> Slf4j Logger can help in a very common use case - 
logging Spring Boot HTTP requests and responses.

Furthermore - we will log the HTTP messages into a separate log files!

This example is applicable both for `Java` and `Groovy`.

To enable logging of `HTTP Request body`, add the below configuration class:

```groovy
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.filter.CommonsRequestLoggingFilter
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
@Configuration
class WebMvcConfiguration implements WebMvcConfigurer {
    @Bean
    CommonsRequestLoggingFilter logFilter() {
        CommonsRequestLoggingFilter filter = new CommonsRequestLoggingFilter()
        filter.includeQueryString = true
        filter.includePayload = true
        filter.maxPayloadLength = 100000
        filter.includeHeaders = false
        filter.afterMessagePrefix = "REQUEST DATA : "
        return filter
    }
}
```

Now let's configure `Bobbin`.

Add dependency to your `build.gradle`:
```
repositories {
    jcenter()
}
compile "io.i-t:bobbin:4.1.0"
```

Create `Bobbin.yml` in your application in the working directory:

```yaml
destinations:
  - name: io.infinite.bobbin.config.ConsoleDestinationConfig
    formatThrowable: "%format% + delimiter + throwable"
    levels: [warn, error, info]
  - name: io.infinite.bobbin.config.FileDestinationConfig
    levels: [warn]
    fileName: ("./LOGS/WARNINGS_${date}.log")
  - name: io.infinite.bobbin.config.FileDestinationConfig
    levels: [error]
    fileName: ("./LOGS/ERRORS_${date}.log")
  - name: io.infinite.bobbin.config.FileDestinationConfig
    packages: [org.springframework.web]
    fileName: ("./LOGS/SPRING_WEB/SPRING_WEB_${date}.log")
```

One of the main features of `Bobbin` is that it easily separates the logging output into dedicated log files
based on Level, Thread name, Class or Package names or other conditions.

So why would we have to bother looking for our HTTP logs in the files with other data?

This part of the `Bobbin.yml` does the magic and separates Spring Boot HTTP logs into a dedicated file for our ease:

```yaml
  - name: io.infinite.bobbin.config.FileDestinationConfig
    packages: [org.springframework.web]
    fileName: ("./LOGS/SPRING_WEB/SPRING_WEB_${date}.log")
``` 

As you can see we are writing logs from classes with Package Name having `'org.springframework.web'` into `SPRING_WEB` 
directory!

Simple, isn't it?

And here is the `./LOGS/SPRING_WEB/SPRING_WEB_2020-07-12.log` file contents:

```
2020-07-12 16:20:37:825|aed8621a-202a-4c82-811b-a278c43e7989|debug|http-nio-8089-exec-4|org.springframework.web.filter.CommonsRequestLoggingFilter|Before request [POST /pigeon/enqueue?source=postman&endpoint=HEALTHCHECK]
2020-07-12 16:20:37:829|aed8621a-202a-4c82-811b-a278c43e7989|trace|http-nio-8089-exec-4|org.springframework.web.servlet.DispatcherServlet|POST "/pigeon/enqueue?source=postman&endpoint=HEALTHCHECK", parameters={masked}, headers={masked} in DispatcherServlet 'dispatcherServlet'
2020-07-12 16:20:37:829|aed8621a-202a-4c82-811b-a278c43e7989|trace|http-nio-8089-exec-4|org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping|Mapped to io.infinite.pigeon.springdatarest.controllers.EnqueueController#post(HttpServletRequest)
2020-07-12 16:20:37:830|aed8621a-202a-4c82-811b-a278c43e7989|trace|http-nio-8089-exec-4|org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod|Arguments: [org.springframework.web.util.ContentCachingRequestWrapper@68a24bde]
2020-07-12 16:20:37:851|aed8621a-202a-4c82-811b-a278c43e7989|debug|http-nio-8089-exec-4|org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor|Using 'application/json', given [*/*] and supported [application/json, application/*+json, application/json, application/*+json, application/cbor, text/yaml]
2020-07-12 16:20:37:851|aed8621a-202a-4c82-811b-a278c43e7989|trace|http-nio-8089-exec-4|org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor|Writing [io.infinite.pigeon.springdatarest.controllers.EnqueueResponse(result:Enqueued successfully, inputMessageUrl:/pigeon/inputMessages/5, readableHttpLogsUrl:/pigeon/readableHttpLogs/search/findByInputMessageId?format=yaml&inputMessageId=5)]
2020-07-12 16:20:37:852|aed8621a-202a-4c82-811b-a278c43e7989|trace|http-nio-8089-exec-4|org.springframework.web.servlet.DispatcherServlet|No view rendering, null ModelAndView returned.
2020-07-12 16:20:37:852|aed8621a-202a-4c82-811b-a278c43e7989|debug|http-nio-8089-exec-4|org.springframework.web.servlet.DispatcherServlet|Completed 200 OK, headers={masked}
2020-07-12 16:20:37:852|aed8621a-202a-4c82-811b-a278c43e7989|debug|http-nio-8089-exec-4|org.springframework.web.filter.CommonsRequestLoggingFilter|REQUEST DATA : POST /pigeon/enqueue?source=postman&endpoint=HEALTHCHECK, payload=Hello World!]
```

Never the logging configuration has been so easy.

Go-on and try <router-link to="/Bobbin">Bobbin</router-link> today! It works perfectly with both `Java` and `Groovy`.