import { useField } from "formik";

export default function InputField({ label, ...props}: any){

    const [inputProps, meta] = useField(props);
    const id = props.id || props.name

    return(
        <>
        {label && (
            <label className="font-bold text-lg" htmlFor={id}>{label}</label>
        )}
            <input id={id} {...inputProps} {...props}/>
                {meta.error && meta.touched && (
                <p className="font-bold text-red-400">{meta.error.toString()}</p>
            )}
        </>
    )
}
