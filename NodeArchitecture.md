### Node Architecture
    1. Before nodejs JS was executing in browser and there exist JS engine in browsers. that takes JS code as i/p and convert it into machine code.

# Various Browsers with there JS Engine
    Edge    -   Chakra
    Firefox -   Spider Monkey
    Chrome  -   V8
   
    1. Due to this it might happen that same code behaves differently in different browsers.

    2. Browser provides runtime environment for JS code. In browser we have window and document object these allow us to work with environment in which our code runs.

    3. Rahn Dyle pick the V8 engine and put it in the cpp program and this program is called node. So node is runtime for js build on v8 and executes the JS code.

In node environment object are different from browser. we don't have document in node but we have file system.

So we can say node is program that includes V8 engine and some other modules that gives us capability not available in browser. 

Node is not programming languages.

Node is not a framework.

# How Node works?

1. Blocking and Non Blocking structure.
2. Node should be use for i/o intensive applications which include large network calls and should not be used for CPU intensive apps like video streaming or image manipulation service.
 