### Hexlet tests and linter status:

[![Actions Status](https://github.com/raf-coffee/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/raf-coffee/frontend-project-46/actions)
[![Node CI](https://github.com/raf-coffee/frontend-project-46/workflows/Node%20CI/badge.svg)](https://github.com/raf-coffee/frontend-project-46/actions)

<a href="https://codeclimate.com/github/raf-coffee/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/ccb21937fa1db1450a96/maintainability" /></a>
<a href="https://codeclimate.com/github/raf-coffee/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ccb21937fa1db1450a96/test_coverage" /></a>

# Difference calculator project

The project is a command-line utility for comparing data from two objects that are read from JSON, YML, and YAML file
formats. The utility can output differences in three formats: stylish, plain, and json.

# Using

```bash
gendiff [options] <filepath1> <filepath2>
например: gendiff -f plain file1.json file2.json
```

```bash
options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```

# Examples

```bash
gendiff -f stylish file1.json file2.json
{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
```

```bash
gendiff -f plain file1.json file2.yaml

Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```
