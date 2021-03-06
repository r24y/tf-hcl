---
title: README
path: /readme/
layout: home
---

[![Build Status](https://travis-ci.org/ryaninvents/tf-hcl.svg)](https://travis-ci.org/ryaninvents/tf-hcl)
[![Coverage Status](https://coveralls.io/repos/github/ryaninvents/tf-hcl/badge.svg?branch=develop)](https://coveralls.io/github/ryaninvents/tf-hcl?branch=develop)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

<!-- homepage hide start -->

# tf-hcl

Hashicorp Config Language parsing/generating.

<!-- homepage hide end -->

## Usage

```javascript
const makeParser = require('tf-hcl').makeParser;

const parser = makeParser();
parser.feed(`
# Simple EC2 instance
resource "aws_instance" "my_ec2" {
  ami           = "\${data.aws_ami.ubuntu.id}"
  instance_type = "t2.micro"

  tags {
    Name = "HelloWorld"
  }
}
`);

const results = parser.results[0];
```

AST follows the [Unist](https://github.com/syntax-tree/unist) schema but is otherwise undocumented. See [the test snapshots](./lib_test/test/snapshots/interpolated-expressions.spec.js.md) or read [the tests](./test) for details; I'll document these once the whole library is stable.

## Contributing

This project uses [ESLint-style commit messages](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-eslint/readme.md).
