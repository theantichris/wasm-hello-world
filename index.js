import * as iw from 'inline-webassembly'

iw(`
    (module
        (func (export "add") (param $n1 i32) (param $n2 i32) (result i32)
            get_local $n1
            get_local $n2
            i32.add
        )
    )
`).then((wasmModule) => {
    const sum = wasmModule.add(44, 99)

    console.log(`Sum = ${sum}`)
})