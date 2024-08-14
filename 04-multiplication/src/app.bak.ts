import { writeFile } from '@/utils/writeFile'
import { outputPath } from './constants/constants'

function getTimesX(x: number) {
    let data = `
================================
        Tabla del ${x}
================================\n`
    console.log('================================')
    console.log(`       Tabla del ${x}`)
    console.log('================================')
    for (let i = 1; i < 10; i++) {
        console.log(`${x} * ${i} = ${x * i}`)
        data += `${x} * ${i} = ${x * i}\n`
    }

    const file = `${outputPath}/tabla-${x}.txt`

    writeFile(data, file)
}

getTimesX(5)
