import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

import SiteNav from '@/components/home/site-nav'
import SiteFooter from '@/components/home/site-footer'
import PageHero from '@/components/shared/page-hero'

export const metadata = {
  title: 'Social Posts — Morse For Idaho',
  description: 'Internal gallery of campaign social media creative.',
  robots: { index: false, follow: false },
}

const POSTS_DIR = join(process.cwd(), 'public', 'social-posts')

const readPosts = (prefix) =>
  readdirSync(POSTS_DIR)
    .filter((file) => file.startsWith(prefix) && file.endsWith('.html'))
    .sort()
    .map((file) => {
      const html = readFileSync(join(POSTS_DIR, file), 'utf8')
      const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? file
      const [slug, name] = title.split('·').map((part) => part.trim())
      return {
        file,
        number: slug?.replace(`${prefix}-`, '') ?? '',
        name: name ?? title,
      }
    })

const SocialPostsPage = () => {
  const feedPosts = readPosts('feed')
  const storyPosts = readPosts('story')

  return (
    <>
      <SiteNav />
      <main>
        <PageHero
          volume="Internal · The Press Room"
          title="The Social"
          titleAccent="Ledger."
          dek="Every feed and story graphic in the campaign's social rotation, rendered live from the source files. Click any card to open the post at full size in a new tab."
          watermark="XX"
          meta={[
            { label: 'Feed Posts', value: `${feedPosts.length} · 1080 × 1080` },
            { label: 'Story Posts', value: `${storyPosts.length} · 9 : 16` },
          ]}
        />

        {/* ═══════ FEED POSTS ═══════ */}
        <section className="relative bg-parchment overflow-hidden py-24 md:py-32">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -right-6 font-display font-extrabold text-[220px] md:text-[360px] leading-none text-parchment-3 select-none"
          >
            I
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-burgundy" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-burgundy">
                Chapter · I · Feed Posts
              </span>
            </div>
            <h2 className="font-display font-bold text-navy leading-[1.05] text-[clamp(36px,5vw,64px)] mb-16">
              The <span className="italic text-burgundy font-medium">Square</span> Canon.
              <span className="block mt-2 text-[13px] font-body font-bold uppercase tracking-[2px] text-ink-muted">
                1080 × 1080 · Instagram &amp; Facebook Feed
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {feedPosts.map((post) => (
                <a
                  key={post.file}
                  href={`/social-posts/${post.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-parchment-3 bg-navy-ink group-hover:border-gold/60 group-hover:-translate-y-1 transition-all">
                    <iframe
                      src={`/social-posts/${post.file}`}
                      title={post.name}
                      loading="lazy"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-[12px] tracking-[2.5px] uppercase text-gold-muted font-bold">
                      {post.number}
                    </span>
                    <span className="font-display font-bold text-navy text-lg group-hover:text-burgundy transition-colors">
                      {post.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-auto text-gold group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ STORY POSTS ═══════ */}
        <section className="relative bg-navy-deep text-parchment overflow-hidden py-24 md:py-32">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-8 font-display font-extrabold italic text-[220px] md:text-[360px] leading-none text-gold/[0.06] select-none"
          >
            II
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-gold">
                Chapter · II · Story Posts
              </span>
            </div>
            <h2 className="font-display font-bold leading-[1.05] text-[clamp(36px,5vw,64px)] mb-16">
              The <span className="italic text-gold font-medium">Vertical</span> Run.
              <span className="block mt-2 text-[13px] font-body font-bold uppercase tracking-[2px] text-parchment/50">
                9 : 16 · Instagram &amp; Facebook Stories
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
              {storyPosts.map((post) => (
                <a
                  key={post.file}
                  href={`/social-posts/${post.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[608/1080] overflow-hidden rounded-2xl border border-parchment/15 bg-navy-ink group-hover:border-gold/60 group-hover:-translate-y-1 transition-all">
                    <iframe
                      src={`/social-posts/${post.file}`}
                      title={post.name}
                      loading="lazy"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline gap-2.5">
                    <span className="text-[12px] tracking-[2px] uppercase text-gold-muted font-bold">
                      {post.number}
                    </span>
                    <span className="font-display font-bold text-parchment text-base leading-snug group-hover:text-gold transition-colors">
                      {post.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default SocialPostsPage
