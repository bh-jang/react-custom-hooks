import { useRef, useState } from "react"

const usePhoneInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const valLength = useRef(0);
    
    const onChange = (event) => {
        const {
            target: { value }
        } = event;

        const lastChar = value[value.length - 1];
        const regex = /[0-9]/;

        let autoAddDash = false;
        let autoDelDash = false;
        let willUpdate = true;

        if ([4, 9].includes(value.length)) {
            if ((value.length > valLength.current)) {
                autoAddDash = true;
            } else {
                autoDelDash = true;
            }
        }

        if (value.length > 13) { 
            willUpdate = false;
        }

        if (lastChar && !regex.test(lastChar) && !autoDelDash) {
            willUpdate = false;
        }

        if (willUpdate) {
            let newValue = value;

            if (autoAddDash) {
                const arr =[...newValue]; 
                arr.splice(newValue.length - 1, 0, '-');
                newValue = arr.join("");
            }

            if (autoDelDash) {
                newValue = value.slice(0, value.length - 1);
            }

            valLength.current = newValue.length;
            setValue(newValue);
        }
}

    return { value, onChange };
}

export default usePhoneInput;