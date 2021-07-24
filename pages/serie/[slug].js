import Layout from 'src/components/Layout';
import { getAllFullSeries } from 'src/lib/dato-cms';
import SerieView from 'src/components/SerieView';

function SeriePage({ serie }) {
  return (
    <Layout
      title={serie.name}
      path={`/${serie.slug}`}
      description={serie.description}
    >
      <SerieView serie={serie} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const series = await getAllFullSeries();
  const slug = params?.slug; 
  const serie = series.find((s) => s.slug === slug) || null;

  if (!serie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serie,
      allSeries: series,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const series = await getAllFullSeries();
  const slugs = series.map((s) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
};

export default SeriePage;