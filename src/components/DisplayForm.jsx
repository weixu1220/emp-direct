import Form from "./Form";
import { useState } from "react";

export default function DisplayForm() {
    const [isShown, setIsShown] = useState(false);

    function display() {
        setIsShown((current) => !current);
    }
    return (
        <div className="form">
            <button onClick={display}> {!isShown ? "Add Employee" : "Hide"}</button>
            {isShown && <Form />}
        </div>
    );
}
