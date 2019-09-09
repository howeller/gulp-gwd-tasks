# gulp-gwd-tasks
Renaming published GWD files and packaging them for RedTrax CMS.

## Dependencies
**npm**

```cli
del
merge-stream
path
gulp
gulp-rename
gulp-zip
vinyl-paths
```

**Custom utility**
```cli
fsUtils.js
```

## Setup
Place each GWD banner in a folder named with it's Redtrax name inside the `src` directory. Set that banner to publish into the `dist` directory. Publishing will make a folder with a duplicate name inside `dist`

## Tasks
**`zip`** (default)\
Runs build 1st and then packages the published banner into a `_final.zip` and the source files into the `_source.zip`

**`rename`**\
Renames the published `index.html` to the src project folder name

## Usage
To rename the files and create the RedTrax `_final` and `_source` zips:
```cli
gulp
```
```cli
gulp zip
```
or
To rename the published banners from `index.html` to the given RedTrax name:
```cli
gulp rename
```
