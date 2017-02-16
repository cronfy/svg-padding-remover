# svg-padding-remover

Removes padding from svg files. Requires [PhantomJS](http://phantomjs.org/).

## Demo

Before:

<img style="border: 1px solid red;" width="100px" src="https://rawgit.com/cronfy/f87891a355c6db8432e2c6dbe47b02d7/raw/8971395fbfcd21062ea2481f2c3eba19118cd810/icon-padding.svg">

After:

<img style="border: 1px solid red;" width="100px" src="https://rawgit.com/cronfy/e3b1df6b31c709910a9fd4ce8aab45f0/raw/485161c2f29dd33ac1a77f983a1a8175b0106651/icon-no-padding.svg">

## Installation

PhantomJS is required:

```
npm install -g phantomjs-prebuilt
```

Then just use it to run `svg-padding-remover.js`.

## Usage

```
phantomjs svg-padding-remover.js path/to/image.svg > new.svg
```

## Thanks

Thanks to all who participated in [discussion](http://ru.stackoverflow.com/questions/627684/svg-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D0%BE%D1%82%D1%81%D1%82%D1%83%D0%BF%D1%8B-%D0%BF%D0%BE-%D0%BA%D1%80%D0%B0%D1%8F%D0%BC-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8).
