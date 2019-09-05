# gulp-gwd-tasks
Renaming pubished GWD files and packaging them for RedTrax CMS.

## Dependencies
*npm*
del
merge-stream
path
gulp
gulp-rename
gulp-zip
vinyl-paths

*Custom utility*
fsUtils.js

## Setup
Place each GWD banner in a folder named with it's Redtrax name inside the *src* directory. Set that banner to publish into the *dist* directory. Publishing will make a folder with a duplicate name inside *dist*

## Tasks
**build** (default)
Renames the pubplished index.html to the src project folder name 
**zip**
Runs build 1st and then packages the published banner into a _final.zip and the src files into the _source.zip
## Usage

To rename the published banners from *index.html* to the given RedTrax name:
```javascript
gulp
```
To rename the files and create the RedTrax _final and _source zips:
```javascript
gulp zip
```
