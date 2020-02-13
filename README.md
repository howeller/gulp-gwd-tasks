# gulp-gwd-tasks
Renaming published GWD files and packaging them for RedTrax CMS.

## Setup
1) You will need to have [NodeJs](https://nodejs.org/en/), & [Gulp](https://www.npmjs.com/package/gulp) installed globally. Follow the [Quick Start guide](https://gulpjs.com/docs/en/getting-started/quick-start) to get setup. 

2) Clone this repo or copy all contents to the root of your project folder.

3) In Terminal - navigate to your project folder and run `npm install` to download all of the npm packages.

4) Place each GWD banner in a folder named with it's Redtrax name inside the `src` directory. Set that banner to publish into the `dist` directory. Publishing will make a folder with a duplicate name inside `dist`

## Tasks
**`rename`**\
Renames the published `index.html` to the src project folder name

**`zip`** (default)\
Runs the `rename` task 1st and then packages the published banner into a `_final.zip` and the source files into the `_source.zip`

## Usage
To rename the published banners from `index.html` to the given RedTrax name:
```cli
gulp rename
```
To rename the files and create the RedTrax `_final` and `_source` zips:
```cli
gulp zip
```
or
```cli
gulp
```

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
