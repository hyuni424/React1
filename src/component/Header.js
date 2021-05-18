import { Link } from "react-router-dom"

export default function Header(){
    return (
        <div className="header">
            <h2><Link to="/">토익 영단어 고급</Link></h2>
            <div className="menu">               
                <Link to="/create_word" className="link">
                    단어 추가
                </Link>
                <Link to="/create_day" className="link">
                    day 추가
                </Link>               
            </div>
        </div>
    )
}