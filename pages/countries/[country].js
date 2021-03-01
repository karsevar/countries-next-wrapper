import {getCountryInfo, getAllCountryNames} from '../../lib/getCountries'
import {getAllRoutes} from '../../store/routes/action'
import {makeStyles} from '@material-ui/core'
import {Button} from '@material-ui/core'
import HeaderBar from '../../components/headerBar'
import ReactCountryFlag from 'react-country-flag'
import Link from 'next/link'
import { StoreTwoTone } from '@material-ui/icons'
import {wrapper} from '../../store/store'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '150px 80px 5px 80px'
    },
    margin: {
        margin: theme.spacing(1),
        width: '150px'
    },
    buttonContainer: {
        marginBottom: '60px'
    },
    countryDescription: {
        width: '100%'
    }
}))

export default function CountryView({countryData}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <HeaderBar />
            {console.log('country data:', countryData)}
            <div className={classes.buttonContainer}>
                <Link href='/'>
                    <Button size='medium' color='primary' variant='outlined' className={classes.margin}>
                        Back
                    </Button>
                </Link>
            </div>
            <div className={classes.countryDescription}>
                <ReactCountryFlag countryCode={countryData[0].alpha2Code}
                    style={
                        {width: '40%', height: 'auto'}
                    }
                svg/>

            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const paths = await getAllCountryNames()
    return {
        paths,
        fallback: false
    }
}

// export const getStaticPaths = wrapper.getStaticPaths(async ({store}) => {
//     await store.dispatch(getAllRoutes())
// })

export const getStaticProps = async ({params}) => {
    const countryData = await getCountryInfo(params.country)
    return {
        props: {
            countryData
        }
    }
}

