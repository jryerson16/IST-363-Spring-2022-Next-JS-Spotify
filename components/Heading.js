import classNames from 'classnames/bind'
import styles from './heading.module.scss'

let cx = classNames.bind(styles)

const Heading = ({ children, level }) => {
    let headingClasses = cx({
        heading : true,
        heading1 : level === "1",
        heading2 : level === "2",
        heading3 : level === "3"
    });
   

    if(level === "1") {
        return <h1 className={headingClasses}>{children}</h1>
    } else if (level === "2") {
        return <h2 className={headingClasses}>{children}</h2>
    } else if (level === "3") {
        return <h3 className={headingClasses}>{children}</h3>
    } else {
        return <p>The heading component requires the level prop.</p>
    }
}
export default Heading;