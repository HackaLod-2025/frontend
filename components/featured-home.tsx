import styles from './featured-home.module.css';

const FeaturedHome = () => {
  return (
    <section className={`${styles.featuredHome} ${styles.featureFullbleed}`}>
      <div className={styles.featureOne}>
        Featured 1
      </div>
      <div className={styles.featureTwo}>
        Featured 2
      </div>
    </section>
  )
}

export { FeaturedHome };
