import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fearless',
    Svg: require('@site/static/img/guitar.svg').default,
    description: (
      <>
        "Fearless," released in 2008, is Taylor Swift's second studio album that solidified her country-pop crossover appeal. Featuring hits like "Love Story" and "You Belong with Me," the album captures the excitement and heartbreak of young love, earning critical acclaim and multiple awards.
      </>
    ),
  },
  {
    title: 'The Tortured Poets Department',
    Svg: require('@site/static/img/typewriter.svg').default,
    description: (
      <>
        The "Tortured Poets Department" album by Taylor Swift, released in 2023, blends introspective lyrics with a rich tapestry of sounds. It explores themes of heartbreak, resilience, and artistic vulnerability, resonating deeply with fans.
      </>
    ),
  },
  {
    title: '1989',
    Svg: require('@site/static/img/vinyl.svg').default,
    description: (
      <>
        "1989" is Taylor Swift's first official pop album, marking a significant shift in her musical style. Released in 2014, it features hit singles like "Shake It Off" and "Blank Space," showcasing themes of independence and self-discovery.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
