// para receber valores dinamicos

import Layout from 'src/components/Layout'

function SeriePage({serie}){
  return (
    <Layout
      title={serie.name}
      path={`/${serie.slug}`}
      description={serie.description}
    >

    </Layout>
  )
}

export default SeriePage;