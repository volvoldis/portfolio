import Head from 'next/head';

import { OPEN_GRAPH_TAGS } from '@/common/seo.config';
// import ExpierenceSection from '@/components/ExpierenceSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IntroSection from '@/components/IntroSection';
import SkillsSection from '@/components/SkillsSection';
import WorksSection from '@/components/WorksSection';

export default function Main() {
  return (
    <>
      <Head>
        <title>Portfolio: Frontend Developer</title>
        <meta name='description' content='Frontend Developer' />
        {OPEN_GRAPH_TAGS.map(({ key, property, content }) => (
          <meta key={key} property={property} content={content} />
        ))}
      </Head>
      <Header />
      <main>
        <IntroSection />
        {/* <ExpierenceSection /> */}
        <SkillsSection />
        <WorksSection />
      </main>
      <Footer />
    </>
  );
}
