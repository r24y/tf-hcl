# Snapshot report for `lib_test/test/interpolated-expressions.spec.js`

The actual snapshot is saved in `interpolated-expressions.spec.js.snap`.

Generated by [AVA](https://ava.li).

## should handle variable names containing hyphens

> subtraction of two variables containing hyphens

    `Config[1]␊
    └─ Assignment[2] (1:1-1:56, 0-55)␊
       ├─ Key[1] (1:1-1:9, 0-8) [name="my_value"]␊
       │  └─ Identifier: "my_value" (1:1-1:9, 0-8)␊
       └─ TemplateString[1] (1:12-1:56, 11-55)␊
          └─ Interpolation[1] (1:13-1:55, 12-54)␊
             └─ BinaryExpression[2] (1:15-1:54, 14-53) [operator="-"]␊
                ├─ Identifier: "some-important-value" (1:15-1:35, 14-34)␊
                └─ Identifier: "some-other-value" (1:38-1:54, 37-53)`
