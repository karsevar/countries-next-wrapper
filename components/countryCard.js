import {Card, CardContent, CardActionArea, Typography, CardMedia} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import ReactCountryFlag from 'react-country-flag'
import Link from 'next/link'

const useStyles = makeStyles({
    root: {
        width: '250px',
        margin: '25px'
    },
    flagSvg: {
        width: '100%',
        height: '200px',
        position: 'relative'
    }
})
export default function CountryCard({country}) {
    const classes = useStyles()

    return (
        <Link href={`/countries/${country.name}`}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    {/* <CardMedia component='svg' height='140' image={}/> */}
                    <div className={classes.flagSvg}>
                        <ReactCountryFlag countryCode={country.alpha2Code} style={
                            {width: '250px', height: '250px', position: 'absolute', top: -50, left: -15}
                        } svg />
                    </div>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {country.name}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        <b>Population:</b> {country.population}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        <b>Region:</b> {country.region}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        <b>Capital:</b> {country.capital}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
    )
}