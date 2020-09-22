# Coding Standards and Practices

For each language that we use, primarily Python and Javascript, we will enforce guidelines to enhance collaboration and have an efficient development experience.

## Repository/Directory Structure
-   All unit tests should be put inside a “test” folder. 
-   VueJs easily allows the creation of a new project from a template and will define the standard directory structure for you.
- Python directory structures should follow a standard:
```
Project/
|
`-- project/
|   `-- test/
    |	`-- __init__.py
 	|	`-- test_main.py
|   `-- __init__.py
|   `-- main.py
|
`-- requirements.txt
`-- README.md
`-- venv/ (Not to be committed)
|   `-- ...
```

## Branch/Release Management

Every new feature should be developed on a separate branch. Once complete, a pull request will be reviewed by one or two other developers. If all the requirements are satisfied, it can be merged with master. If the branch contains a significantly large feature, a code review meeting will take place to go through the code.

When the code is ready for a release, a branch is created and tagged with the release # and head continues for new feature development

## Coding Standards

### Language Agnostic Standards:
- **Documentation is required.**
	-	Each function/method should have a docstring.
	-	Add enough documentation so that it is easily understandable. (If you come back and look at the code the next day, you’ll be able to understand what’s going on.)
	-	Suggestion: At the top of each important file, please have a general description of what is going on in it. This will provide other developers with a high-level description of what the file does without needing to read through the whole thing.
		-	Ex: 
```
/* crawl.js
Author: Raiyan Rahman
Date: March 1st, 2020
Description: This script takes in one or more urls and then crawls those
dynamically rendered webpages and returns the JSON file containing lists
of tuples of links and titles for each url.
Use: "node crawl.js -l <url1> ..."
Output: link_title_list.json
*/
```
- No print statements. We will be using logs. Python has a standard [logging library](https://docs.python.org/3/library/logging.html) while Javascript has [Winston](https://github.com/winstonjs/winston), a highly configurable logger that should be great for our needs.
- [Be explicit, rather than implicit.](https://miguelgfierro.com/blog/2018/python-pro-tips-understanding-explicit-is-better-than-implicit/#:~:text=In%20the%20explicit%20behavior%2C%20it,the%20code%20is%20called%20get.&text=An%20implicit%20behavior%20would%20have,manage%20internally%20the%20different%20inputs.)
- All variable/function/class names must be self-descriptive. We will avoid the use of any global variables that can be accessed by different parts of the codebase.
- Write efficient and readable code.
- Use helper functions instead of one large function.
-  **Error Handling:**
	- Report them descriptively though logging.
	- Throw an exception rather than returning an exit code and handle the exception.
	- Mention what will be returned in the case of an error in the docstring.
- API Status Codes: Follow the guidelines described [here](https://restfulapi.net/http-status-codes/).
- Before programming what data is returned through a JSON or CSV, create a schema and share it with the other developers so they may weigh in with whether they may need any specific data.
- Single return statement.
- Make commit messages descriptive of what changes you made.

### Python:
- Naming Conventions: From [PEP-8](https://realpython.com/python-pep8/#naming-styles)
- 
| Type | Naming Convention | Examples |
|--|--|--|
| Function | Use a lowercase word or words. Separate words by underscores to improve readability. | function, my_function |
| Variable | Use a lowercase single letter, word, or words. Separate words with underscores to improve readability. | x, var, my_variable |
| Class | Start each word with a capital letter. Do not separate words with underscores. This style is called camel case. | Model, MyClass |
| Method | Use a lowercase word or words. Separate words with underscores to improve readability. | class_method, method |
| Constant | Use an uppercase single letter, word, or words. Separate words with underscores to improve readability. | CONSTANT, MY_CONSTANT, MY_LONG_CONSTANT |
| Module | Use a short, lowercase word or words. Separate words with underscores to improve readability. | module.py, my_module.py |
| Package | Use a short, lowercase word or words. Do not separate words with underscores. | package, mypackage |

- Linter - [PyLint](https://www.pylint.org/) + [PEP-8](https://pypi.org/project/pep8/)
- Testing Framework: [unittest](https://docs.python.org/3/library/unittest.html), [Coverage.py](https://coverage.readthedocs.io/en/coverage-5.2.1/) (Provides code coverage)
- Use of virtual environment - [virtualenv](https://virtualenv.pypa.io/en/latest/)
	- We will make use of a requirements.txt to contain all used packages so that we may replicate python environments easily.
	- We will take care to not add any unused packages and to minimize the number of different packages that we use to avoid redundant ones.
- For the microservices and API development, we will be using the [flask](https://flask.palletsprojects.com/en/1.1.x/) microframework. It is very easy to set up and configure. If we plan to create multiple microservices, it may be worthwhile to create a flask-seed application to act as a template so that we may quickly clone it and start development (Think about making one when we set up our first microservice).
	- Very detailed flask tutorial found [here](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) that will teach every aspect of microservices/API creation.
- Take heed of The Zen of Python always available to you. Open the Python interpreter and do:
```
>>> import this
```

### JavaScript:
- Naming Conventions:
	- Variables and functions: **camelCase**
	- Classes: **PascalCase**
- Linters: [ESLint](https://eslint.org/docs/user-guide/getting-started)
- Use semi-colons.
- Only use the npm modules necessary.
- Testing Framework: [Jest](https://jestjs.io/) (This also provides code coverage)
- Do not commit the node_modules folder. Commit package.json, which will contain all the metadata that npm will need to retrieve all the dependencies and libraries used.
- For [VueJs](https://vuejs.org/):
	- Use [Vuex](https://vuex.vuejs.org/) store to contain a global data store throughout the application.
	- Use [Vue Router](https://router.vuejs.org/) to add simple navigational structure to the front-end



## Testing
All features should have tests run in Travis.

Test everything with unit tests before it can be pushed onto the master branch.

Suggestion: Aim for 80% code coverage. (Or a % that can be agreed upon in a meeting prior to beginning testing)
- Ensure that you are using the most up-to-date libraries and packages when newly adding them to the project.
- Do not use any deprecated functions.

