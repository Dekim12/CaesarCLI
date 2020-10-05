# :rocket: Caesar cipher CLI tool

It is a tool to cipher a text by Caesar cipher.

## Launching

For launching the CLI execute the command with options from the root folder in a terminal:

```
$ node caesar_cli -a encode -s 7 -i "./files/input.txt" -o "./files/output.txt"
```

or

```
$ node caesar_cli --action decode --shift 7 --input ./files/input.txt --output ./files/output.txt
```

## Options list

CLI tool can accept 4 options (short alias or full name):

1. **-s**, **--shift** - a shift number*(required)*. This option should be a positive or a negative integer number.
2. **-a**, **--action** - an action*(required)*. This option should be a string with `encode` or `decode` value. Use `encode` to encode and `decode` to decode a text.
3. **-i**, **--input** - an input file*(optional)*. This option can be a path to a file. If it is a path the target file will be used as an input source. `stdin` will be used as an input source if the input file is missed.
4. **-o**, **--output** - an output file*(optional)*. This option can be a path to a file. If it is a path the target file will be used as an output source. `stdout` will be used as an output source if the input file is missed.

Options order doesn't matter.

## Closing

To exit from `stdin` should press **Ctr + C**.

Encrypting text will be written from stdin to the output file after exit.

### :tada: Happy encrypting!
