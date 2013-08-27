# About

This project basically exists to make running `git bisect` to detect issues in an ember.js application easier.

# Usage

## Setup

Clone both this project and the main `ember.js` repo.

```sh
git clone git@github.com:emberjs/ember.js.git
git clone git@github.com:rjackson/ember_bisect.git
```

Make sure you have the dependencies needed to build ember.js:

```sh
cd ember.js

# make sure that you have ruby >= 1.9.3 and bundler installed
bundle install
```

### For automated karma testing (requires node.js):

```
# if you don't already have karma installed
npm install -g karma 

# navigate to the ember_bisect director
cd ember_bisect

# install required packages
npm install
```

### For manual browser testing:

Open up `ember_bisect/index.html` in your browser.

## Customize tests

Update `ember_bisect/assets/app.js` and `ember_bisect/assets/tests.js` for your specific test.

## Running `git bisect`

Now we need to setup the `ember.js` repo that we cloned earlier and tell git what commit range to work on.

```
# navigate to the repo cloned above
cd ember.js

# tell git you are going to start bisecting
git bisect start

# tell git which commit is good (can be a commit SHA, tag, branch, etc)
git bisect good v1.0.0-rc.7

# tell git which commit is bad (can be a commit SHA, tag, branch, etc)
# leave commit blank to indicate that the current commit is bad
git bisect bad 
```

From this point git is going to help us find the breaking commit by doing a binary search through the commit range that we specified. It will select and checkout the next commit to test for us.  All we need to do is build ember.js and test in the browser.

```
# Step #1: from the current commit in `ember.js` repo
rake dist

# Step #2: test in your browser (on OS X `open ../ember_bisect/index.html`)

# Step #3: now we need to tell git if that commit was good or bad
#   good -> `git bisect good`
#   bad ->  `git bisect bad`

git bisect [good|bad]

# Repeat from Step #1
```

When you have successfully identified the offending commit git will show it to you.

Thats it!
