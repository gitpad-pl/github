# Information about used packages



## package-json-to-readme Build Status

Generate a README.md from package.json contents. Works with node and io.js.
Why?

Every project worth its salt has a README that answers (at least) the following questions:

    What's it called?
    What is it for?
    How do I install it?
    How do I use it?
    How do I test it?
    What is the license?

With npm modules, most of that info can be gleaned from properties in the package.json file: name, description, scripts.test, preferGlobal, etc. That's why package-json-to-readme exists. Use it to generate a decent boilerplate README, then iterate from there.
Installation

    npm i -g package-json-to-readme


## USAGE

# Write to stdout

    readme package.json

# Pipe output into a new file

    readme package.json > PACKAGE.md
