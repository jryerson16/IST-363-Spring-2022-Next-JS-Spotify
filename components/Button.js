import classNames from 'classnames/bind';
import Link from "next/link"
import styles from './button.module.scss'

let cx =classNames.bind(styles);

export default function Button({ label, path, type }) {
    let buttonClasses = cx({
        btn : true,
        primary : type === "primary",
        secondary : type === "secondary"
    })

    return <button className={buttonClasses}>
        {path ?
            <Link href={path}>
                <a>{label}</a>
            </Link>
        :
            label
        }
    </button>
}
