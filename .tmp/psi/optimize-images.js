const sharp = require('sharp')
const fs = require('node:fs/promises')
const path = require('node:path')

const run = async () => {
  const rootDir = path.resolve(__dirname, '..', '..')
  const pubDir = path.join(rootDir, 'public')

  const jobs = [
    {
      src: path.join(pubDir, 'logo-morse.png'),
      out: path.join(pubDir, 'logo-morse.png'),
      transform: (img) =>
        img
          .resize({ width: 316, height: 220, fit: 'inside', withoutEnlargement: true })
          .png({ compressionLevel: 9, palette: true, quality: 90 }),
    },
    {
      src: path.join(pubDir, 'american-flag.jpg'),
      out: path.join(pubDir, 'american-flag.jpg'),
      transform: (img) =>
        img
          .resize({ width: 1600, withoutEnlargement: true })
          .jpeg({ quality: 65, mozjpeg: true, progressive: true }),
    },
  ]

  for (const job of jobs) {
    const before = (await fs.stat(job.src)).size
    const srcBuf = await fs.readFile(job.src)
    const outBuf = await job.transform(sharp(srcBuf)).toBuffer()
    const tmp = job.out + '.tmp'
    await fs.writeFile(tmp, outBuf)
    await fs.rename(tmp, job.out)
    const after = (await fs.stat(job.out)).size
    const saved = (((before - after) / before) * 100).toFixed(1)
    console.log(
      `${path.basename(job.src)}: ${(before / 1024).toFixed(1)} KB → ${(after / 1024).toFixed(1)} KB (-${saved}%)`,
    )
  }
}

run().catch((err) => {
  console.error('[optimize-images]:', err)
  process.exit(1)
})
