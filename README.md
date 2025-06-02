# Javascript-training

# Atomic Design

A UI design methodology that structures web applications into reusable components, similar to how elements combine to form molecules and organisms in chemistry.

1.Atoms 
Atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.

2.Molecules
Molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.

3.Organism
Organisms are relatively complex UI components composed of groups of molecules or atoms or other organisms.Organisms can consist of similar or different molecule types. A header organism might consist of dissimilar elements such as a logo image, primary navigation list, and search form.

4.Templet
Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.Another important characteristic of templates is that they focus on the page’s underlying content structure rather than the page’s final content. 

5.Pages
Pages are specific instances of templates that show what a UI looks like with real representative content in place. This is what users will see and interact with when they visit your experience.This is where you see all those components coming together to form a beautiful and functional user interface.


# 12 Factor App

1.Codebase - The application should have all its codebase in one place which is be tracked by a version control system with many deploys

2.Dependencies - All the application dependencies must be store in a seperate file with their required versions. It increases the speed of the development as now the developer is free from the task of managing the correct version of the libraries.

3.Configs - Store the configs in the environment variable file.We must store all the configurations like DB credentials, path, URI in the environment variables.

4.Backing Services - These are the external services that are used by the applications.The application must treat these services as resources which it is consuming over the network. It gives us the advantage that our services become easily interchangeable and offer great portability to our application.

5.Build, Release and Run - The three phases of the application development ie build,run and release must be seperated.

6.Processes - The processes must be stateless. Application must not use process local memory but external caching service must be used to store session information.

7.Port Binding - Port binding refers to how an application exposes HTTP (or other) services by binding to a port and listening for requests directly, rather than relying on an external web server handle that.

8.Concurrency - Each such process must be able to start, terminate and replicate itself independently and at any time. This principle allows horizontal scaling our application. It adds concurrency to our application in a very simpler way due to the existence of independent horizontally scalable processes.

9.Disposability -It refers to the graceful starting and termination of application processes without affecting the overall application's functionality. The state of our application or database must not be affected by it and the process must fail-safe. 

10.Development/Production Parity - It simply means that the development and production environment must be as similar as possible. The processes being used, technologies and the infrastructure must be the same.

11.Logs - It means that the logs should not be stored inside a particular process insted external centralized log sysytem should be used.It can be of different levels and are generally stored in a file named "logFile" in the storage. 

12.Admin Processes - These are the short lived scripts that must run in same environment with the main app services. It should use same configs and environment but it shouldn't affect long running services.


# Git vs Github

Git - It is a version control system which runs locally. It manages and track changes in our code.
Github - A web based platform for hosting git repositories. It provides UI for managing git repositories.

# Git Configs 

The are the configurations that the user sets in one's local system such as username and email so that git can track the people who have made changes and commits to the repo.

# .gitignore 

These are the files which git doesnt track. These can be configs file or environmental variables file.

