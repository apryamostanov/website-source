<template>
    <div class="section section section-shaped my-0 overflow-hidden">
        <div>
            <div class="shape shape-style-1 shape-primary bg-gradient-indigo">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-100">
                <div class="row justify-content-center text-center mb-sm">
                    <div class="col-lg-8">
                        <h2 class="display-3 text-white">Groovy Traits</h2>
                        <p class="lead text-white">Static and instance init blocks</p>
                    </div>
                </div>
                <card shadow class="shadow-lg--hover mt-5">
                    <vue-markdown>
**2018-11-17**

This is our first post!

Today we will show an example of a new useful **Groovy Traits** feature:
- Multiple inheritance of static and instance init blocks

Note: it seems that this is first post about this feature as it was implemented just a few days back thanks to Groovy Team and [paulk_asert](https://groovy-community.slack.com/team/U2P6GPHHC).

Let's consider below use case:
* Several classes extend **same ancestor class** (e.g. java.lang.Thread) and are instantiated into a **limited number of instances**
* These classes are **not within same inheritance hierarchy** except for the above common ancestor
* However these classes share certain traits:
    * Every instantiation increments a static counter (**"instanceCounter"**)
    * Upon instantiation, it is needed to automatically set thread name to Simple Class Name + instance #, e.g.:
        - **SenderThread1, SenderThread2, ReceiverThread1, ReceiverThread2, etc...**

This is a classical example when **multiple inheritance** can be applied.

Moreover - this is the case when static and instance **[init blocks](https://stackoverflow.com/a/3987586/7727700)** can be used.

Java does not support multiple inheritance except for the interfaces.

That is where **Groovy** comes to our help - with the awesome **"traits"** concept.

And starting from Groovy version 2.5.5 - the "traits" can support init blocks - allowing multiple inheritance of initialization traits.

> Note: If class implements more than 1 trait containing static init block - all the static init blocks are invoked.
To illustrate this we added "InitLoggingTrait".

Let's try it out!

```groovy
trait InitLoggingTrait {
    static {
        printlnFormatted "Init Class"
    }
    static void printlnFormatted(String string) {
        System.out.println(String.format("%s : %s : %s", Thread.currentThread().getName().padRight(30), getMetaClass().getTheClass().getSimpleName().padRight(30), string))
    }
}
trait InstanceCounterTrait {
    static private Integer instanceCounter //immutable, non-shareable
    static {
        instanceCounter = 0
    }
    {
        instanceCounter = instanceCounter + 1
        setName(getClass().getSimpleName() + instanceCounter)
    }
}
class SenderThread extends Thread implements InstanceCounterTrait, InitLoggingTrait {
    void run() {
        printlnFormatted "Run (Sending)"
    }
}
class ReceiverThread extends Thread implements InstanceCounterTrait, InitLoggingTrait {
    void run() {
        printlnFormatted "Run (Receiving)"
    }
}
Thread.currentThread().setName("Main")
System.out.println("Thread Name".padRight(30) + " : " + "Class Name".padRight(30) + " : Message")
System.out.println("---------------------------------------------------------------------------")
(0..3).each {
    new SenderThread().start()
    Thread.sleep(200)
    new ReceiverThread().start()
    Thread.sleep(200)
}
```

And the result:

```
Thread Name                    : Class Name                     : Message
---------------------------------------------------------------------------
Main                           : SenderThread                   : Init Class
SenderThread1                  : SenderThread                   : Run (Sending)
Main                           : ReceiverThread                 : Init Class
ReceiverThread1                : ReceiverThread                 : Run (Receiving)
SenderThread2                  : SenderThread                   : Run (Sending)
ReceiverThread2                : ReceiverThread                 : Run (Receiving)
SenderThread3                  : SenderThread                   : Run (Sending)
ReceiverThread3                : ReceiverThread                 : Run (Receiving)
SenderThread4                  : SenderThread                   : Run (Sending)
ReceiverThread4                : ReceiverThread                 : Run (Receiving)
```

Happy hacking!

***Live Groovy. Code Groovy.***
                    </vue-markdown>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown' // production
    export default {
        methods: {
            skipFooterIcons() {
                return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && this.$screen.landscape);
            }
        },
        components: {
            VueMarkdown
        }
    };

</script>
<style>
</style>
