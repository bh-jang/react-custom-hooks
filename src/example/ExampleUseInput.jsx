import useInput from '../hooks/useInput'
import usePhoneInput from '../hooks/usePhoneInput'

const ExampleUseInput = () => {    
    // Basic CASE
    const name = useInput("");
    
    // validator CASE
    const maxLen = (value) => value.length < 3;
    const old = useInput("", maxLen);

    // Extend CASE
    const phone = usePhoneInput("");

    return (
        <div>
            <h4>useInput</h4>
            <span>name</span>
            <input {...name} />
            <br />
            {" "}
            <span>old (maxLen: 2)</span>
            <input {...old} />
            <br />
            {" "}
            <span>Phone Number(010-0000-000)</span>
            <input {...phone} />
        </div>
    )
}

export default ExampleUseInput;