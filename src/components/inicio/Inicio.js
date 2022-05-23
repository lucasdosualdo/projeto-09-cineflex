import { Link } from "react-router-dom";
import Films from '../films/Films'

export default function Inicio() {
    return (
        <>
            <div className="header">
                <h1>CINEFLEX</h1>
            </div>
            <div className="select">
                <h3>Selecione o filme</h3>
            </div>

            <div>
                <Films />
            </div>
        </>
    )
}