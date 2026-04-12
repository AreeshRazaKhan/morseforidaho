import SiteNav from '@/components/home/site-nav'
import Hero from '@/components/home/hero'
import MeetDavid from '@/components/home/meet-david'
import Platform from '@/components/home/platform'
import District from '@/components/home/district'
import WhyThisRace from '@/components/home/why-this-race'
import Testimonials from '@/components/home/testimonials'
import Events from '@/components/home/events'
import Election from '@/components/home/election'
import Faq from '@/components/home/faq'
import GetInvolved from '@/components/home/get-involved'
import SiteFooter from '@/components/home/site-footer'

const HomePage = () => {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <MeetDavid />
        <Platform />
        <District />
        <WhyThisRace />
        <Testimonials />
        <Events />
        <Election />
        <Faq />
        <GetInvolved />
      </main>
      <SiteFooter />
    </>
  )
}

export default HomePage
