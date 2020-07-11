Dear Readers,

A warm welcome to the very first post of our Blog 🎈🎆✨!

Today we will show an example of a useful `Groovy Traits` feature:
- Multiple inheritance of static and instance init blocks

Let's consider below use case:

<img src="img/theme/TraitsUML.jpg" alt="Circle image" class="img-fluid">


* Several classes extend `same ancestor class` (e.g. java.lang.Thread) and are instantiated into a `limited number of instances`
* These classes are `not within same inheritance hierarchy` except for the above common ancestor
* However these classes share certain traits:
    * Every instantiation increments a static counter (`"instanceCounter"`)
    * Upon instantiation, it is needed to automatically set thread name to Simple Class Name + instance #, e.g.:
        - `SenderThread1, SenderThread2, ReceiverThread1, ReceiverThread2, etc...`

This is a good example when `multiple inheritance` can be applied.

Moreover - this is the case when static and instance [init blocks](https://stackoverflow.com/a/3987586/7727700) can be used.

Java does not support multiple inheritance except for the interfaces.

That is where `Groovy Traits` come to our help.

For those who don't know it yet, Groovy Trait is like an Interface with members (fields, methods).
And starting from Groovy version 2.5.5 - the Traits can support init blocks - allowing multiple inheritance of initialization traits.

> If class implements more than 1 trait containing static init block - all the static init blocks are invoked.
To illustrate this we added "InitLoggingTrait".

Let's try it out!

InitLoggingTrait:
```groovy
trait InitLoggingTrait {
    static {
        printlnFormatted "Init Class"
    }
    static void printlnFormatted(String string) {
        System.out.println(String.format("%s : %s : %s", Thread.currentThread().getName().padRight(30), getMetaClass().getTheClass().getSimpleName().padRight(30), string))
    }
}
```
InstanceCounterTrait:
```groovy
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
```
SenderThread:
```groovy
class SenderThread extends Thread implements InstanceCounterTrait, InitLoggingTrait {
    void run() {
        printlnFormatted "Run (Sending)"
    }
}
```
ReceiverThread:
```groovy
class ReceiverThread extends Thread implements InstanceCounterTrait, InitLoggingTrait {
    void run() {
        printlnFormatted "Run (Receiving)"
    }
}
```
Let's test the code:
```groovy
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

`Live Groovy. Code Groovy.`