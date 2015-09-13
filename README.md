# dm-dotfiles
dotfiles helper

## Description
* started project --> look at the [todos](todo.md) to see what will be done

## Run
```
dmdot [task]
dm-dotfiles [task]
```

## Install

```
npm install dm-dotfiles -g # for global use
npm install dm-dotfiles --save # for programmatically use
```

## Tasks

### [vimLinkSnippets](tasks/vimLinkSnippets/index.js)
* link the vim snippets

#### vimLinkSnippets global usage
```
dmdot [vimLinkSnippets|vls]
```

#### vimLinkSnippets programmatically usage
```javascript
var vimLinkSnippets = require("dm-dotfiles").vimLinkSnippets;
var vimLinkSnippetsResult = vimLinkSnippets.start();
```

#### vimLinkSnippets steps

#### vimLinkSnippets features

#### vimLinkSnippets config
```javascript
{
    "vimLinkSnippets": {
    }
}
```

### [test1](tasks/test1/index.js)
* 

#### test1 global usage
```
dmdot [test1]
```

#### test1 programmatically usage
```javascript
var test1 = require("dm-dotfiles").test1;
var test1Result = test1.start();
```

#### test1 steps

#### test1 features

#### test1 config
```javascript
{
    "test1": {
    }
}
```

### [vimLinkSnippets](tasks/vimLinkSnippets/index.js)
* 

#### vimLinkSnippets global usage
```
dmdot [vimLinkSnippets|vls]
```

#### vimLinkSnippets programmatically usage
```javascript
var vimLinkSnippets = require("dm-dotfiles").vimLinkSnippets;
var vimLinkSnippetsResult = vimLinkSnippets.start();
```

#### vimLinkSnippets steps

#### vimLinkSnippets features

#### vimLinkSnippets config
```javascript
{
    "vimLinkSnippets": {
    }
}
```

### [exampleAsync](tasks/exampleAsync/index.js)
* 

#### exampleAsync global usage
```
dmdot [exampleAsync]
```

#### exampleAsync programmatically usage
```javascript
var exampleAsync = require("dm-dotfiles").exampleAsync;
var exampleAsyncResult = exampleAsync.start();
```

#### exampleAsync steps

#### exampleAsync features

#### exampleAsync config
```javascript
{
    "exampleAsync": {
    }
}
```

### [exampleSync](tasks/exampleSync/index.js)
* 

#### exampleSync global usage
```
dmdot [exampleSync]
```

#### exampleSync programmatically usage
```javascript
var exampleSync = require("dm-dotfiles").exampleSync;
var exampleSyncResult = exampleSync.start();
```

#### exampleSync steps

#### exampleSync features

#### exampleSync config
```javascript
{
    "exampleSync": {
    }
}
```

## Config
* you can place a .dm-dotfiles.json file in your home directory (~/.dm-dotfiles.json)
* the following things are allowed at the moment
```javascript
{
}
```

## Lessons Learned
