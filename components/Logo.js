import Image from 'next/image'

const Logo = ({ color = "black", size = 1}) => {
    return <Image 
        src={`/images/spotify-logo-${color}.svg`}
        alt="Spotify Logo"
        width={size * 63}
        height={size * 20}
        //layout="responsive"
    />
}
export default Logo;