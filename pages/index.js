import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderBar from '../components/headerBar'
import CountriesList from '../components/countriesList'
// import {getAllCountries} from '../lib/getCountries'
import SearchBar from '../components/searchBar'
import {connect} from 'react-redux'
import {getAllCountries} from '../store/countries/action'
import {wrapper} from '../store/store'

function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBar />
      <SearchBar />
      <CountriesList countries={props.countries} />
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.dispatch(getAllCountries())
})

const mapStateToProps = (state) => ({countries: state.countries})

export default connect(mapStateToProps, {})(Home)
