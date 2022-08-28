import gulp from "gulp";
import gpug from "gulp-pug";
//import del from "del";

const routes = {
	pug: {
		src: "src/*.pug",
		// src폴더안의 다른 폴더안에 있는 pug까지 컴파일 하려면 /src/**/*.pug라고 쓰면됨
		dest: "build",
	},
};

export function pug() {
	return gulp
		.src(routes.pug.src)
		.pipe(gpug())
		.pipe(gulp.dest(routes.pug.dest));
}

//export const clean = () => del(["build"]);

export const dev = gulp.series([pug]);
