import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CountryCard from '../components/countryCard'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px 30px 20px 30px'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}))

export default function CountriesList({countries}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {countries.map(country => {
                return (
                    <CountryCard country={country} />
                )
            })}
        </div>
    )
}