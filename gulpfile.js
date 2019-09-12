// Node & NPM packages
const del = require('del'),
			merge = require('merge-stream'),
			path = require('path'),
			gulp = require('gulp'),
			rename = require('gulp-rename'),
			zip = require('gulp-zip'),
			vinylPaths = require('vinyl-paths');

// Custom modules & config
const util = require('./lib/fsUtils');

const srcPath = './src',
			distPath = './dist',
			srcFolders = util.getFolders(srcPath);

// Gulp Tasks
const build = gulp.series(renameHtml);
const zipper = gulp.series(renameHtml, zipFiles);

gulp.task('rename', build);
gulp.task('zip', zipper);
gulp.task('default', zipper);

/* 
	Renames index to the folder name 
*/
function renameHtml(){
	let task = srcFolders.map(function(folder) {
		let _dist = path.join(distPath, folder);

		let _rename = gulp.src(_dist+'/index.html', { allowEmpty:true })
			.pipe(rename(folder+'.html'))
			.pipe(gulp.dest(_dist));

		// Deletes the original index.html that's leftover 
		let _clean = gulp.src(_dist+'/index.html', { allowEmpty:true }).pipe(vinylPaths(del));

		return merge(_rename, _clean);
	});
	return task[task.length-1];
}

/* 
	Packages everything into respective zip files and places a copy of the HTML file into zips folder for easy uploading to RT 
*/
function zipFiles() {
	let task = srcFolders.map(function(folder) {
		let _src = path.join(srcPath, folder),// Path source files
				_dist = path.join(distPath, folder),// Path to production files
				_dest = distPath+'/zips';

		let _final = gulp.src([_dist+'/**/*'],{base:_dist})
			.pipe(zip('_final.zip'))
			.pipe(rename(function(file){file.basename = folder + file.basename;}))
			.pipe(gulp.dest(_dest));

		let _source = gulp.src([_src+'/**/*'],{base:_src})
			.pipe(zip('_source.zip'))
			.pipe(rename(function(file){file.basename = folder + file.basename;}))
			.pipe(gulp.dest(_dest));

		let _html = gulp.src(_dist+'/'+folder+'.html').pipe(gulp.dest(_dest));

		return merge(_final, _source, _html);
	});
	return task[task.length-1];
};