import SerieViewContent from './SerieViewContent';
import SerieViewHeader from './SerieViewHeader';

function SerieView({serie}) {
  return (
    <>
      <SerieViewHeader serie={serie} />
      <SerieViewContent serie={serie} />
    </>
  )
}

export default SerieView;