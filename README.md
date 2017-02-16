# svg-padding-remover

Removes padding from svg files. Requires [PhantomJS](http://phantomjs.org/).

## Demo

```
    before.svg         after.svg
+----------------+
|                |     ._______.
|    \  O  /     |     |\  O  /|
|     `-|-'      | ==> | `-|-' |
|      <->       |     |  <->  |
|                |     `▔▔▔▔▔▔▔` 
+----------------+
```

Or see these examples:
[before.svg](https://gist.github.com/cronfy/f87891a355c6db8432e2c6dbe47b02d7),
[after.svg](https://gist.github.com/cronfy/e3b1df6b31c709910a9fd4ce8aab45f0).

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
